import { Char } from "../models/character.model.js";

export const fetchCharacterByProps = async (input: unknown) => {
  return Char.find(input).lean();
};

export const fetchCharByRole = async (role: number) => {
  return Char.find({ "props.ROLE": role }).lean();
};

export const characterPropsTranslate = (type: string, role: number) => {
  switch (type) {
    case "MOVEMENT":
      return { 0: "none", 1: "slow", 2: "medium", 3: "fast" };
    case "SKILL_LEVEL":
      return { 0: "none", 1: "easy", 2: "medium", 3: "hard" };
    case "WEAPON":
      return { 0: "none", 1: "melee", 2: "ranged" };
    case "ROLE":
      return { 0: "none", 1: "damage", 2: "tank", 3: "support" };
    case "PLAYSTYLE":
      if (role === 1) return { 1: "In & Out", 2: "Upclose & personal" };
      else if (role === 2)
        return { 1: "In & Out", 2: "Upclose & personal", 3: "Front-line" };
      else
        return { 1: "Offensive", 2: "Defensive", 3: "Offensive & Defensive" };
    case "ULT":
      if (role === 1) return { 1: "Damage over time", 2: "burst" };
      else if (role === 2)
        return { 1: "Support (stun, etc)", 2: "Damage over time", 3: "Burst" };
      else
        return {
          1: "Invincibility",
          2: "Mass ressurection",
          3: "Damage boost",
          4: "Displacement",
          5: "Any (available on both team)",
        };
    case "HEAL":
      return {
        0: "none",
        1: "High",
        2: "Low Heal, High dmg",
        3: "High heal, high dmg",
      };
    case "SHIELD":
      return { 0: "No", 1: "Yes" };
    default:
      return null;
  }
};
