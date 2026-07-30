import { Unit, Staff, SignValue, UpdateLog } from "./types";

export const Yl: Unit[] = [
  {
    name: "Chef Cameraman",
    rarity: "X2 General",
    img: "https://i.postimg.cc/T367KqPj/photo-5323400840439599572-m.jpg",
    gems: 0,
    tokenValue: "0/C",
    shinyValue: "0/C",
    demand: 10,
    stability: "Fluctuating",
    placeCost: 1500,
    obtain: "X2 General Summon"
  },
  {
    name: "Community Cameraman",
    rarity: "Staff Units",
    img: "https://i.postimg.cc/wBJvTmWK/photo-5323400840439599609-m.jpg",
    gems: 0,
    tokenValue: "0/C",
    shinyValue: "0/C",
    demand: 8,
    stability: "Stable",
    placeCost: 2000,
    obtain: "Awarded to Staff Members"
  },
  {
    name: "Upgraded Fire King",
    rarity: "X2 Monster",
    img: "https://i.postimg.cc/CKFmMhKB/photo-5323400840439599593-m.jpg",
    gems: 21550,
    tokenValue: "21,550",
    shinyValue: "22,000",
    demand: 8,
    stability: "Unstable",
    placeCost: 2500,
    obtain: "0.1% X2 Monster Summon"
  },
  {
    name: "Upgraded Titan Speakerman",
    rarity: "X2 Monster",
    img: "https://i.postimg.cc/CKFmMhKB/photo-5323400840439599593-m.jpg",
    gems: 10750,
    tokenValue: "10,750",
    shinyValue: "11,000",
    demand: 8,
    stability: "Unstable",
    placeCost: 1800,
    obtain: "X2 Monster Summon"
  },
  {
    name: "Secret Agent",
    rarity: "X2 Monster",
    img: "https://i.postimg.cc/wBJvTmWK/photo-5323400840439599609-m.jpg",
    gems: 10750,
    tokenValue: "10,750",
    shinyValue: "11,000",
    demand: 9,
    stability: "Unstable",
    placeCost: 3000,
    obtain: "Secret Special Quest"
  },
  {
    name: "Watchman of Darkness",
    rarity: "X2 Monster",
    img: "https://i.postimg.cc/T367KqPj/photo-5323400840439599572-m.jpg",
    gems: 5500,
    tokenValue: "5,500",
    shinyValue: "6,000",
    demand: 7,
    stability: "Stable",
    placeCost: 1200,
    obtain: "Darkness Summon Event"
  },
  {
    name: "Demon Plunger",
    rarity: "X2 Monster",
    img: "https://i.postimg.cc/CKFmMhKB/photo-5323400840439599593-m.jpg",
    gems: 8200,
    tokenValue: "8,200",
    shinyValue: "8,500",
    demand: 8,
    stability: "Stable",
    placeCost: 1600,
    obtain: "Demon Crates"
  },
  {
    name: "G-Toilet 5.0",
    rarity: "X2 Monster",
    img: "https://i.postimg.cc/wBJvTmWK/photo-5323400840439599609-m.jpg",
    gems: 15400,
    tokenValue: "15,400",
    shinyValue: "16,000",
    demand: 9,
    stability: "Unstable",
    placeCost: 4000,
    obtain: "Toilet Boss Drop"
  },
  {
    name: "Holiday Blizzard",
    rarity: "X2 Monster",
    img: "https://i.postimg.cc/T367KqPj/photo-5323400840439599572-m.jpg",
    gems: 3200,
    tokenValue: "3,200",
    shinyValue: "3,500",
    demand: 6,
    stability: "Stable",
    placeCost: 1000,
    obtain: "Winter Festive Summon"
  }
];

export const sd: Staff[] = [
  { name: "MrUpTime", role: "Owner", sign: "ssagsgydh", percent: 100, avatar: "🛠" },
  { name: "SecretOfTim", role: "dev", sign: "SecretOftim", percent: 75, avatar: "🛠" },
  { name: "Th3Ultimate", role: "dev", sign: "RealTh3Ultimate", percent: 75, avatar: "🛠" },
  { name: "TERRAFIELD", role: "admin", sign: "Ivanessster", percent: 60, avatar: "💻" },
  { name: "Geniusbuy", role: "manager", sign: "JloJluKoHllluK", percent: 60, avatar: "💻" },
  { name: "Edenzk", role: "admin", sign: "camdenlovesriolu", percent: 67, avatar: "💻" },
  { name: "Erichi_471", role: "tester", sign: "Erichi_471", percent: 30, avatar: "⚙" },
  { name: "Armor_Chomper", role: "tester", sign: "Pavmez", percent: 30, avatar: "⚙" },
  { name: "Faron", role: "tester", sign: "YT_Faron", percent: 30, avatar: "⚙" },
  { name: "NoDelayt", role: "tester", sign: "Itz_Olik247", percent: 30, avatar: "⚙" },
  { name: "Memik1212", role: "tester", sign: "Mamikon1112", percent: 30, avatar: "⚙" },
  { name: "gman", role: "tester", sign: "gman_9863", percent: 30, avatar: "⚙" },
  { name: "Byfrosty", role: "ValueMaker", sign: "Begzod2211", percent: 35, avatar: "👑" },
  { name: "Broksnife", role: "ValueMaker", sign: "Broksnife", percent: 35, avatar: "👑" },
  { name: "NamcutedethuongOMG", role: "partner", sign: "NamcutedethuongOMG", percent: 10, avatar: "⭐" },
  { name: "marliconwespa", role: "partner", sign: "marliconwespa", percent: 10, avatar: "⭐" },
  { name: "actv_arnold", role: "partner", sign: "actv_arnold", percent: 10, avatar: "⭐" },
  { name: "niahuser", role: "partner", sign: "niahuser", percent: 20, avatar: "⭐" },
  { name: "JonePreston123456o", role: "partner", sign: "JonePreston123456o", percent: 10, avatar: "⭐" },
  { name: "rushdoor3", role: "partner", sign: "rushdoor3", percent: 20, avatar: "⭐" },
  { name: "hehehequy1979", role: "partner", sign: "hehehequy1979", percent: 15, avatar: "⭐" },
  { name: "PIgsuskid4", role: "partner", sign: "PIgsuskid4", percent: 15, avatar: "⭐" },
  { name: "cooldudeyesmanpro", role: "partner", sign: "cooldudeyesmanpro", percent: 15, avatar: "⭐" }
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
  { name: "None", percent: 0, role: "No Sign", color: "#888888" }
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


