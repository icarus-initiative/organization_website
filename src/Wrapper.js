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
    width: 100%;
    height: 100%;
    min-height: 100%;
    --grayL: #35363a;
    --grayM: #2c2d30;
    --grayMD: #26262b;
    --grayD: #1a1a1d;
    --white: #ffffff;
    --purple:#8a27f3;
    --teal: #02a9f8;
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
    background: var(--grayMD);
    color: var(--pageFontColor);
    font-family: var(--nunitoR);
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    font-size: 1.8rem;
  }
  h1 { 
    font-size: 2.8rem; 
  }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 2rem; }
  a:link, a:active, a:visited  {
    color: white;
    text-decoration: none;
    border-bottom: 3px dashed var(--purple);
  }
`;
const Wrapper = styled.main`
  text-align: center;
  margin: 15rem auto;
`;

export default function Page({ data, children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      {children}
    </Wrapper>
  );
}
