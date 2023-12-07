"use client";
import Link from "next/link";
import { UserAssessment } from "./UserAssessment";
import { LinkStyle } from "./UserAssessment.style";
import ArrowBackIcon from "../util/icons/arrow-back";


// eslint-disable-next-line @next/next/no-async-client-component
export default async function Assessments() {
  const response = await fetch("http://localhost:3000/api/assessment");
  const assessment = await response.json();

  return (
    <main className="p-6">
      <LinkStyle>
        <Link href={"/"}>
          <ArrowBackIcon />
          Voltar
        </Link>
      </LinkStyle>
      <UserAssessment assessment={assessment} />
    </main>
  );
}
