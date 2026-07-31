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
      { lvl: 2, cost: "Max Lvl", dmg: 26, cd: 0.6, range: 14 }
    ]
  },
  {
    name: "Camera Man",
    rarity: "Uncommon",
    img: "https://i.postimg.cc/RVpmzrGv/16-20260626163759.png",
    gems: 5,
    tokenValue: "5",
    shinyValue: "10",
    demand: 7,
    stability: "Underpaid",
    placeCost: 150,
    obtain: "Summon (35%)",
    upgrades: [
      { lvl: 1, cost: "Place ($150)", dmg: 18, cd: 1.2, range: 16 },
      { lvl: 2, cost: "Max Lvl", dmg: 56, cd: 0.95, range: 20 }
    ]
  },
  {
    name: "TV Man",
    rarity: "Rare",
    img: "https://i.postimg.cc/SxGvpcmC/16-20260701170954.png",
    gems: 15,
    tokenValue: "15",
    shinyValue: "30",
    demand: 3,
    stability: "Dropping",
    placeCost: 250,
    obtain: "Summon (10%)",
    upgrades: [
      { lvl: 1, cost: "Place ($250)", dmg: 10, cd: 1.5, range: 12 },
      { lvl: 2, cost: "Max Lvl", dmg: 28, cd: 1.0, range: 14 }
    ]
  },
  {
    name: "Large Speaker Man",
    rarity: "Rare",
    img: "https://i.postimg.cc/KvwWNmJN/16-20260701170927.png",
    gems: 20,
    tokenValue: "20",
    shinyValue: "40",
    demand: 4,
    stability: "Stable",
    placeCost: 500,
    obtain: "Summon (10%)",
    upgrades: [
      { lvl: 1, cost: "Place ($500)", dmg: 27, cd: 0.6, range: 14 },
      { lvl: 2, cost: "Max Lvl", dmg: 75, cd: 0.5, range: 16 }
    ]
  },
  {
    name: "Large Camera Man",
    rarity: "Epic",
    img: "https://i.postimg.cc/5t1n7yvw/16-20260701171037.png",
    gems: 40,
    tokenValue: "40",
    shinyValue: "80",
    demand: 9,
    stability: "Stable",
    placeCost: 600,
    obtain: "Summon (4%)",
    upgrades: [
      { lvl: 1, cost: "Place ($600)", dmg: 90, cd: 1.2, range: 9 },
      { lvl: 2, cost: "Max Lvl", dmg: 260, cd: 0.95, range: 11 }
    ]
  },
  {
    name: "Large TV Man",
    rarity: "Epic",
    img: "https://i.postimg.cc/Rh3R6HrD/16-20260628175643.png",
    gems: 80,
    tokenValue: "80",
    shinyValue: "160",
    demand: 5,
    stability: "Stable",
    placeCost: 750,
    obtain: "Summon (4%)",
    upgrades: [
      { lvl: 1, cost: "Place ($750)", dmg: 30, cd: 1.2, range: 14 },
      { lvl: 2, cost: "Max Lvl", dmg: 85, cd: 1.0, range: 16 }
    ]
  },
  {
    name: "Titan TV Man",
    rarity: "Legendary",
    img: "https://i.postimg.cc/PfcKG2YT/16-20260701171102.png",
    gems: 900,
    tokenValue: "900",
    shinyValue: "1,800",
    demand: 9,
    stability: "Stable",
    placeCost: 2000,
    obtain: "Summon (1%)",
    upgrades: [
      { lvl: 1, cost: "Place ($2000)", dmg: 64, cd: 0.8, range: 16 },
      { lvl: 2, cost: "Max Lvl", dmg: 185, cd: 0.8, range: 18 }
    ]
  },
  {
    name: "Titan Speaker Man",
    rarity: "Legendary",
    img: "https://i.postimg.cc/KYZD7VSk/16-20260701171144.png",
    gems: 700,
    tokenValue: "700",
    shinyValue: "1,400",
    demand: 7,
    stability: "Slowly dropping",
    placeCost: 1200,
    obtain: "Summon (1%)",
    upgrades: [
      { lvl: 1, cost: "Place ($1200)", dmg: 44, cd: 0.4, range: 16 },
      { lvl: 2, cost: "Max Lvl", dmg: 124, cd: 0.4, range: 18 }
    ]
  },
  {
    name: "Titan Camera Man",
    rarity: "Exclusive",
    img: "https://i.postimg.cc/44b4qFry/16-20260701171125.png",
    gems: 1700,
    tokenValue: "1,700",
    shinyValue: "3,400",
    demand: 10,
    stability: "Hype",
    placeCost: 1400,
    obtain: "Summon (Exclusive)",
    upgrades: [
      { lvl: 1, cost: "Place ($1400)", dmg: 230, cd: 1.8, range: 20 },
      { lvl: 2, cost: "Max Lvl", dmg: 620, cd: 1.6, range: 24 }
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


