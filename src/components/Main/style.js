import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  h2{
    text-align: center;
    text-transform: uppercase;
    padding: 30px 0 0 0;
    font-size: 30px;
  }
  .container{
    justify-content: center;
    align-items: center;
    min-height: 500px;
    form{
      padding: 8px;
      border-radius: 12px;
      background: white;
      width: 100%;
      height: 150px;
      max-width: 300px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      
      flex-direction: column;
      &:focus-within{
        border: 1px solid hsla(170, 89%, 45%, 0.945);
      }
      .item-form{
        width: 100%;
        border: 0;
        height: 35px;
        max-width: 250px;
        border-radius: 15px;
        outline: 0;
      }
      input{
        padding-left: 15px;
        background-color: #e0dcdc;
      }
      button{
        cursor: pointer;
        background-color: #45d5ee;
        color: white;
        text-transform: uppercase;
        transition: all.4s;
        &:hover{
          background: #1a9cb3;
        }
      }
    }
  }
`