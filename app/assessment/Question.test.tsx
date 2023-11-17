import { render, screen } from "@testing-library/react";
import { Question } from ".";

describe("Question", function () {
  it("should render", async function () {
    render(
      <Question
        question={{
          id: "id",
          text: "Question text",
          alternatives: [],
        }}
      />
    );

    const textElement = screen.getByText("Question text");
    expect(textElement).toBeInTheDocument();
  });
});
