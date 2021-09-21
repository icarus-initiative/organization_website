import styled from 'styled-components';
import lib from './lib';

const { hero, Tealrize } = lib();
const Section = styled.section`
  height: 500px;
  padding-left: 2rem;
  text-align: left;
  line-height: 2;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${hero.banner.photo});
`;
const Title = styled.p`
  font-family: var(--nunitoB);
  font-size: 6.4rem;
  margin: 0;
  @media (max-width: 414px) {
    font-size: 4.8rem;
  }
`;
const Subtitle = styled.p`
  font-size: 3.2rem;
  margin: 0;
  @media (max-width: 414px) {
    font-size: 2.4rem;
  }
`;
const Subtitle2 = styled.p`
  font-size: 2.4rem;
  margin: 0;
  @media (max-width: 414px) {
    font-size: 1.6rem;
  }
`;

export default function Banner() {
  return (
    <Section>
      <Title>
        Icar<Tealrize>us</Tealrize> Initiative
      </Title>
      <Subtitle>The Crowdsourced Solana/Rust Learning Initiative</Subtitle>
      <Subtitle2>
        #icar<Tealrize>us</Tealrize>squadron #devstogetherstrong
      </Subtitle2>
    </Section>
  );
}
