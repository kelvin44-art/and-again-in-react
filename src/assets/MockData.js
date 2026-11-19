// src/data/projects.js

// Shared for now — inline per project once rosters diverge.
const coreTeam = [
  "Jason Yim",
  "Natalie Harris",
  "Kate Masancay",
  "Sudiksha Khanduja",
  "Stephanie Huynh",
  "Ayesha Renard",
  "Michelle Kirk",
  "Nneka Daly",
  "Hiba Abdillahi",
];

const data = [
  {
    id: "oyster",
    title: "Oyster",
    abbreviation: "OY",
    team: coreTeam,
    roles: ["Creative Design", "Brand Design"],
    about:
      "At Oyster HR, held the role of Director of Brand Design for over two transformative years — leading the team from its foundational stages to 15 designers, animators, and developers. Oversaw brand strategy, a web design system, targeted campaigns, and brand overhauls. Metrics showed a 67% growth in brand reach.",
  },
  {
    id: "modernlife",
    title: "ModernLife",
    abbreviation: "ML",
    team: coreTeam,
    roles: ["Creative Design", "Brand Design"],
    about: "TODO: ModernLife summary.",
  },
  {
    id: "tailwind",
    title: "TailWind",
    abbreviation: "TW",
    team: coreTeam,
    roles: ["Creative Design", "Brand Design"],
    about: "TODO: TailWind summary.",
  },
  {
    id: "experiment",
    title: "Experiment",
    abbreviation: "EX",
    team: coreTeam,
    roles: ["Creative Design", "Brand Design"],
    about: "TODO: Experiment summary.",
  },
];

export default data;