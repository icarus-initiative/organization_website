import styled from 'styled-components';
import Socials from './Socials';
import Credits from './Credits';
import Image from 'next/image';
import lib from './lib';

const Section = styled.section`
  background: var(--grayD);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 -8px 6px -6px black;
`;
const Left = styled.div`
  width: 60%;
  min-width: 935px;
  section {
    margin: 4rem auto;
  }
`;
const Right = styled.div`
  width: 40%;
`;
const P1 = styled.p`
  font-size: 2.4rem;
`;
const P2 = styled.p`
  width: 80%;
  text-align: center;
  margin: 0 auto;
`;

export default function Footer() {
  const { footer } = lib();
  return (
    <Section>
      <Left>
        <Socials />
        <P2>
          <Image
            src={footer.logo.icon}
            alt={footer.logo.name}
            width={25}
            height={25}
          />{' '}
          The Icarus Initiative is not affiliated with Solana, SOLHACK, or any
          other entity.
          <br />
          This is a community-driven learning initiative to promote group study
          and creating a better learning experience for newcomers.
        </P2>
      </Left>
      <Right>
        <P1>Made with 🍵, 🌮, 🌞</P1>
        <P2>Icarus Initiative © {new Date().getFullYear()}</P2>
        <Credits />
      </Right>
    </Section>
  );
}
