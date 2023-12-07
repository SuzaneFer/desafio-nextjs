import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { Question } from './Question';

const sampleQuestion = {
  id: '1',
  text: 'Sample Question',
  alternatives: [
    { id: 'A', text: 'Option A' },
    { id: 'B', text: 'Option B' },
    { id: 'C', text: 'Option C' },
  ],
};

describe('Question Component', () => {
  it('should have no alternative marked initially', () => {
    const { getByLabelText } = render(<Question question={sampleQuestion} />);
    const options = sampleQuestion.alternatives.map((alternative) =>
      getByLabelText(alternative.text) as HTMLInputElement
    );

    options.forEach((option) => {
      expect(option.checked).toBeFalsy();
    });
  });

  it('should call onChange with the selected alternative id', () => {
    const mockOnChange = jest.fn();
    render(<Question question={sampleQuestion} onChange={mockOnChange} />);

    const optionA = screen.getByLabelText('Option A') as HTMLInputElement;

    fireEvent.click(optionA);

    expect(mockOnChange).toHaveBeenCalledWith('1');
  });

  it('should allow changing the selected alternative via value prop', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText, rerender } = render(
      <Question question={sampleQuestion} onChange={mockOnChange} />
    );

    const optionA = getByLabelText('Option A') as HTMLInputElement;
    const optionB = getByLabelText('Option B') as HTMLInputElement;

    fireEvent.click(optionA);

    act(() => {
      rerender(<Question question={sampleQuestion} value="B" onChange={mockOnChange} />);
    });

    expect(optionB.checked).toBeTruthy();
  });
});
