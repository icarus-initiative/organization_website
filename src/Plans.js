import styled from 'styled-components';
import Wrapper from './Wrapper';
import lib from './lib';
import Image from 'next/image';

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  @media (max-width: 414px) {
    width: 94%;
  }
`;
const H1 = styled.h1`
  font-size: 4.8rem;
`;
const A = styled.a`
  display: block;
  &:link,
  &:active,
  &:visited {
    text-decoration: underline;
    border: none;
  }
`;

export default function Plans() {
  const { plans, Purplerize } = lib();
  return (
    <Wrapper>
      <Section id='plans'>
        <H1>
          Have a <Purplerize>Battle Plan</Purplerize>
        </H1>
        <Image
          src={plans.battle.image}
          alt='Learn Solana Rust Battle Plan'
          width={1000}
          height={727}
        />
        <A href={plans.battle.href} alt={plans.battle.alt} target='_blank'>
          Download PDF
        </A>
      </Section>
    </Wrapper>
  );
}
