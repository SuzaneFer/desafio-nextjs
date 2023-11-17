import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/ranking");
  const { ranking } = await response.json();
  return (
    <main className="p-6">
      <Link
        href={"/assessment"}
        className="bg-blue-600 p-1 inline-block text-gray-50"
      >
        Realizar Assessment
      </Link>
      <h1 className="text-lg font-medium">Ranking</h1>
      <table>
        <thead className="border-b-2">
          <tr>
            <th className="text-sm font-normal">Usuário</th>
            <th className="text-sm font-normal">Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map(
            (userScore: { userName: string; score: number }, index: number) => {
              return (
                <tr key={index}>
                  <td>{userScore.userName}</td>
                  <td>{userScore.score}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </main>
  );
}
