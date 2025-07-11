// Acts as a databse to storeprojects for dynamic rendering in Projects component

// Schema for project objects
const projectSchema = {
  title: String,
  githubRepo: String | null,
  deploymentLink: String | null,
  techStack: [String],
  summary: String,
};

export const projects = [
  {
    title: "Card-io",
    githubRepo: "https://github.com/natep1123/card-io",
    deploymentLink: "https://card-io-np.vercel.app/",
    techStack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "NextAuth",
      "Axios",
      "Chart.js",
    ],
    summary:
      "A workout generator using the Deck of Cards API to create randomized full-body workout challenges. Includes scalable difficulty based on deck size and a multiplier, stat tracking, user authentication for saving stats, and data visualization for tracking progress over time.",
  },
  {
    title: "BounceBack!",
    githubRepo: "https://github.com/natep1123/bounceback",
    deploymentLink: "https://bounceback-zeta.vercel.app/",
    techStack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "NextAuth",
      "Axios",
    ],
    summary:
      "A single-player full-stack app and twist on the classic game of Pong, where you play against yourself to keep the ball bouncing. The game features a scoring system, scaling velocity, user authentication for score saving, guest mode, guest promotion to user for continuity of scores and a global leaderboard for comparing scores across all users.",
  },
  {
    title: "Cipher Encrypt",
    githubRepo: null,
    deploymentLink: "https://cipher-encrypt.vercel.app/",
    techStack: ["JavaScript", "HTML", "CSS"],
    summary:
      "A web tool that allows users to encrypt and decrypt messages using a cipher letter-shift algorithm. The app features a user-friendly interface and provides instant results for encryption and decryption along with cryptic letter animations.",
  },
  {
    title: "Jeopardy!",
    githubRepo: null,
    deploymentLink: "https://jeopardy-wheat.vercel.app/",
    techStack: ["JavaScript", "HTML", "CSS"],
    summary:
      "An interactive interface for a Jeopardy gameboard using the Jeopardy API to fetch categories and questions. The app features a responsive design and allows users to click on the board for questions, and again for answers.",
  },
];
