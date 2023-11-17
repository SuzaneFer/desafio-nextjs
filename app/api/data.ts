import { readFile, writeFile } from "fs/promises";

type Assessment = {
  id: string;
  description: string;
  title: string;
  durationInSeconds: number;
  questions: Question[];
};

type Question = {
  id: string;
  text: string;
  alternatives: Alternative[];
  correctAlternative: string;
};

type Alternative = {
  id: string;
  text: string;
};
export async function getAssessment(): Promise<Assessment> {
  const assessmentData = await readFile("data/assessment.json", {
    encoding: "utf-8",
  });
  return JSON.parse(assessmentData);
}

type UserScore = {
  userName: string;
  score: number;
};
export async function getRanking(): Promise<UserScore[]> {
  const rankingData = await readFile("data/ranking.json", {
    encoding: "utf-8",
  });
  return JSON.parse(rankingData);
}
export async function addScore(userScore: UserScore) {
  const ranking = await getRanking();
  ranking.push(userScore);
  await writeFile("data/ranking.json", JSON.stringify(ranking, null, 2));
}
