import styled from 'styled-components';
import Wrapper from './Wrapper';
import Image from 'next/image';

const Hero = styled.section`
  position: relative;
  text-align: center;
  color: white;
  font-family: var(--nunitoB);
`;
const Image1 = styled(Image)`
  object-fit: contain;
  object-fit: cover;
  opacity: 0.8;
`;
const Title = styled.p`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 9.6rem;
`;
const Subtitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.2rem;
`;

export default function Banner() {
  return (
    <Wrapper>
      <Hero>
        <Image1
          src='/banner.jpg'
          alt='Icarus Initiative Hero'
          width={3360}
          height={1080}
          quality={100}
        />
        <Title>Icarus Initiative</Title>
        <Subtitle>The Crowdsourced Solana/Rust Learning Initiative</Subtitle>
      </Hero>
    </Wrapper>
  );
}
