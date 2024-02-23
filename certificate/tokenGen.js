const fs = require("fs");
const crypto = require("crypto");

// JumboHack 2024 certificate bearers
const people = [
  {
    name: "Avtar Rekhi",
    email: "avtar.rekhi@tufts.edu",
    type: "certificate",
  },
  {
    name: "WillK13 Kaminski",
    email: "22wkaminski@tenafly.k12.nj.us",
    type: "certificate",
  },
  {
    name: "Jiaying Zhao",
    email: "jiayingzhao837@gmail.com",
    type: "certificate",
  },
  {
    name: "Sristi Panchu",
    email: "sristipanchu@gmail.com",
    type: "certificate",
  },
  {
    name: "Aria Yang",
    email: "aria.yang@tufts.edu",
    type: "certificate",
  },
  {
    name: "Ben Borgers",
    email: "benborgers@hey.com",
    type: "certificate",
  },
  {
    name: "locmai1 Mai",
    email: "locmai0315@gmail.com",
    type: "certificate",
  },
  {
    name: "Placide Shema",
    email: "placide.shema@tufts.edu",
    type: "certificate",
  },
  {
    name: "Youssef Naguib",
    email: "ynagui01@tufts.edu",
    type: "certificate",
  },
  {
    name: "William Fowler",
    email: "williamfowler04@gmail.com",
    type: "certificate",
  },
  {
    name: "MarkerPretzel Pretell",
    email: "marco.pretell2@gmail.com",
    type: "certificate",
  },
  {
    name: "Owen Prendergast",
    email: "owenprendergast8@gmail.com",
    type: "certificate",
  },
  {
    name: "Clarence Yeh",
    email: "clarence.yeh@tufts.edu",
    type: "certificate",
  },
  {
    name: "manuel.penaa Pena",
    email: "manuel.pena.mt@gmail.com",
    type: "certificate",
  },
  {
    name: "Pablo Duran",
    email: "pablo.duran@tufts.edu",
    type: "certificate",
  },
  {
    name: "Arnav Kachwaha",
    email: "arnav.kachwaha@tufts.edu",
    type: "certificate",
  },
  {
    name: "johncast14 Castillo Tacuri",
    email: "john.castillo_tacuri@tufts.edu",
    type: "certificate",
  },
  {
    name: "pmoise Moise",
    email: "petercmoise@gmail.com",
    type: "certificate",
  },
  {
    name: "Joey L. Marmo",
    email: "joseph.marmo@tufts.edu",
    type: "certificate",
  },
  {
    name: "A Y Masse",
    email: "aydm.colleges@gmail.com",
    type: "certificate",
  },
  {
    name: "Samuel Bradley",
    email: "samuel.bradley@tufts.edu",
    type: "certificate",
  },
  {
    name: "Jingyi Wang",
    email: "jwang65@tufts.edu",
    type: "certificate",
  },
  {
    name: "cabechtel ",
    email: "carmen.bechtel@tufts.edu",
    type: "certificate",
  },
  {
    name: "Pot8tr2 ",
    email: "sgoss02@tufts.edu",
    type: "certificate",
  },
  {
    name: "Jerome Paulos",
    email: "jero@hey.com",
    type: "certificate",
  },
  {
    name: "Mundoamundo ",
    email: "seth.r.lupo@gmail.com",
    type: "certificate",
  },
  {
    name: "Alexander Chanis",
    email: "alexander.chanis@tufts.edu",
    type: "certificate",
  },
  {
    name: "Merwan Malakapalli",
    email: "merwan.malakapalli@tufts.edu",
    type: "certificate",
  },
  {
    name: "Christopher Holden",
    email: "christopher@rogueleader.net",
    type: "certificate",
  },
  {
    name: "Lydia Chen",
    email: "lydia.chen@tufts.edu",
    type: "certificate",
  },
  {
    name: "Keiji Numata",
    email: "knumata5127@gmail.com",
    type: "certificate",
  },
  {
    name: "Jack Mitchell",
    email: "mitchell.jack@northeastern.edu",
    type: "certificate",
  },
  {
    name: "SturgeonInc ",
    email: "robijenik@gmail.com",
    type: "certificate",
  },
  {
    name: "kaelensong ",
    email: "kaelensong@gmail.com",
    type: "certificate",
  },
  {
    name: "Jad Oubala",
    email: "jadoubala@gmail.com",
    type: "certificate",
  },
  {
    name: "An Tran",
    email: "an.tran651645@tufts.edu",
    type: "certificate",
  },
  {
    name: "Raymond Rosales",
    email: "rjrosales2025@gmail.com",
    type: "certificate",
  },
  {
    name: "Benson Jiang",
    email: "jiangbenson805@gmail.com",
    type: "certificate",
  },
  {
    name: "Akash Chatterji",
    email: "akash.chatterji@tufts.edu",
    type: "certificate",
  },
  {
    name: "Yihui Hu",
    email: "yyihui.hu@gmail.com",
    type: "certificate",
  },
  {
    name: "Mina Shimada",
    email: "mina.shimada@tufts.edu",
    type: "certificate",
  },
  {
    name: "sunaypatel ",
    email: "sunay1231@gmail.com",
    type: "certificate",
  },
  {
    name: "Benjamin Li",
    email: "benjamin.li@tufts.edu",
    type: "certificate",
  },
  {
    name: "aqnazar ",
    email: "aknazararysbek@gmail.com",
    type: "certificate",
  },
  {
    name: "leahkerry ",
    email: "leah.kerry@tufts.edu",
    type: "certificate",
  },
  {
    name: "Matthew Wong",
    email: "matthewkw123@gmail.com",
    type: "certificate",
  },
  {
    name: "Brian Becker",
    email: "brth.becker@gmail.com",
    type: "certificate",
  },
  {
    name: "Johann Zhang",
    email: "johann.zhang@tufts.edu",
    type: "certificate",
  },
  {
    name: "Jessie Katz",
    email: "jess.katz888@gmail.com",
    type: "certificate",
  },
  {
    name: "Waasif Mahmood",
    email: "waasifmahmood2004@gmail.com",
    type: "certificate",
  },
  {
    name: "Shayne Sidman",
    email: "shayne.sidman@tufts.edu",
    type: "certificate",
  },
  {
    name: "Thomas Lai",
    email: "thomas.lai@tufts.edu",
    type: "certificate",
  },
  {
    name: "NilYdna04 Lin",
    email: "nilydna04@gmail.com",
    type: "certificate",
  },
  {
    name: "Sarah Jun",
    email: "sarah.jun@tufts.edu",
    type: "certificate",
  },
  {
    name: "Allison Ferner",
    email: "allison.ferner@tufts.edu",
    type: "certificate",
  },
  {
    name: "Jet Yotsuuye",
    email: "yotsuuye@gmail.com",
    type: "certificate",
  },
  {
    name: "Tygan Chin",
    email: "tygan.chin@tufts.edu",
    type: "certificate",
  },
  // TEAM 1 ENV WINNER AND CREATIVITY WINNER
  {
    name: "Raymond Rosales",
    email: "rrosal01@tufts.edu",
    type: "track winner",
    description: "environmentalism",
  },
  {
    name: "Raymond Rosales",
    email: "rrosal01@tufts.edu",
    type: "criteria winner",
    description: "creativity",
  },
  {
    name: "Aria Yang",
    email: "aria.yang@tufts.edu",
    type: "track winner",
    description: "environmentalism",
  },
  {
    name: "Aria Yang",
    email: "aria.yang@tufts.edu",
    type: "criteria winner",
    description: "creativity",
  },
  {
    name: "Spencer Goss",
    email: "sgoss02@tufts.edu",
    type: "track winner",
    description: "environmentalism",
  },
  {
    name: "Spencer Goss",
    email: "sgoss02@tufts.edu",
    type: "criteria winner",
    description: "creativity",
  },
  {
    name: "Matthew Wong",
    email: "mwong14@tufts.edu",
    type: "track winner",
    description: "environmentalism",
  },
  {
    name: "Matthew Wong",
    email: "mwong14@tufts.edu",
    type: "criteria winner",
    description: "creativity",
  },
  {
    name: "Andrew Lin",
    email: "andrew.lin@tufts.edu",
    type: "track winner",
    description: "environmentalism",
  },
  {
    name: "Andrew Lin",
    email: "andrew.lin@tufts.edu",
    type: "criteria winner",
    description: "creativity",
  },
  // TEAM 2 EDUCATION WINNER AND MOST INNOVATIVE
  {
    name: "Won Kim",
    email: "won.kim642510@tufts.edu",
    type: "track winner",
    description: "education",
  },
  {
    name: "Won Kim",
    email: "won.kim642510@tufts.edu",
    type: "criteria winner",
    description: "innovation",
  },
  {
    name: "Loc Mai",
    email: "loc.mai@tufts.edu",
    type: "track winner",
    description: "education",
  },
  {
    name: "Loc Mai",
    email: "loc.mai@tufts.edu",
    type: "criteria winner",
    description: "innovation",
  },
  {
    name: "Johnny Tan",
    email: "johnny.tan@tufts.edu",
    type: "track winner",
    description: "education",
  },
  {
    name: "Johnny Tan",
    email: "johnny.tan@tufts.edu",
    type: "criteria winner",
    description: "innovation",
  },
  {
    name: "Nick Doan",
    email: "huy.doan@tufts.edu",
    type: "track winner",
    description: "education",
  },
  {
    name: "Nick Doan",
    email: "huy.doan@tufts.edu",
    type: "criteria winner",
    description: "innovation",
  },
  {
    name: "Fa Taepaisitphongse",
    email: "chompoonik.taepaisitphongse@tufts.edu",
    type: "track winner",
    description: "education",
  },
  {
    name: "Fa Taepaisitphongse",
    email: "chompoonik.taepaisitphongse@tufts.edu",
    type: "criteria winner",
    description: "innovation",
  },
  {
    name: "Jack Zhang",
    email: "jack.zhang@tufts.edu",
    type: "track winner",
    description: "education",
  },
  {
    name: "Jack Zhang",
    email: "jack.zhang@tufts.edu",
    type: "criteria winner",
    description: "innovation",
  },
  // TEAM 3 POLITICAL AWARENESS WINNER AND MOST IMPACTFUL AND OVERALL
  {
    name: "Clarence Yeh",
    email: "clarence.yeh@tufts.edu",
    type: "track winner",
    description: "political awareness",
  },
  {
    name: "Clarence Yeh",
    email: "clarence.yeh@tufts.edu",
    type: "criteria winner",
    description: "impact",
  },
  {
    name: "Clarence Yeh",
    email: "clarence.yeh@tufts.edu",
    type: "overall winner",
  },
  {
    name: "Lydia Chen",
    email: "lydia.chen@tufts.edu",
    type: "track winner",
    description: "political awareness",
  },
  {
    name: "Lydia Chen",
    email: "lydia.chen@tufts.edu",
    type: "criteria winner",
    description: "impact",
  },
  {
    name: "Lydia Chen",
    email: "lydia.chen@tufts.edu",
    type: "overall winner",
  },
  {
    name: "Yihui Hu",
    email: "yihui.hu@tufts.edu",
    type: "track winner",
    description: "political awareness",
  },
  {
    name: "Yihui Hu",
    email: "yihui.hu@tufts.edu",
    type: "criteria winner",
    description: "impact",
  },
  {
    name: "Yihui Hu",
    email: "yihui.hu@tufts.edu",
    type: "overall winner",
  },
  {
    name: "Jessie Huang",
    email: "jessie.huang@tufts.edu",
    type: "track winner",
    description: "political awareness",
  },
  {
    name: "Jessie Huang",
    email: "jessie.huang@tufts.edu",
    type: "criteria winner",
    description: "impact",
  },
  {
    name: "Jessie Huang",
    email: "jessie.huang@tufts.edu",
    type: "overall winner",
  },
  // TEAM 4 GENERAL WINNER AND MOST COMPLETE AND OVERALL
  {
    name: "Ben Borgers",
    email: "benjamin.borgers@tufts.edu",
    type: "track winner",
    description: "general",
  },
  {
    name: "Ben Borgers",
    email: "benjamin.borgers@tufts.edu",
    type: "criteria winner",
    description: "completeness",
  },
  {
    name: "Ben Borgers",
    email: "benjamin.borgers@tufts.edu",
    type: "overall winner",
  },
  {
    name: "Jerome Paulos",
    email: "jerome_paulos@brown.edu",
    type: "track winner",
    description: "general",
  },
  {
    name: "Jerome Paulos",
    email: "jerome_paulos@brown.edu",
    type: "criteria winner",
    description: "completeness",
  },
  {
    name: "Jerome Paulos",
    email: "jerome_paulos@brown.edu",
    type: "overall winner",
  },
];

// const host = "http://localhost:3000";
const host = "https://jumbohack.vercel.app";

// Generates certificate tokens for each person listed in the `people` array
// The tokens are encrypted with the private key, then saved to a file called `tokens.txt`
// It is assumed that there is a private key file called `id_rsa_priv.pem` in the same directory
// as this script. A key pair can be generated using the `keyGen.js` script
function generateTokens() {
  let privateKey;
  try {
    privateKey = fs.readFileSync(__dirname + "/id_rsa_priv.pem", "utf8");
  } catch {
    console.log("Private key not found, please run keyGen.js first");
    return;
  }
  fs.writeFileSync(__dirname + "/tokens.txt", "");
  people.forEach(({ email, name, type, description }) => {
    const value = `${type}:${name}:${description}`;
    const token = crypto
      .privateEncrypt(privateKey, Buffer.from(value))
      .toString("base64");
    const certUrl = `${host}/certificate/${encodeURIComponent(token)}`;
    fs.writeFileSync(
      __dirname + "/tokens.txt",
      `${email}, ${name}, ${type} (${description}), ${certUrl}` + "\n\n---\n\n",
      { flag: "a" }
    );
  });
}

generateTokens();
