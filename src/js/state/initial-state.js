/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { generateEcologicalAgent } from "../helpers/generate-ecological-agent.js";
import { generateFoaFPerson } from "../helpers/generate-foaf-person.js";
import { generateMeasure } from "../helpers/generate-measure.js";
import { generateResourceSpecification } from "../helpers/generate-resource-specification.js";
import { generateSchemaGameLocation } from "../helpers/generate-schema-game-location.js";

// See also: https://www.w3.org/TR/rdf11-concepts/
// https://ns.inria.fr/emoca/
// https://vocab.org/relationship/
// https://www.w3.org/2006/vcard/ns
// https://smiy.sourceforge.net/wi/spec/weightedinterests.html

/**
 * @typedef {'dark' | 'light' | 'system'} ColorScheme
 */

/**
 * @typedef {'go' | 'offer' | 'read' | 'use'} Command
 */

/**
 * @typedef {object} Item
 * @property {string} name
 * @property {number} quantity
 */

/**
 * @typedef {Array<Item>} Items
 */

/**
 * @typedef {{
 *   "foaf:knows": Array<{ type: "uri", value: string }>,
 *   "foaf:name": [{ type: "literal", value: string }],
 *   "rdf:type": [{ type: "uri", value: "http://xmlns.com/foaf/0.1/Person" }],
 *   "schema:gameLocation": [{ type: "uri", value: string }],
 * }} FoaFPerson
 */

/**
 * @typedef {{
 *   "rdf:type": [{ type: "uri", value: "https://schema.org/gameLocation" }],
 *   "schema:geoTouches": Array<{ type: "uri", value: string }>,
 *   "schema:name": [{ type: "literal", value: string }]
 * }} SchemaGameLocation
 */

/**
 * @typedef {{
 *   "rdf:type": [{ type: "uri", value: "https://schema.org/Offer" }],
 *   "schema:name": [{ type: "literal", value: string }],
 *   "schema:itemOffered": [{ type: "uri", value: string }],
 *   "schema:offeredBy": [{ type: "uri", value: string }],
 *   "schema:price": [{ type: "literal", value: number }]
 * }} SchemaOffer
 */

/**
 * @typedef {{
 *   "rdf:type": [{ type: "uri", value: "https://w3id.org/valueflows/ont/vf#EcologicalAgent" }]
 * } & FoaFPerson} ValueFlowsEcologicalAgent
 */

/**
 * @typedef {{
 *   "rdf:type": [{ type: "uri", value: "https://w3id.org/valueflows/ont/vf#EconomicEvent" }],
 *   "vf:action": [{ type: "uri", value: string }],
 *   "vf:provider": [{ type: "uri", value: string }],
 *   "vf:receiver": [{ type: "uri", value: string }],
 *   "vf:resourceConformsTo": [{ type: "uri", value: string }],
 *   "vf:resourceInventoriedAs": [{ type: "uri", value: string }],
 *   "vf:resourceQuantity": [{ type: "uri", value: string }],
 *   "vf:toLocation": [{ type: "uri", value: string }]
 * }} ValueFlowsEconomicEvent
 */

/**
 * @typedef {{
 *   "rdf:type": [{ type: "uri", value: "https://w3id.org/valueflows/ont/vf#EconomicResource" }],
 *   "vf:accountingQuantity": [{ type: "uri", value: string }],
 *   "vf:currentLocation": [{ type: "uri", value: string }],
 *   "vf:name": [{ type: "literal", value: string }]
 * }} ValueFlowsEconomicResource
 */

/**
 * @typedef {{
 *   "rdf:type": [{ type: "uri", value: "https://w3id.org/valueflows/ont/vf#Measure" }],
 *   "vf:hasNumericalValue": [{ value: number, type: "literal" }],
 *   "vf:hasUnit": [{ value: string, type: "uri" }]
 * }} ValueFlowsMeasure
 */

