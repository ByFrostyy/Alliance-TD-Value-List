import { Unit, Staff, SignValue, UpdateLog } from "./types";

export const Yl: Unit[] = [
  {
    name: "Speaker Man",
    rarity: "Basic",
    img: "https://i.postimg.cc/jdwgCGtt/16-20260626163827.png",
    gems: 0,
    tokenValue: "0",
    shinyValue: "0",
    demand: 0,
    stability: "Underpaid",
    placeCost: 100,
    obtain: "Summon (50%)",
    upgrades: [
      { lvl: 1, cost: "Place ($100)", dmg: 8, cd: 0.8, range: 12 },
      { lvl: 2, cost: "$75", dmg: 12, cd: 0.75, range: 12 },
      { lvl: 3, cost: "$100", dmg: 17, cd: 0.7, range: 13 },
      { lvl: 4, cost: "$125", dmg: 25, cd: 0.65, range: 14 }
    ]
  },
  {
    name: "Camera Man",
    rarity: "Uncommon",
    img: "https://i.postimg.cc/RVpmzrGv/16-20260626163759.png",
    gems: 1,
    tokenValue: "1",
    shinyValue: "2",
    demand: 7,
    stability: "Underpaid",
    placeCost: 150,
    obtain: "Summon (35%)",
    upgrades: [
      { lvl: 1, cost: "Place ($150)", dmg: 15, cd: 1.25, range: 16 },
      { lvl: 2, cost: "$125", dmg: 23, cd: 1.2, range: 17 },
      { lvl: 3, cost: "$175", dmg: 33, cd: 1.15, range: 18 },
      { lvl: 4, cost: "$250", dmg: 48, cd: 1.1, range: 20 }
    ]
  },
  {
    name: "TV Man",
    rarity: "Rare",
    img: "https://i.postimg.cc/SxGvpcmC/16-20260701170954.png",
    gems: 5,
    tokenValue: "5",
    shinyValue: "10",
    demand: 3,
    stability: "Dropping",
    placeCost: 250,
    obtain: "Summon (10%)",
    upgrades: [
      { lvl: 1, cost: "Place ($250)", dmg: 10, cd: 1.4, range: 12 },
      { lvl: 2, cost: "$200", dmg: 16, cd: 1.3, range: 13 },
      { lvl: 3, cost: "$300", dmg: 24, cd: 1.15, range: 14 },
      { lvl: 4, cost: "$450", dmg: 36, cd: 1, range: 15 }
    ]
  },
  {
    name: "Large Speaker Man",
    rarity: "Rare",
    img: "https://i.postimg.cc/KvwWNmJN/16-20260701170927.png",
    gems: 7,
    tokenValue: "7",
    shinyValue: "14",
    demand: 4,
    stability: "Stable",
    placeCost: 500,
    obtain: "Summon (10%)",
    upgrades: [
      { lvl: 1, cost: "Place ($500)", dmg: 27, cd: 0.6, range: 14 },
      { lvl: 2, cost: "$350", dmg: 42, cd: 0.56, range: 14 },
      { lvl: 3, cost: "$500", dmg: 60, cd: 0.52, range: 15 },
      { lvl: 4, cost: "$700", dmg: 85, cd: 0.48, range: 16 }
    ]
  },
  {
    name: "Camera Woman",
    rarity: "Rare",
    img: "https://i.postimg.cc/xTZ8KbSp/b3b08a564fce292a.png",
    gems: 33,
    tokenValue: "33",
    shinyValue: "66",
    demand: 8,
    stability: "Dropping",
    placeCost: 150,
    obtain: "Summon (10%)",
    upgrades: [
      { lvl: 1, cost: "Place ($150)", dmg: 50, cd: 1.9, range: 18 },
      { lvl: 2, cost: "$300", dmg: 70, cd: 1.85, range: 19 },
      { lvl: 3, cost: "$450", dmg: 105, cd: 1.80, range: 21 },
      { lvl: 4, cost: "$650", dmg: 150, cd: 1.75, range: 22 }
    ]
  },
  {
    name: "Large Camera Man",
    rarity: "Epic",
    img: "https://i.postimg.cc/5t1n7yvw/16-20260701171037.png",
    gems: 15,
    tokenValue: "15",
    shinyValue: "30",
    demand: 9,
    stability: "Stable",
    placeCost: 650,
    obtain: "Summon (4%)",
    upgrades: [
      { lvl: 1, cost: "Place ($650)", dmg: 70, cd: 1.4, range: 9 },
      { lvl: 2, cost: "$550", dmg: 110, cd: 1.35, range: 9 },
      { lvl: 3, cost: "$700", dmg: 170, cd: 1.25, range: 10 },
      { lvl: 4, cost: "$900", dmg: 240, cd: 1.15, range: 11 }
    ]
  },
  {
    name: "Large TV Man",
    rarity: "Epic",
    img: "https://i.postimg.cc/Rh3R6HrD/16-20260628175643.png",
    gems: 30,
    tokenValue: "30",
    shinyValue: "60",
    demand: 5,
    stability: "Stable",
    placeCost: 750,
    obtain: "Summon (4%)",
    upgrades: [
      { lvl: 1, cost: "Place ($750)", dmg: 32, cd: 1.2, range: 14 },
      { lvl: 2, cost: "$650", dmg: 50, cd: 1.1, range: 15 },
      { lvl: 3, cost: "$850", dmg: 75, cd: 1, range: 16 },
      { lvl: 4, cost: "$1100", dmg: 110, cd: 0.9, range: 17 }
    ]
  },
  {
    name: "Plunger Camera Man",
    rarity: "Epic",
    img: "https://i.postimg.cc/3N5T0swc/plunger.png",
    gems: 40,
    tokenValue: "40",
    shinyValue: "80",
    demand: 9,
    stability: "Dropping",
    placeCost: 650,
    obtain: "Summon (4%)",
    upgrades: [
      { lvl: 1, cost: "Place ($650)", dmg: 44, cd: 0.8, range: 13 },
      { lvl: 2, cost: "$550", dmg: 70, cd: 0.75, range: 14 },
      { lvl: 3, cost: "$750", dmg: 100, cd: 0.7, range: 15 },
      { lvl: 4, cost: "$1000", dmg: 125, cd: 0.66, range: 16 }
    ]
  },
  {
    name: "Titan Speaker Man",
    rarity: "Legendary",
    img: "https://i.postimg.cc/KYZD7VSk/16-20260701171144.png",
    gems: 350,
    tokenValue: "350",
    shinyValue: "700",
    demand: 7,
    stability: "Underpaid",
    placeCost: 1200,
    obtain: "Summon (1%)",
    upgrades: [
      { lvl: 1, cost: "Place ($1200)", dmg: 70, cd: 0.45, range: 16 },
      { lvl: 2, cost: "$900", dmg: 110, cd: 0.42, range: 17 },
      { lvl: 3, cost: "$1200", dmg: 165, cd: 0.39, range: 18 },
      { lvl: 4, cost: "$1600", dmg: 240, cd: 0.36, range: 19 }
    ]
  },
  {
    name: "Titan TV Man",
    rarity: "Legendary",
    img: "https://i.postimg.cc/PfcKG2YT/16-20260701171102.png",
    gems: 450,
    tokenValue: "450",
    shinyValue: "900",
    demand: 9,
    stability: "Underpaid",
    placeCost: 2000,
    obtain: "Summon (1%)",
    upgrades: [
      { lvl: 1, cost: "Place ($2000)", dmg: 80, cd: 0.85, range: 16 },
      { lvl: 2, cost: "$1400", dmg: 125, cd: 0.8, range: 17 },
      { lvl: 3, cost: "$1900", dmg: 190, cd: 0.75, range: 18 },
      { lvl: 4, cost: "$2500", dmg: 280, cd: 0.7, range: 19 }
    ]
  },
  {
    name: "Titan Camera Man",
    rarity: "Exclusive",
    img: "https://i.postimg.cc/44b4qFry/16-20260701171125.png",
    gems: 2000,
    tokenValue: "2,000",
    shinyValue: "4,000",
    demand: 10,
    stability: "Hyped",
    placeCost: 1500,
    obtain: "Summon (Exclusive)",
    upgrades: [
      { lvl: 1, cost: "Place ($1500)", dmg: 250, cd: 1.8, range: 20 },
      { lvl: 2, cost: "$1000", dmg: 400, cd: 1.7, range: 22 },
      { lvl: 3, cost: "$1400", dmg: 620, cd: 1.6, range: 23 },
      { lvl: 4, cost: "$1900", dmg: 950, cd: 1.5, range: 25 }
    ]
  }
];

