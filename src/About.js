import styled from 'styled-components';
import Wrapper from './Wrapper';
import lib from './lib';

const Section = styled.section`
  width: 94%;
  margin: 0 auto;
`;
const H1 = styled.h1`
  font-size: 4.8rem;
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  background: var(--grayL);
  max-width: 606px;
  height: 450px;
  margin: 1rem;
  padding: 1rem;
  flex: 1 1 397px;
  border-radius: 2%;
  vertical-align: middle;
  align-self: center;
  border-radius: 2%;
  box-shadow: 1px 1px var(--teal);
  border: 1px solid var(--purple);
  @media (max-width: 1398px) {
    height: 470px;
  }
  @media (max-width: 1330px) {
    height: 400px;
  }
`;
const CardIcon = styled.aside`
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center center;
  width: 128px;
  height: 128px;
  margin: 2rem auto;
`;
const CardTitle = styled.h3`
  font-size: 2.4rem;
  color: var(--purple);
`;
const CardDescription = styled.ul`
  margin: 0 auto;
  width: 94%;
  text-align: left;
`;

export default function About() {
  const { about, Purplerize } = lib();
  return (
    <Wrapper>
      <Section id='about'>
        <H1>
          Level up with the squad and
          <br />
          <Purplerize>vote on curriculum development</Purplerize>
        </H1>
        <Cards>
          <Card>
            <CardIcon icon={about.squadrons.icon} />
            <CardTitle>Squadrons</CardTitle>
            <CardDescription>
              <li>
                A squadron of 4-6 pilots embarks on different expeditions
                consisting of a project and evaluating resources.
              </li>
              <li>
                Join up as a pilot or as a captain to lead your squad to new
                heights.
              </li>
              <li>Create tangible projects to showcase.</li>
              <li>Earn domain visibility and professionally connect.</li>
            </CardDescription>
          </Card>
          <Card>
            <CardIcon icon={about.expeditions.icon} />
            <CardTitle>Expeditions</CardTitle>
            <CardDescription>
              <li>
                Build a basic wallet, smart contracts, NFT platform, and RPG
                game. Where will your squad decide to go?
              </li>
              <li>Use vetted resources verified by pilots in front.</li>
              <li>Learn to work with Solana SDK and APIs.</li>
              <li>
                Vote in resources on a limited slots to validate content
                richness.
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardIcon icon={about.platforms.icon} />
            <CardTitle>Platforms</CardTitle>
            <CardDescription>
              <li>Use moderated platforms to collaborate and learn.</li>
              <li>Build with a passionate community and help new pilots.</li>
              <li>
                Use Github, Discord, Discourse to capture crowd knowledge.
              </li>
              <li>
                Build excitement around future partnerships and incentives as we
                grow.
              </li>
            </CardDescription>
          </Card>
        </Cards>
      </Section>
    </Wrapper>
  );
}