/**
 * @typedef {{
 *   "rdf:type": [{ type: "uri", value: "https://w3id.org/valueflows/ont/vf#raise" }],
 *   "vf:accountingEffect": [{ type: "uri", value: string }],
 *   "vf:accountableEffect": [{ type: "uri", value: string }],
 *   "vf:createResource": [{ type: "uri", value: string }],
 *   "vf:eventQuantity": [{ type: "uri", value: string }],
 *   "vf:onhandEffect": [{ type: "uri", value: string }],
 *   "vf:stateEffect": [{ type: "uri", value: string }],
 * }} ValueFlowsRaiseAction
 */

/**
 * @typedef {{
 *  "rdf:type": [{ type: "uri", value: "https://w3id.org/valueflows/ont/vf#ResourceSpecification" }]
 *  "vf:name": [{ type: "literal", value: string }]
 * }} ValueFlowsResourceSpecification
 */

/**
 * @typedef {FoaFPerson | SchemaGameLocation | SchemaOffer | ValueFlowsEcologicalAgent | ValueFlowsEconomicEvent | ValueFlowsEconomicResource | ValueFlowsMeasure | ValueFlowsRaiseAction | ValueFlowsResourceSpecification} RdfDescription
 */

/*
 * @property {Room['name']} home
 * @property {Items} inventory
 * @property {number} money
 * @property {string} name
 * @property {Room['name']} position
 */

/**
 * @typedef {object} Room
 * @property {Array<Room['name']>} connections
 * @property {Items} items
 * @property {string} name
 */

/**
 * @typedef {Array<Room>} Rooms
 */

// See https://github.com/jsdoc/jsdoc/issues/2094 for RDF-notation
/**
 * @typedef {Record<string, RdfDescription>} Facts
 */

/**
 * @typedef {'tutorial' | ''} Scenario
 */

/**
 * @typedef {object} State
 * @property {ColorScheme} activeColorScheme
 * @property {string} activeRoom
 * @property {import('../components/scenes/index.js').Scene} activeScene
 * @property {Scenario} activeScenario
 * @property {Facts} facts
 * @property {string} playername
 * @property {Array<string>} possiblePrompts
 * @property {string} prompt
 * @property {string | object} seed
 * @property {string | null} speaker
 * @property {Array<string>} text
 */

/** @type {State} */
export const initialState = {
  activeColorScheme: "system",
  activeRoom: "Inn",
  activeScenario: "",
  activeScene: "title-section",
  facts: {
    "#Apple": generateResourceSpecification("Apple"),
    "#AppleTree": generateEcologicalAgent("AppleTree", [], "#Outside"),
    "#Inn": generateSchemaGameLocation("Inn", ["#Outside"]),
    "#One": generateMeasure(
      1,
      "http://www.ontology-of-units-of-measure.org/resource/om-2/one",
    ),
    "#Outside": generateSchemaGameLocation("#Outside", ["#Inn", "#Shop"]),
    "#RaiseAction": /** @type {ValueFlowsRaiseAction} */ ({
      "rdf:type": [
        {
          value: "https://w3id.org/valueflows/ont/vf#raise",
          type: "uri",
        },
      ],
    }),
    "#Shop": generateSchemaGameLocation("#Shop", ["#Outside"]),
    "#Wheat": generateResourceSpecification("Wheat"),
    "#Yu": generateFoaFPerson("Yu", [], "#Inn"),
    /*
    people: [
      {
        home: "home",
        inventory: [],
        money: 1000,
        name: "Yu",
        position: "home",
      },
    ],
    places: [
      {
        connections: ["outside"],
        // Could be itemLocation of a Place
        items: [
          {
            name: "apple",
            quantity: 1,
          },
        ],
        name: "home",
      },
      {
        connections: ["home", "shop"],
        items: [
          {
            name: "apple",
            quantity: 10,
          },
          {
            name: "wheat",
            quantity: 80,
          },
        ],
        name: "outside",
      },
      {
        connections: ["outside"],
        items: [
          {
            name: "wheat",
            quantity: 20,
          },
        ],
        name: "shop",
      },
    ],
    */
  },
  playername: "",
  possiblePrompts: [],
  prompt: "",
  seed: "Triskaidekaphobia",
  speaker: null,
  text: [],
};
