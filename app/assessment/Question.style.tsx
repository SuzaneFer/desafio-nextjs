"use client";
import styled from 'styled-components';

const QuestionStyle = styled.div`

  .question{
    color: #FFF;
    font-family: 'Ubuntu', sans-serif;;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 48px;
    margin-top: 48px;
  }

  .option{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    background: #181C23;
    padding: 12px;
    margin-bottom: 8px;

    label{
      color: #FFF;
      font-family: 'Lato', sans-serif;;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-left: 32px;
    }
  }

`

export default QuestionStyle;