export enum LEVEL {
  "VERY_HIGH" = 4,
  "HIGH" = 3,
  "MEDIUM" = 2,
  "LOW" = 1,
}

export enum TYPE {
  skill_level = "SKILL_LEVEL",
  movement = "MOVEMENT",
  weapon = "WEAPON",
  role = "ROLE",
  playstyle = "PLAYSTYLE",
  aim_style = "AIMSTYLE",
  ult = "ULT",
  heal = "HEAL",
  shield = "SHIELD",
}

export interface Response {
  code?: number;
  data: unknown;
  message: string;
}

export interface CreateUser {}
