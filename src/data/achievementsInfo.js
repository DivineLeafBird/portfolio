import getExperienceYears from "./yearsOfExperience";

export const achievementsInfo = [
  {
    id: 1,
    icon: "FaCode",
    metric: getExperienceYears(2022).toString(),
    description: "Years of experience",
  },
  {
    id: 2,
    icon: "IoRocket",
    metric: "10",
    description: "Projects completed",
  },
  {
    id: 3,
    icon: "FaBuilding",
    metric: "6",
    description: "Companies worked with",
  },
  {
    id: 4,
    icon: "FaHandshake",
    metric: "15",
    description: "Clients",
  },
];
