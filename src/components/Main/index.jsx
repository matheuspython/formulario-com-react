import { MainStyled } from "./style"

export const Main = () =>{

  return (
    <MainStyled>
      <h2>prencha o formulario para garantir a sua vaga</h2>
      <div className="container">
        <form action="">
          <input className="item-form" type="email" placeholder="email" />
          <button type="button" className="item-form" > enviar </button>
        </form>
      </div>

    </MainStyled>
  )
}