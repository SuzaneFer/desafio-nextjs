import { NextResponse } from "next/server";
import { addScore, getAssessment } from "../data";

export const dynamic = "force-dynamic";

export async function GET() {
  const assessment = await getAssessment();
  return NextResponse.json(assessment);
}

export async function POST(req: Request) {
  const { answers, userName } = await req.json();
  const assessment = await getAssessment();

  console.log( 'passou aqui')

  let score = 0;
  for (let i = 0; i < assessment.questions.length; i++) {
    const answer = answers[i];
    const question = assessment.questions[i];
    if (question.correctAlternative === answer) {
      score++;
    }
  }

  await addScore({ score, userName });

  return NextResponse.json({ score });
}
