/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";

import { generateFoaFPerson } from "./generate-foaf-person.js";
import { makeAcquaintance } from "./make-acquaintance.js";

describe("makeAcquaintance", function () {
  it("should introduce two people to each other", function () {
    // Arrange
    const people = {
      "#A": generateFoaFPerson("#A", [], "#Inn"),
      "#B": generateFoaFPerson("#B", [], "#Inn"),
    };

    // Act
    const acquaintancedPeople = makeAcquaintance(people);

    // Assert
    expect(acquaintancedPeople).to.deep.equal({
      "#A": generateFoaFPerson("#A", ["#B"], "#Inn"),
      "#B": generateFoaFPerson("#B", ["#A"], "#Inn"),
    });
  });

  it("should not reintroduce two people to each other", function () {
    // Arrange
    const people = {
      "#A": generateFoaFPerson("#A", ["#B"], "#Inn"),
      "#B": generateFoaFPerson("#B", [], "#Inn"),
    };

    // Act
    const acquaintancedPeople = makeAcquaintance(people);

    // Assert
    expect(acquaintancedPeople).to.deep.equal({
      "#A": generateFoaFPerson("#A", ["#B"], "#Inn"),
      "#B": generateFoaFPerson("#B", ["#A"], "#Inn"),
    });
  });

  describe("when there are more than two people", function () {
    it("should introduce them to each other", function () {
      // Arrange
      const people = {
        "#A": generateFoaFPerson("#A", [], "#Inn"),
        "#B": generateFoaFPerson("#B", [], "#Inn"),
        "#C": generateFoaFPerson("#C", [], "#Inn"),
      };

      // Act
      const acquaintancedPeople = makeAcquaintance(people);

      // Assert
      expect(acquaintancedPeople).to.deep.equal({
        "#A": generateFoaFPerson("#A", ["#B", "#C"], "#Inn"),
        "#B": generateFoaFPerson("#B", ["#A", "#C"], "#Inn"),
        "#C": generateFoaFPerson("#C", ["#A", "#B"], "#Inn"),
      });
    });

    it("should not reintroduce two people to each other", function () {
      // Arrange
      const people = {
        "#A": generateFoaFPerson("#A", ["#B"], "#Inn"),
        "#B": generateFoaFPerson("#B", [], "#Inn"),
        "#C": generateFoaFPerson("#C", [], "#Inn"),
      };

      // Act
      const acquaintancedPeople = makeAcquaintance(people);

      // Assert
      expect(acquaintancedPeople).to.deep.equal({
        "#A": generateFoaFPerson("#A", ["#B", "#C"], "#Inn"),
        "#B": generateFoaFPerson("#B", ["#A", "#C"], "#Inn"),
        "#C": generateFoaFPerson("#C", ["#A", "#B"], "#Inn"),
      });
    });
  });
});
