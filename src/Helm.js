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
`;
const Card = styled.div`
  flex: 1 1 32%;
  min-width: 220px;
  width: 32%;
  margin: 2rem auto;
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
  padding: 1rem;
  color: var(--teal);
  padding: 1rem;
  margin: 2rem auto;
  width: 80%;
  min-width: 180px;
  max-width: 180px;
  border-radius: 5px;
  box-shadow: 1px 1px var(--teal);
  border: 1px solid var(--purple);
  text-align: center;
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
            <A
              href={helm.discord.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.discord.icon} />
            </A>
            <Title>{helm.discord.name}</Title>
          </Card>

          <Card>
            <A
              href={helm.discourse.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.discourse.icon} />
            </A>
            <Title>{helm.discourse.name}</Title>
          </Card>

          <Card>
            <A
              href={helm.icarus.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.icarus.icon} />
            </A>
            <Title>{helm.icarus.name}</Title>
          </Card>

          <Card>
            <A
              href={helm.expeditions.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.expeditions.icon} />
            </A>
            <Title>{helm.expeditions.name}</Title>
          </Card>

          <Card>
            <A
              href={helm.squadrons.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.squadrons.icon} />
            </A>
            <Title>{helm.squadrons.name}</Title>
          </Card>

          <Card>
            <A
              href={helm.resources.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.resources.icon} />
            </A>
            <Title>{helm.resources.name}</Title>
          </Card>
        </Cards>
      </Section>
    </Wrapper>
  );
}
