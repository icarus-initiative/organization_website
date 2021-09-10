import styled from 'styled-components';
import Wrapper from './Wrapper';
import globals from './data.js';

const Section = styled.section`
  width: 80%;
  margin: 0 auto;
`;
const Hook = styled.div`
  font-size: 4.8rem;
`;
const H1 = styled.h1`
  font-size: 4.8rem;
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;
const Card = styled.div`
  background: var(--grayL);
  width: 450px;
  height: 450px;
  border-radius: 2%;
  text-align: center;
  vertical-align: middle;
  align-self: center;
  border-radius: 2%;
  box-shadow: 1px 1px var(--teal);
  border: 1px solid var(--purple);
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
  width: 90%;
  text-align: left;
`;
const Purplerize = styled.span`
  color: var(--purple);
`;

export default function About() {
  const { about } = globals();
  return (
    <Wrapper>
      <Section id='about'>
        <Hook>
          <H1>
            Level up with the squad and
            <br />
            <Purplerize>vote on curriculum development</Purplerize>
          </H1>
        </Hook>
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
                Join up as a pilot or as a captain and lead your squad to new
                heights.
              </li>
              <li>Create tangible projects to showcase.</li>
              <li>
                Earn domain visibility and connect with others professionally.
              </li>
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
              <li>
                Use verified resources that have been vetted by pilots flying
                ahead.
              </li>
              <li>Learn to work with Solana SDK and APIs.</li>
              <li>
                Vote in resources on a limited list to validate content
                richness.
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardIcon icon={about.platforms.icon} />
            <CardTitle>Platforms</CardTitle>
            <CardDescription>
              <li>Use moderated platforms to collaborate and learn.</li>
              <li>Build with a passionate community or help new pilots.</li>
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
