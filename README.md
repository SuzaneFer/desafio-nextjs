# Desafio Dev Ada - Next.js

Este é um pequeno projeto em Next.js que simula uma aplicação de assessments.
A aplicação consiste em um assessment com um ranking das melhores pontuações.
Para completar o desafio você precisa concluir uma série de tarefas que envolvem correções e novas features.

## Critérios de avaliação
Você será avaliado pelos seguintes critérios:
- Domínio do framework Next.js e dos padrões de desenvolvimento web;
- Capacidade de interpretar e corrigir erros;
- Implementação de algoritmos;
- Escrita de testes unitários;

## Setup do projeto
Deve ter instalado na sua máquina o Node.js >= 18 e o yarn package manager.

Instale as dependências com o comando `yarn install`.

Rode o projeto com o comando `yarn dev`.

## Tarefas
Fique livre para escolher a ordem em que realizará cada tarefa. Se tiver alguma dúvida de compreensão do que precisa ser feito, pode chamar a gente.

1. A página de realização do assessment está com algum problema de build. A página deve carregar corretamente sem erros.
2. A seleção de alternativas não está funcionando. Ao marcar uma alternativa, a alternativa marcada deve aparecer selecionada.
3. Adicione testes unitários ao componente Question que verifiquem os seguintes comportamentos:
    - O estado inicial deve ser nenhuma alternativa marcada.
    - Ao selecionar uma alternativa, o evento onChange é chamado com o id da alternativa selecionada.
    - Deve ser possível trocar a alternativa selecionada passando um value.
4. Quando o tempo do assessment acaba, aparece um aviso de término. Porém observamos que ao navegar de volta pra home antes do final do assessment, o aviso acaba aparecendo na home. O aviso de término só deve aparecer na tela do assessment e somente uma vez.
5. As respostas do assessment ainda não estão sendo enviadas para o backend. As respostas do usuário devem ser registradas tanto no término do tempo limite como também no clique do botão de finalização. A documentação da API está disponível em http://localhost:3000/apidocs.html.
6. O usuário não consegue saber sua pontuação após o término do assessment. Adicione na tela de realização do assessment a pontuação que ele tirou após o término.
7. O ranking está desordenado e precisa de uma melhoria. O ranking deve mostrar apenas as 10 maiores pontuações.
8. Foi identificado que é possível obter as respostas corretas analisando o painel de desenvolvedor do navegador. Os usuários não podem ter acesso ao gabarito.
9. A aplicação ainda não está no estilo e formato que o time de design planejou. A aplicação deve ficar com a mesma aparência especificada [nesse arquivo do Figma](https://www.figma.com/file/Co72LvWoikIo0tvKvQE0i9/Assessments-Implementa%C3%A7%C3%A3o-Figma).

**Boa sorte!**

