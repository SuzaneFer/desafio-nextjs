"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Assessment, AssessmentDTO, UserAssessmentDTO } from ".";
import AssessmentStyle, { HeaderAssessmentStyle, InstructionStyle } from "./UserAssessment.style";

type UserAssessmentProps = {
  className?: string;
  assessment: AssessmentDTO;
};
export function UserAssessment({ className, assessment }: UserAssessmentProps) {
  const form = useForm<UserAssessmentDTO>();
  const { register, handleSubmit } = form;

  const [userNameConfirmed, setUserNameConfirmed] = useState(false);
  function confirmUserName() {
    setUserNameConfirmed(true);
  }

  useEffect(() => {
    setTimeout(function () {
      alert("assessment finalizado");
    }, assessment.durationInSeconds * 1000);
  }, [assessment.durationInSeconds]);

  function submitAssessment(formData: UserAssessmentDTO) {
    alert(JSON.stringify(formData, null, 2));
  }

  return (
      <AssessmentStyle>
    <FormProvider {...form}>
      <HeaderAssessmentStyle>
        <p className="assessment-description">{assessment.description}</p>
        <h2 className="assessment-title">{assessment.title}</h2>
      </HeaderAssessmentStyle>

      <InstructionStyle>
        <h1 className="title">Instruções</h1>
        <p className="description">Informações</p>
      </InstructionStyle>

      <form
        className={clsx(className)}
        onSubmit={handleSubmit(submitAssessment)}
      >
        <div className="form-name">
          <div className="input-name">
            <label>Nome</label>
            <input
              type="text"
              {...register("userName")}
              placeholder="Nome"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  confirmUserName();
                }
              }}
            />
          </div>
          <button
            onClick={confirmUserName}
            type="button"
            className={clsx("bg-blue-600 p-1 inline-block text-gray-50", {
              hidden: userNameConfirmed,
            })}
          >
            Confirmar
          </button>
        </div>
        {userNameConfirmed ? (
          <>
            <Assessment assessment={assessment} />
            <button
              type="submit"
              className="bg-blue-600 p-1 inline-block text-gray-50"
            >
              Finalizar
            </button>
          </>
        ) : (
          <p className="description">Insira o seu nome para realizar a prova e exibir o resultado no ranking.</p>
        )}
      </form>
    </FormProvider>
      </AssessmentStyle>
  );
}