export const sd: Staff[] = [
  { name: "MrUpTime", role: "Owner", sign: "The_DevUpTime", percent: 200, avatar: "🛠" },
  { name: "petcch", role: "dev", sign: "georga123zxc", percent: 75, avatar: "🛠" },
  { name: "heroEr777rew", role: "dev", sign: "heroEr777rew", percent: 75, avatar: "🛠" },
  { name: "Clover", role: "ValueMaker", sign: "bropksknife", percent: 40, avatar: "👑" },
  { name: "byFrosTy", role: "ValueMaker", sign: "begzod2211", percent: 40, avatar: "👑" },
  { name: "jonepreston123456o", role: "partner", sign: "jonepreston123456o", percent: 20, avatar: "⭐" },
  { name: "actv_arnold", role: "partner", sign: "actv_arnold", percent: 15, avatar: "⭐" },
  { name: "Maxpoh2013", role: "partner", sign: "Maxpoh2013", percent: 15, avatar: "⭐" },
  { name: "WARDENBLUEEE", role: "partner", sign: "WARDENBLUEEE", percent: 20, avatar: "⭐" },
  { name: "llshadowBonnie", role: "partner", sign: "llshadowBonnie", percent: 15, avatar: "⭐" },
  { name: "Oktawian_jestem2012", role: "partner", sign: "Oktawian_jestem2012", percent: 25, avatar: "⭐" },
  { name: "marliconwespa", role: "partner", sign: "marliconwespa", percent: 15, avatar: "⭐" },
  { name: "ender45638372", role: "partner", sign: "ender45638372", percent: 25, avatar: "⭐" },
  { name: "DealerzinBr", role: "partner", sign: "DealerzinBr", percent: 15, avatar: "⭐" },
  { name: "Elfenix774", role: "partner", sign: "Elfenix774", percent: 25, avatar: "⭐" },
  { name: "GREENFN_KASH", role: "partner", sign: "GREENFN_KASH", percent: 15, avatar: "⭐" },
  { name: "XMRSHADOW2", role: "partner", sign: "XMRSHADOW2", percent: 15, avatar: "⭐" }
];

