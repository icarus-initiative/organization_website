import styled from 'styled-components';
import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaTwitterSquare,
} from 'react-icons/fa';
import lib from './lib';

const SocialsSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  a:visited,
  a:link {
    outline: 0;
    border: none;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 414px) {
    width: 80%;
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

export default function Socials() {
  const { socials } = lib();
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
