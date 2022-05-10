import { createGlobalStyle } from 'styled-components';
import bgimg from '../../assets/images/background.jpg';

const globalStyle = createGlobalStyle `
* {
    outline: none;
    box-sizing: border-box;
  }
  body {
    line-height: normal;
  }
  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }
  #root {
    background: url(${bgimg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  .mb-2 {
    margin-bottom: 16px;
  }
  .pt-2 {
    padding-top: 16px;
  }
  .cursor {
    cursor: pointer;
  }

  .img{
    max-width: 15%;
    padding-right: 10px;
    vertical-align: middle;
  }

  .seletor{
    display: inline;
    text-align: center;
  }

  .text{
    vertical-align: middle;
    font-size: 25px;
  }
  .titulo{
    color: #072C72;
    text-align: left;
    opacity: .7;
    font-family: helvetica;
    padding-left: 20px;
  }

`
export default globalStyle