export const wS = (roleStr: string) => {
  let l = roleStr.toLowerCase().substring(0, 50).replace(/\s+|_|-/g, "");
  return l === "valuemaker" || l === "valuemakers" ? "valuemaker"
    : l === "serveradmin" || l === "serveradmins" || l === "admin" || l === "admins" ? "admin"
    : l === "gamecontributor" || l === "gamecontributors" || l === "contributor" || l === "contributors" ? "contributor"
    : l === "developer" || l === "developers" || l === "dev" || l === "devs" ? "dev"
    : l === "owner" || l === "owners" ? "owner"
    : l === "manager" || l === "managers" ? "manager"
    : l === "tester" || l === "testers" ? "tester"
    : l === "partner" || l === "partners" ? "partner"
    : l;
};

export const SS: Record<string, string> = {
  owner: "Owner",
  dev: "Developer",
  manager: "Manager",
  admin: "Server Admin",
  contributor: "Game Contributor",
  tester: "Tester",
  valuemaker: "Value Maker",
  partner: "Partner"
};

export const TS: Record<string, string> = {
  owner: "#3b82f6",
  dev: "#14b8a6",
  manager: "#ec4899",
  admin: "#f97316",
  contributor: "#818cf8",
  tester: "#a855f7",
  valuemaker: "#eab308",
  partner: "#ef4444"
};

export const Hl: SignValue[] = [
  { name: "None", percent: 0, role: "No Sign", color: "#888888" },
  { name: "The_DevUpTime", percent: 200, role: "Owner", color: "#3b82f6" },
  { name: "georga123zxc", percent: 75, role: "Developer", color: "#14b8a6" },
  { name: "heroEr777rew", percent: 75, role: "Developer", color: "#14b8a6" },
  { name: "bropksknife", percent: 40, role: "Value Maker", color: "#eab308" },
  { name: "begzod2211", percent: 40, role: "Value Maker", color: "#eab308" },
  { name: "jonepreston123456o", percent: 20, role: "Partner", color: "#ef4444" },
  { name: "actv_arnold", percent: 15, role: "Partner", color: "#ef4444" },
  { name: "Maxpoh2013", percent: 15, role: "Partner", color: "#ef4444" },
  { name: "WARDENBLUEEE", percent: 20, role: "Partner", color: "#ef4444" },
  { name: "llshadowBonnie", percent: 15, role: "Partner", color: "#ef4444" },
  { name: "Oktawian_jestem2012", percent: 25, role: "Partner", color: "#ef4444" },
  { name: "marliconwespa", percent: 15, role: "Partner", color: "#ef4444" },
  { name: "ender45638372", percent: 25, role: "Partner", color: "#ef4444" },
  { name: "DealerzinBr", percent: 15, role: "Partner", color: "#ef4444" },
  { name: "Elfenix774", percent: 25, role: "Partner", color: "#ef4444" },
  { name: "GREENFN_KASH", percent: 15, role: "Partner", color: "#ef4444" },
  { name: "XMRSHADOW2", percent: 15, role: "Partner", color: "#ef4444" }
];

export const ug = [
  { id: "partner", name: "Partners", class: "border-red-500 text-red-400" },
  { id: "valuemaker", name: "Value Makers", class: "border-yellow-400 text-yellow-300" },
  { id: "tester", name: "Testers", class: "border-purple-500 text-purple-400" },
  { id: "contributor", name: "Game Contributors", class: "border-indigo-400 text-indigo-300" },
  { id: "dev", name: "Developers", class: "border-teal-400 text-teal-300" },
  { id: "admin", name: "Server Admins", class: "border-orange-400 text-orange-300" },
  { id: "manager", name: "Managers", class: "border-pink-500 text-pink-400" },
  { id: "owner", name: "Owners", class: "border-blue-500 text-blue-400" }
];

export const Gl: UpdateLog[] = [];


