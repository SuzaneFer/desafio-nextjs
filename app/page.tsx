import Link from "next/link";
import PageStyle, { AboutStyle, HeaderStyle, RankingStyle } from "./page.styles";

export const dynamic = "force-dynamic";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/ranking");
  const { ranking } = await response.json();
  return(
    <PageStyle>
      <HeaderStyle>
        <div>
          <span className="subtitle-header">Assessments</span>
          <h1 className="title-header">Teste de Conhecimento em JavaScript</h1>
        </div>
        <div>
          <span className="info-title">Realizar Assessment</span>
          <div className="info">
            <span className="info-subtitle">💡 Tenha atenção nas instruções, para garantir melhor experiência com esse assessment.</span>
          </div>
          <Link
            href={"/assessment"}
            className="button-assessment"
          >
            Realizar Assessment
          </Link>
        </div>
      </HeaderStyle>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '64px'}}>
        <RankingStyle>
          <h2 className="ranking-title">Ranking de Pontuação</h2>
        <table>
          <thead>
            <tr>
              <th className="table-header">Posição</th>
              <th className="table-header">Nome</th>
              <th className="table-header">Score</th>
            </tr>
          </thead>
          <tbody>
            {ranking?.map(
              (userScore: { userName: string; score: number }, index: number) => {
                return (
                  <tr className="table-item" key={index}>
                    <td className="position">{index + 1}</td>
                    <td className="user">{userScore.userName}</td>
                    <td className="score">{userScore.score}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        </RankingStyle>
        <AboutStyle>
          <span className="about-title">Sobre o Assessment</span>
          <p className="about-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.
          </p>
          <div className="about-footer">
            <div className="about-time">
              <span className="about-time_title">Tempo de Prova</span>
              <span className="about-time_time">30:00</span>
              <span className="about-time_description">3:30 por Questão(Média)</span>
            </div>
            <div className="about-questions">
              <span className="about-questions_title">Número de Questões</span>
              <span className="about-questions_number">10</span>
            </div>
          </div>
        </AboutStyle>
      </div>
    </PageStyle>
)};