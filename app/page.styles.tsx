"use client";
import styled from 'styled-components';
import colors from './util/styles/colors';

const PageStyle = styled.main`
  display: flex;
  background: ${colors.background};
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  min-height: 364px;
  background: ${colors.gradientInitial};
  padding: 0px 218px;
  margin-bottom: 32px;

  .title-header{
    color: #FFF;
    font-family: 'Ubuntu', sans-serif;;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 350px;
    margin-right: 118px;
  }

  .subtitle-header{
    color: #A6F750;
    font-family: 'Lato', sans-serif;;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .info-title{
    color: #FFF;
    font-family: 'Lato', sans-serif;;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .button-assessment{
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
  }

  .info{
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: #383C44;
    padding: 16px 20px;
    margin-top: 16px;
    margin-bottom: 24px;


  .info-subtitle{
    color: #FFF;
    font-family: 'Lato', sans-serif;;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
`

export const RankingStyle = styled.div`
  min-width: 303px;
  width: 50%;
  padding-left: 218px;
  table{
    border-collapse: separate;
    border-spacing: 0 8px;
  }
  .ranking-title{
    color: #FFF;
    font-family: 'Ubuntu', sans-serif;;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .table-header{
    color: #5E605F;
    font-family: 'Lato', sans-serif;;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
  }

  .table-item{
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(166, 247, 80, 0.05) 0%, rgba(166, 247, 80, 0.00) 100%), #181C23;

    .position{
      color: #A6F750;
      font-family: 'Lato', sans-serif;;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      padding-left: 16px;
    }
    .user{
      color: #FFF;
      font-family: 'Lato', sans-serif;;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      width: 100%;
      padding: 20px 0;
    }
    .score{
      color: #A6F750;
      font-family: 'Lato', sans-serif;;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding-right: 62px;
    }
  }
`

export const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 218px;
  width: 50%;
  p{
    width: 362px;
    color: white;
  }
  span{
    color: white;
  }
  .about-title{
    color: #FFF;
    font-family: 'Ubuntu', sans-serif;;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 24px;
  }

  .about-subtitle{
    color: #828282;
    font-family: 'Lato', sans-serif;;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 32px;
  }

  .about-footer{
    display: flex;
    flex-direction: row;
    gap: 72px;
    .about-time{
      display: flex;
      flex-direction: column;
      &_title{
        color: #A6F750;
        font-family: 'Ubuntu', sans-serif;;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 16px;
      }

      &_time{
        font-family: 'Lato', sans-serif;;
        font-size: 36px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin-bottom: 8px;
      }

      &_description{
        color: #828282;
        font-family: 'Lato', sans-serif;;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .about-questions{
      display: flex;
      flex-direction: column;

      &_title{
        color: #A6F750;
        font-family: 'Ubuntu', sans-serif;;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 16px;
      }

      &_number{
        font-family: 'Lato', sans-serif;;
        font-size: 36px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
  }

`

export default PageStyle;
