export type AlternativeDTO = {
  id: string;
  text: string;
};
export type QuestionDTO = {
  id: string;
  text: string;
  alternatives: AlternativeDTO[];
};

export type AssessmentDTO = {
  id: string;
  title: string;
  description: string;
  durationInSeconds: number;
  questions: QuestionDTO[];
};

export type UserAssessmentDTO = {
  userName: string;
  answers: (string | null)[];
};
