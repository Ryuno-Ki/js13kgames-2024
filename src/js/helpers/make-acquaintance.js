/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Introduce two FoaFPerson to each other.
 *
 * @argument {Record<string, import('../state/initial-state.js').FoaFPerson>} people
 * @returns {Record<string, import('../state/initial-state.js').FoaFPerson>}
 */
export function makeAcquaintance(people) {
  return Object.fromEntries(
    Object.entries(people).map(([key, person], _, arr) => {
      return [
        key,
        {
          ...person,
          "foaf:knows": [
            ...person["foaf:knows"],
            ...arr
              .filter(([otherKey, otherPerson]) => otherKey !== key)
              .map(([otherKey, _]) => {
                return /** @type {{ value: string, type: "uri"}} */ ({
                  value: otherKey,
                  type: "uri",
                });
              }),
          ].filter(({ value }, index, arr) => {
            if (index === 0) {
              return true;
            }

            return arr.filter(({ value: v }) => v === value).length === 1;
          }),
        },
      ];
    }),
  );
}
