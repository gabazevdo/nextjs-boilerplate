import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo, simbolizando o Logotipo do Curso e ao lado escrito React Avançado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Descrioption>
      Typescript, ReactJS, NExtJS and Styled Components
    </S.Descrioption>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="imagem de um desenvolvedor de frente para o computador"
    />
  </S.Wrapper>
)

export default Main
