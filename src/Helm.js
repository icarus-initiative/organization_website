import styled from 'styled-components';
import Wrapper from './Wrapper';
import lib from './lib';

const Section = styled.section``;
const H1 = styled.h1`
  font-size: 4.8rem;
`;
const Cards = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
const Card = styled.div`
  flex: 1 1 32%;
  min-width: 220px;
  width: 32%;
  margin: 2rem auto;
  @media (max-width: 280px) {
    min-width: 100%;
  }
`;
const Icon = styled.aside`
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center center;
  width: 128px;
  height: 128px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Title = styled.p`
  color: var(--teal);
  padding: 1rem;
  margin: 2rem auto;
  width: 80%;
  text-align: center;
  min-width: 180px;
  max-width: 180px;
  box-shadow: 1px 1px var(--teal);
  border-radius: 5px;
  border: 1px solid var(--purple);
  @media (max-width: 280px) {
    min-width: 120px;
    max-width: 120px;
  }
`;
const A = styled.a``;

export default function Helm() {
  const { helm, Purplerize } = lib();
  return (
    <Wrapper>
      <Section id='helm'>
        <H1>
          The <Purplerize>Helm</Purplerize>
        </H1>
        <Cards>
          <Card>
            <Title>{helm.discord.name}</Title>
            <A
              href={helm.discord.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.discord.icon} />
            </A>
            <p>{helm.discord.short}</p>
          </Card>

          {/* <Card>
            <Title>{helm.discourse.name}</Title>
            <A
              href={helm.discourse.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.discourse.icon} />
            </A>
            <p>{helm.discourse.short}</p>
          </Card> */}

          <Card>
            <Title>{helm.icarus.name}</Title>
            <A
              href={helm.icarus.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.icarus.icon} />
            </A>
            <p>{helm.icarus.short}</p>
          </Card>

          <Card>
            <Title>{helm.expeditions.name}</Title>
            <A
              href={helm.expeditions.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.expeditions.icon} />
            </A>
            <p>{helm.expeditions.short}</p>
          </Card>

          <Card>
            <Title>{helm.squadrons.name}</Title>
            <A
              href={helm.squadrons.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.squadrons.icon} />
            </A>
            <p>{helm.squadrons.short}</p>
          </Card>

          <Card>
            <Title>{helm.resources.name}</Title>
            <A
              href={helm.resources.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.resources.icon} />
            </A>
            <p>{helm.resources.short}</p>
          </Card>
        </Cards>
      </Section>
    </Wrapper>
  );
}
