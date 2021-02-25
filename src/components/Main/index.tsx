import * as S from "./styles";

const Main = ({
  title = "React Avançado",
  description = "Typescript, React.js, Next.js e Styled COmponents",
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo branco ocm o fundo rosa e um text: React Avançado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor em frente a um computador com códigos"
    />
  </S.Wrapper>
);

export default Main;
