/**
 * @typedef {'dark' | 'light' | 'system'} ColorScheme
 */
/**
 * @typedef {'go' | 'pickup' | 'read' | 'use'} Command
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
/**
 * @typedef {object} Room
 * @property {Array<Room['name']>} connections
 * @property {Items} items
 * @property {string} name
 */
/**
 * @typedef {Array<Room>} Rooms
 */
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
export const initialState: State;
export type ColorScheme = "dark" | "light" | "system";
export type Command = "go" | "pickup" | "read" | "use";
export type Item = {
  name: string;
  quantity: number;
};
export type Items = Array<Item>;
export type FoaFPerson = {
  "foaf:knows": Array<{
    type: "uri";
    value: string;
  }>;
  "foaf:name": [
    {
      type: "literal";
      value: string;
    },
  ];
  "rdf:type": [
    {
      type: "uri";
      value: "http://xmlns.com/foaf/0.1/Person";
    },
  ];
  "schema:gameLocation": [
    {
      type: "uri";
      value: string;
    },
  ];
};
export type SchemaGameLocation = {
  "rdf:type": [
    {
      type: "uri";
      value: "https://schema.org/gameLocation";
    },
  ];
  "schema:geoTouches": Array<{
    type: "uri";
    value: string;
  }>;
  "schema:name": [
    {
      type: "literal";
      value: string;
    },
  ];
};
export type SchemaOffer = {
  "rdf:type": [
    {
      type: "uri";
      value: "https://schema.org/Offer";
    },
  ];
  "schema:name": [
    {
      type: "literal";
      value: string;
    },
  ];
  "schema:itemOffered": [
    {
      type: "uri";
      value: string;
    },
  ];
  "schema:offeredBy": [
    {
      type: "uri";
      value: string;
    },
  ];
  "schema:price": [
    {
      type: "literal";
      value: number;
    },
  ];
};
export type ValueFlowsEcologicalAgent = {
  "rdf:type": [
    {
      type: "uri";
      value: "https://w3id.org/valueflows/ont/vf#EcologicalAgent";
    },
  ];
} & FoaFPerson;
export type ValueFlowsEconomicEvent = {
  "rdf:type": [
    {
      type: "uri";
      value: "https://w3id.org/valueflows/ont/vf#EconomicEvent";
    },
  ];
  "vf:action": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:provider": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:receiver": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:resourceConformsTo": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:resourceInventoriedAs": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:resourceQuantity": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:toLocation": [
    {
      type: "uri";
      value: string;
    },
  ];
};
export type ValueFlowsEconomicResource = {
  "rdf:type": [
    {
      type: "uri";
      value: "https://w3id.org/valueflows/ont/vf#EconomicResource";
    },
  ];
  "vf:accountingQuantity": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:currentLocation": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:name": [
    {
      type: "literal";
      value: string;
    },
  ];
};
export type ValueFlowsMeasure = {
  "rdf:type": [
    {
      type: "uri";
      value: "https://w3id.org/valueflows/ont/vf#Measure";
    },
  ];
  "vf:hasNumericalValue": [
    {
      value: number;
      type: "literal";
    },
  ];
  "vf:hasUnit": [
    {
      value: string;
      type: "uri";
    },
  ];
};
export type ValueFlowsRaiseAction = {
  "rdf:type": [
    {
      type: "uri";
      value: "https://w3id.org/valueflows/ont/vf#raise";
    },
  ];
  "vf:accountingEffect": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:accountableEffect": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:createResource": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:eventQuantity": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:onhandEffect": [
    {
      type: "uri";
      value: string;
    },
  ];
  "vf:stateEffect": [
    {
      type: "uri";
      value: string;
    },
  ];
};
export type ValueFlowsResourceSpecification = {
  "rdf:type": [
    {
      type: "uri";
      value: "https://w3id.org/valueflows/ont/vf#ResourceSpecification";
    },
  ];
  "vf:name": [
    {
      type: "literal";
      value: string;
    },
  ];
};
export type RdfDescription =
  | FoaFPerson
  | SchemaGameLocation
  | SchemaOffer
  | ValueFlowsEcologicalAgent
  | ValueFlowsEconomicEvent
  | ValueFlowsEconomicResource
  | ValueFlowsMeasure
  | ValueFlowsRaiseAction
  | ValueFlowsResourceSpecification;
export type Room = {
  connections: Array<Room["name"]>;
  items: Items;
  name: string;
};
export type Rooms = Array<Room>;
export type Facts = Record<string, RdfDescription>;
export type Scenario = "tutorial" | "";
export type State = {
  activeColorScheme: ColorScheme;
  activeRoom: string;
  activeScene: import("../components/scenes/index.js").Scene;
  activeScenario: Scenario;
  facts: Facts;
  playername: string;
  possiblePrompts: Array<string>;
  prompt: string;
  seed: string | object;
  speaker: string | null;
  text: Array<string>;
};
