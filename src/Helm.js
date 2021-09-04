import styled from 'styled-components';
import Wrapper from './Wrapper';
import globals from './data.js';

const Section = styled.section``;
const H1 = styled.h1`
  font-size: 4.8rem;
  color: var(--purple);
`;
const Cards = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex: 2 1 1;
  width: 33%;
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
const P = styled.p`
  padding: 1rem;
  color: var(--teal);
  padding: 1rem;
  margin: 2rem auto;
  width: 256px;
  border-radius: 5px;
  box-shadow: 1px 1px var(--teal);
  border: 1px solid var(--purple);
  text-align: center;
`;
const A = styled.a``;

export default function Helm() {
  const { helm } = globals();

  return (
    <Wrapper>
      <Section>
        <H1>Helm</H1>
        <Cards>
          <Card>
            <A
              href={helm.discord.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.discord.icon} />
            </A>
            <P>{helm.discord.name}</P>
          </Card>

          <Card>
            <A
              href={helm.discourse.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.discourse.icon} />
            </A>
            <P>{helm.discourse.name}</P>
          </Card>

          <Card>
            <A
              href={helm.icarus.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.icarus.icon} />
            </A>
            <P>{helm.icarus.name}</P>
          </Card>

          <Card>
            <A
              href={helm.expeditions.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.expeditions.icon} />
            </A>
            <P>{helm.expeditions.name}</P>
          </Card>

          <Card>
            <A
              href={helm.squadrons.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.squadrons.icon} />
            </A>
            <P>{helm.squadrons.name}</P>
          </Card>

          <Card>
            <A
              href={helm.resources.link}
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <Icon icon={helm.resources.icon} />
            </A>
            <P>{helm.resources.name}</P>
          </Card>
        </Cards>
      </Section>
    </Wrapper>
  );
}
