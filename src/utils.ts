import skillsData from "./data/skills.json";

export const getImageUrl = (path: string) => {
  return `/assets/${path}`;
};

export const getSkillImage = (skillName: string): string | undefined => {
  const skill = skillsData.find((s) => s.title === skillName);
  return skill ? skill.imageSrc : undefined;
};
