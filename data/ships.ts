import { Bot, Boxes, Crown, Drill, Gauge, Radar, Shield, Sparkles, Swords, Zap } from "lucide-react";

export type Ship = {
  id: string;
  name: string;
  className: string;
  category: string;
  description: string;
  speed: number;
  shields: number;
  hyperdrive: number;
  crew: number;
  weapons: string;
  fuel: string;
  palette: [string, string, string];
  specs: string[];
};

export const categories = [
  {
    title: "Military Ships",
    icon: Swords,
    description: "Orbital command vessels with adaptive armor, plasma arrays, and battlefield quantum links.",
    speed: 88,
    shields: 96,
    hyperdrive: 8,
    crew: 42,
    palette: ["#ff2bd6", "#8f4dff", "#00e5ff"] as [string, string, string]
  },
  {
    title: "Cargo Ships",
    icon: Boxes,
    description: "Heavy freight leviathans built for guarded trade lanes, modular holds, and long-haul autonomy.",
    speed: 62,
    shields: 84,
    hyperdrive: 6,
    crew: 18,
    palette: ["#37ffb5", "#00e5ff", "#8f4dff"] as [string, string, string]
  },
  {
    title: "Racing Ships",
    icon: Gauge,
    description: "Ultra-light velocity craft tuned for gravity slings, neon circuits, and razor-close turns.",
    speed: 99,
    shields: 58,
    hyperdrive: 9,
    crew: 2,
    palette: ["#ff2bd6", "#ffb000", "#00e5ff"] as [string, string, string]
  },
  {
    title: "Luxury Ships",
    icon: Crown,
    description: "Private cosmic yachts with panoramic starlounges, silent drives, and concierge-grade AI.",
    speed: 76,
    shields: 80,
    hyperdrive: 7,
    crew: 12,
    palette: ["#00e5ff", "#ffffff", "#ff2bd6"] as [string, string, string]
  },
  {
    title: "Exploration Ships",
    icon: Radar,
    description: "Deep-space vessels with stellar cartography decks, anomaly labs, and resilient long-range systems.",
    speed: 82,
    shields: 88,
    hyperdrive: 10,
    crew: 28,
    palette: ["#8f4dff", "#37ffb5", "#00e5ff"] as [string, string, string]
  },
  {
    title: "Mining Ships",
    icon: Drill,
    description: "Asteroid-sector industrial platforms with precision extraction arms and fortified cargo cores.",
    speed: 55,
    shields: 90,
    hyperdrive: 5,
    crew: 24,
    palette: ["#ffb000", "#37ffb5", "#8f4dff"] as [string, string, string]
  }
];

export const ships: Ship[] = [
  {
    id: "sj-vanguard",
    name: "SJ Vanguard",
    className: "Starfighter",
    category: "Military Ships",
    description: "A blade-shaped interceptor for orbital defense and tactical escort operations.",
    speed: 96,
    shields: 88,
    hyperdrive: 8,
    crew: 2,
    weapons: "Twin ion lances, pulse rail turrets",
    fuel: "91% antimatter efficiency",
    palette: ["#ff2bd6", "#8f4dff", "#00e5ff"],
    specs: ["Vector fins", "AI target lattice", "Stealth skin"]
  },
  {
    id: "sj-atlas",
    name: "SJ Atlas",
    className: "Cargo Carrier",
    category: "Cargo Ships",
    description: "A premium freight cruiser that keeps high-value cargo stable through turbulent wormholes.",
    speed: 64,
    shields: 92,
    hyperdrive: 6,
    crew: 20,
    weapons: "Defensive flak halo",
    fuel: "84% fusion loop efficiency",
    palette: ["#37ffb5", "#00e5ff", "#8f4dff"],
    specs: ["Six modular holds", "Thermal vaults", "Drone loading grid"]
  },
  {
    id: "sj-velox",
    name: "SJ Velox",
    className: "Racing Ship",
    category: "Racing Ships",
    description: "A luminous circuit champion with active wing geometry and overdrive stabilizers.",
    speed: 100,
    shields: 54,
    hyperdrive: 9,
    crew: 1,
    weapons: "Competition-safe EMP mist",
    fuel: "76% quantum sprint efficiency",
    palette: ["#ff2bd6", "#ffb000", "#00e5ff"],
    specs: ["Zero-lag cockpit", "Gravity slicers", "Thermal wake fins"]
  },
  {
    id: "sj-aurelia",
    name: "SJ Aurelia",
    className: "Luxury Yacht",
    category: "Luxury Ships",
    description: "A panoramic star yacht with crystalline hull glass and a private orbital garden.",
    speed: 78,
    shields: 82,
    hyperdrive: 7,
    crew: 10,
    weapons: "Discreet guardian drones",
    fuel: "88% silent-drive efficiency",
    palette: ["#00e5ff", "#ffffff", "#ff2bd6"],
    specs: ["Hologram ballroom", "Med-spa bay", "Starlight suites"]
  },
  {
    id: "sj-horizon",
    name: "SJ Horizon",
    className: "Exploration Vessel",
    category: "Exploration Ships",
    description: "A deep survey platform for frontier missions, xeno-biology labs, and anomaly mapping.",
    speed: 83,
    shields: 90,
    hyperdrive: 10,
    crew: 30,
    weapons: "Survey-safe plasma cutters",
    fuel: "94% long-range antimatter efficiency",
    palette: ["#8f4dff", "#37ffb5", "#00e5ff"],
    specs: ["Stellar lab", "Probe swarm", "Cryo reserve"]
  }
];

export const builderOptions = {
  colors: [
    { label: "Ion Cyan", value: "#00e5ff" },
    { label: "Plasma Pink", value: "#ff2bd6" },
    { label: "Nova Violet", value: "#8f4dff" },
    { label: "Shield Mint", value: "#37ffb5" }
  ],
  weapons: ["Ion Lance", "Pulse Rail", "Drone Halo", "Plasma Arc"],
  engines: ["Fusion Core", "Quantum Sprint", "Silent Antimatter", "Wormhole Vector"],
  shields: ["Ceramic Prism", "Adaptive Bubble", "Kinetic Web", "Aurora Matrix"],
  wings: ["Vector Fins", "Delta Sweep", "Solar Blades", "No-Wing Stealth"],
  cockpits: ["Solo Neural", "Panoramic Duo", "Command Bridge", "Luxury Dome"]
};

export const assistantCards = [
  { icon: Sparkles, title: "Luxury Route", text: "For clients who want silent travel, lounge decks, and premium concierge AI." },
  { icon: Shield, title: "Defense Route", text: "For escort fleets, orbital security, and high-risk diplomatic passages." },
  { icon: Zap, title: "Velocity Route", text: "For pilots chasing racing contracts, courier records, and spectacle." },
  { icon: Bot, title: "Autonomous Route", text: "For long-haul missions with low crew count and heavy AI support." }
];
