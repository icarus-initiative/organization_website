import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  height: 500px;
  padding-left: 2rem;
  text-align: left;
  line-height: 2;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('/banner.webp');
`;
const Title = styled.p`
  font-family: var(--nunitoB);
  font-size: 6.4rem;
  margin: 0;
`;
const Subtitle = styled.p`
  font-size: 3.2rem;
  margin: 0;
`;
const Subtitle2 = styled.p`
  font-size: 2.4rem;
  margin: 0;
`;
const Purplerize = styled.span`
  color: var(--purple);
`;

export default function Banner() {
  return (
    <Section>
      <Title>
        Icar<Purplerize>us</Purplerize> Initiative
      </Title>
      <Subtitle>The Crowdsourced Solana/Rust Learning Initiative</Subtitle>
      <Subtitle2>
        #icar<Purplerize>us</Purplerize>squadron #devstogetherstrong
      </Subtitle2>
    </Section>
  );
}
