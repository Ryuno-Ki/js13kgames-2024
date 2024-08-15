/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const dotenv = require("dotenv");
const { createRestAPIClient } = require("masto");

dotenv.config();

const GTS_TOKEN = process.env.GTS_TOKEN;
console.log(GTS_TOKEN);

module.exports = async function run(sz) {
  const masto = await createRestAPIClient({
    url: "https://fedi.jaenis.ch/",
    accessToken: GTS_TOKEN,
  });

  // Kudos https://nitter.net/zurashu/status/1558637028132134912#m
  const toot =
    new Array(6)
      .fill()
      .map((_, i) => ((6 * sz) / 13312 > i ? "🟥" : "🟩"))
      .join("") + ` ${(sz / 1024).toFixed(2)} KiB / 13 KiB #js13k #js13kgames`;

  // See https://neet.github.io/masto.js/interfaces/mastodon.v1.Status.html#visibility
  await masto.v1.statuses.create({
    status: toot,
    visibility: "unlisted",
  });

  console.log(toot);
};
