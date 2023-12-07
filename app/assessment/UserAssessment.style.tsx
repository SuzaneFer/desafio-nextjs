"use client";
import styled from 'styled-components';

const AssessmentStyle = styled.div`
  display: flex;
  flex-direction: column;

  button{
    border-radius: 4px;
    background: #A6F750;
    color: #000;
    text-align: center;
    font-family: 'Lato', sans-serif;;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 14px 72px;
    height: 44px;
    margin-bottom: 12px;
  }

  .form-name{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  }


  .input-name{
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    label{
      color: #FFF;
      font-family: 'Lato', sans-serif;;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 12px;
    }

    input{
      border-radius: 4px;
      background: #181C23;
      color: #48484C;
      width: 362px;
      height: 44px;
      padding: 16px;
    }

    input::placeholder {
      color: #48484C;
      font-family: 'Lato', sans-serif;;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .assessment-title{
    color: #FFF;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 8px;
    margin-bottom: 48px;
  }
  .assessment-description{
    color: #FFF;
    font-family: 'Lato', sans-serif;;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description{
    color: #828282;
    font-family: 'Lato', sans-serif;;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const HeaderAssessmentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InstructionStyle = styled.div`
  .title{
    color: #A6F750;
    font-family: 'Ubuntu', sans-serif;;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 24px;
  }

  .description{
    color: #828282;
    font-family: 'Lato', sans-serif;;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 48px;
  }
`

export const LinkStyle = styled.div`
  a{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 8px;
    color: #A6F750;
    font-family: 'Lato', sans-serif;;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

export default AssessmentStyle;