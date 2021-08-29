import styled from 'styled-components';
import Wrapper from './Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import globals from './data';
import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaTwitterSquare,
} from 'react-icons/fa';

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;
const Logo = styled.section`
  display: flex;
  width: 10%;
`;
const SocialsSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;
const NavSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 35%;
  font-size: 2rem;
  font-family: var(--nunitoB);
  span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Github = styled(FaGithub)`
  color: #ffffff;
`;
const Discord = styled(FaDiscord)`
  color: #6e85d3;
`;
const Youtube = styled(FaYoutube)`
  color: #f70000;
`;
const Twitter = styled(FaTwitterSquare)`
  color: #0077b5;
`;
const A = styled.a`
  &:hover {
    transform: scale(1.2);
  }
`;

export default function Navigation() {
  return (
    <Wrapper>
      <Main>
        <Logo>
          <Image
            src='/purple_feather_256_min.png'
            alt='Icarus Initiative Logo'
            width={100}
            height={100}
          />
        </Logo>
        <Socials />
        <Nav />
      </Main>
    </Wrapper>
  );
}

function Socials() {
  const { socials } = globals();
  return (
    <SocialsSection>
      <A href={socials.github.url} target='_blank'>
        <Github size={30} title={socials.github.alt} />
      </A>
      <A href={socials.discord.url} target='_blank'>
        <Discord size={30} title={socials.discord.alt} />
      </A>
      <A href={socials.youtube.url} target='_blank'>
        <Youtube size={30} title={socials.youtube.alt} />
      </A>
      <A href={socials.twitter.url} target='_blank'>
        <Twitter size={30} title={socials.twitter.alt} />
      </A>
    </SocialsSection>
  );
}

function Nav() {
  return (
    <NavSection>
      <Link href='/'>
        <span>&nbsp;About</span>
      </Link>
      <Link href='/learn'>
        <span>&nbsp;Squadrons</span>
      </Link>
      <Link href='/deals'>
        <span>&nbsp;Projects</span>
      </Link>
      <Link href='/about'>
        <span>&nbsp;FAQs</span>
      </Link>
    </NavSection>
  );
}
