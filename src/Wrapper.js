import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'NunitoSans-Light';
    src: url('/fonts/NunitoSans/NunitoSans-Light.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'NunitoSans-Regular';
    src: url('/fonts/NunitoSans/NunitoSans-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'NunitoSans-Bold';
    src: url('/fonts/NunitoSans/NunitoSans-Bold.ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  html {
    --grey: #26262b;
    --gray: var(--grey);
    --white: #ffffff;
    --pageFontColor: var(--white);
    box-sizing: border-box;
    font-size: 62.5%;
    --nunitoL: "NunitoSans-Light", sans-serif;
    --nunitoR: "NunitoSans-Regular", sans-serif;
    --nunitoB: "NunitoSans-Bold", sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: var(--grey);
    color: var(--pageFontColor);
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height:2;
  }
  h1 { font-size: 2.8rem; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 2rem; }
`;
const Wrapper = styled.main`
  text-align: center;
`;

export default function Page({ data, children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      {children}
    </Wrapper>
  );
}
