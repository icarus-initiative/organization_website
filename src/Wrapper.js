import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --grey: #26262b;
    --gray: var(--grey);
    --white: #ffffff;
    --pageFontColor: var(--white);
    box-sizing: border-box;
    font-size: 62.5%;
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
