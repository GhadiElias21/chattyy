const avatarStyles = [
  "adventurer",
  "bottts",
  "lorelei",
  "initials",
  "avataaars",
  "pixel-art",
  "fun-emoji",
] as const;

export const generateAvatar = (seed?: string): string => {
  const randomSeed = seed || Math.random().toString(36).substring(2, 12);

  // Pick random style
  const style = avatarStyles[Math.floor(Math.random() * avatarStyles.length)];

  return `https://api.dicebear.com/7.x/${style}/svg?seed=${randomSeed}`;
};
