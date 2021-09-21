import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  body{
    font-size: 14px;
    background: #e7f2f3;
  }
  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
  }

`