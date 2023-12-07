"use client";
import clsx from "clsx";
import { ChangeEvent } from "react";
import { QuestionDTO } from "./types";
import QuestionStyle from "./Question.style";

type QuestionProps = {
  className?: string;
  question: QuestionDTO;
  value?: string | null;
  name?: string;
  onChange?: (value: string) => void;
};
export function Question({
  name,
  value,
  onChange,
  question,
  className,
}: QuestionProps) {
  function handleAlternativeSelection(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked && onChange) {
      onChange(question.id);
    }
  }
  return (
    <QuestionStyle>
      <div className={clsx(className)}>
        <h2 className="question">{question.text}</h2>
        {question.alternatives.map((alternative) => {
          return (
            <div key={alternative.id} className="option">
              <input
                type="radio"
                name={name}
                value={alternative.id}
                id={alternative.id}
                onChange={handleAlternativeSelection}
              />
              <label htmlFor={alternative.id}>{alternative.text}</label>
            </div>
          );
        })}
      </div>
    </QuestionStyle>
  );
}
