export interface TeamMember {
  id: string;
  name: string;
  photoUrl: string;
  accent: string;
  message: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "aadil",
    name: "Aadil",
    photoUrl: "/photos/aadil.png",
    accent: "#e8a2b8",
    message:
      "3 mahine kab nikal gaye pata hi nahi chala. Intern banke aaya tha, lekin dost banke jaa raha hai. Teri bakchodi, tere jokes aur teri presence sab miss hogi. Ab bas itna hi bolunga ki life mein bahut aage badh, lekin yeh doston ko bhulna mat bass. Wishing you all the best for your next journey, bhai!",
  },
  {
    id: "kunal",
    name: "Kunal",
    photoUrl: "/photos/kunal.png",
    accent: "#10d9a4",
    message:
      "I do not smoke because you made me lively",
  },
  {
    id: "pritee",
    name: "Pritee",
    photoUrl: "/photos/pritee.png",
    accent: "#d4a853",
    message:
      "Update this with Pritee's message.",
  },
  {
    id: "muskan",
    name: "Muskan",
    photoUrl: "/photos/muskan.png",
    accent: "#a78bfa",
    message:
      "Update this with Muskan's message.",
  },
];

export const consoleLines = [
  { text: "> Initializing farewell.exe...", delay: 0, type: "cmd" },
  { text: "  [OK] Environment: Production", delay: 300, type: "success" },
  { text: "> Auditing PR history... (2,847 commits found)", delay: 700, type: "cmd" },
  { text: "  [OK] Code quality: Absurdly good", delay: 1100, type: "success" },
  { text: "> Calculating bug-to-fix ratio...", delay: 1500, type: "cmd" },
  { text: "  [OK] Ratio: 0.001 (statistical anomaly)", delay: 1900, type: "success" },
  { text: "> Scanning Slack messages...", delay: 2300, type: "cmd" },
  { text: "  [WARNING] 'It works on my machine' count: 0", delay: 2700, type: "warning" },
  { text: "  [WARNING] This is genuinely suspicious", delay: 3000, type: "warning" },
  { text: "> Running teammate sentiment analysis...", delay: 3400, type: "cmd" },
  { text: "  [ERROR] Emotional levels: 99.7% (unsafe threshold)", delay: 3800, type: "error" },
  { text: "> Checking LGTM frequency...", delay: 4200, type: "cmd" },
  { text: "  [OK] LGTM earned: always. Given: generously.", delay: 4600, type: "success" },
  { text: "> Computing contribution legend status...", delay: 5000, type: "cmd" },
  { text: "  [OK] Status: CONFIRMED GOAT 🐐", delay: 5400, type: "success" },
  { text: "> Parth.status = 'UPGRADED_TO_LEGEND'", delay: 5800, type: "cmd" },
  { text: "  >> You were the best of us, Parth.", delay: 6200, type: "final" },
];
