/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const { statSync } = require("node:fs");
const { join } = require("node:path");
const { promisify } = require("node:util");

const exec = promisify(require("node:child_process").exec);
const zip = promisify(require("zip-dir"));

const MAX_BYTES = 13312;
const distFolder = join(__dirname, "..", "public");
const filepath = join(__dirname, "..", "js13kgames.zip");

function zipDirectory(directory, targetFile) {
  return zip(directory, { saveTo: targetFile });
}

function compressHarder(zipFile) {
  // 100 iterations have been manually determined to be the maximum I can use
  // with an effect on the size
  return exec(`advzip -z -4 -i 100 -p ${zipFile}`);
}

function getFileSizeInBytes(filepath) {
  return statSync(filepath).size;
}

function fileIsUnderMaxSize(fileSize) {
  return fileSize <= MAX_BYTES;
}

zipDirectory(distFolder, filepath)
  .then(() =>
    console.log(`Zipped ${filepath} (${getFileSizeInBytes(filepath)})`),
  )
  .then(() => compressHarder(filepath))
  .then(() =>
    console.log(`Recompressed ${filepath} (${getFileSizeInBytes(filepath)})`),
  )
  .catch((error) => {
    console.error(error);
    process.exit(2);
  })
  .then(() => {
    const fileSize = getFileSizeInBytes(filepath);
    const fileSizeDifference = Math.abs(MAX_BYTES - fileSize);

    if (fileIsUnderMaxSize(fileSize)) {
      console.log(
        `The file is ${fileSize} bytes (${fileSizeDifference} bytes under the limit).`,
      );
      process.exit(0);
    } else {
      console.log(
        `The file is ${fileSize} bytes (${fileSizeDifference} bytes over the limit).`,
      );
      process.exit(1);
    }
  });
