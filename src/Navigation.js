import styled from 'styled-components';
import Socials from './Socials';
import Image from 'next/image';
import Link from 'next/link';
import lib from './lib';

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  -webkit-box-shadow: 0 10px 6px -6px black;
  -moz-box-shadow: 0 10px 6px -6px black;
  box-shadow: 0 10px 6px -6px black;
  background: var(--grayD);
  @media (max-width: 850px) {
    flex-direction: column;
    * {
      margin: 0.5rem 0;
    }
  }
`;
const Logo = styled.section`
  width: 10%;
  max-width: 10%;
  padding-left: 2rem;
  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    justify-content: center;
    min-width: 70%;
    max-width: 70%;
  }
  @media (max-width: 414px) {
    min-width: 100%;
    max-width: 100%;
  }
`;
const NavSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  font-family: var(--nunitoB);
  @media (max-width: 414px) {
    font-size: 1.6rem;
  }
  @media (max-width: 280px) {
    font-size: 0.8rem;
  }
`;
const Link1 = styled(Link)``;
const Span = styled.span`
  border: 5px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 1rem;
  @media (max-width: 414px) {
    border-bottom: 5px solid var(--purple);
    margin: 0;
  }
  &:hover {
    cursor: pointer;
    color: var(--teal);
    border: 5px outset var(--purple);
  }
`;

export default function Navigation() {
  const { navigation } = lib();
  return (
    <Section>
      <Logo>
        <Image
          src={navigation.logo.icon}
          alt={navigation.logo.name}
          width={100}
          height={100}
        />
      </Logo>
      <Socials />
      <Nav />
    </Section>
  );
}

function Nav() {
  return (
    <NavSection>
      <Link1 href='#about'>
        <Span>&nbsp;About</Span>
      </Link1>
      <Link1 href='#helm'>
        <Span>&nbsp;Helm</Span>
      </Link1>
      <Link1 href='#process'>
        <Span>&nbsp;Process</Span>
      </Link1>
      <Link1 href='#enlist'>
        <Span>&nbsp;Enlist</Span>
      </Link1>
      <Link1 href='#faqs'>
        <Span>&nbsp;FAQs</Span>
      </Link1>
    </NavSection>
  );
}
