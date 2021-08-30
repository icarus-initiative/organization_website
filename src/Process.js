import styled from 'styled-components';
import Wrapper from './Wrapper';
// import Image from 'next/image';

const Section = styled.section`
  margin: 8rem auto;
  width: 80%;
  text-align: left;
  line-height: 2;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-image: url('/purple_feather_rev_min.png');
  background-position: center center;
`;
const H1 = styled.h1`
  font-size: 4.8rem;
  color: var(--purple);
`;
const Colorize = styled.span`
  color: var(--purple);
`;
const Ul = styled.ul`
  margin-bottom: 3rem;
`;
const Li = styled.li`
  font-size: 2.4rem;
`;
const P = styled.p``;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  background: var(--grayL);
  width: 47%;
  height: auto;
  margin: 0 2rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
  padding-bottom: 2rem;
  border-radius: 2%;
  box-shadow: 1px 1px var(--teal);
  border: 1px solid var(--purple);
`;
const CardTitle = styled.h3`
  font-size: 2.4rem;
  color: var(--teal);
`;
const CardDescription = styled.ul`
  margin: 0 auto;
`;

export default function Process() {
  return (
    <Wrapper>
      <Section>
        <H1>The Process</H1>
        <Ul>
          <Li>
            Icarus seeks pilots who are <Colorize>passionate</Colorize>,{' '}
            <Colorize>builders</Colorize> and <Colorize>contributors</Colorize>{' '}
            back to the community.
          </Li>
          <Li>
            If you're expecting a bootcamp and a golden ticket, this is{' '}
            <em>not</em> it.
          </Li>
        </Ul>
        <Cards>
          <Card>
            <CardTitle>1. Join the Icarus Initiative Discord</CardTitle>
            <CardDescription>
              <li>
                Get connected into the community as a member to interact with
                members.
              </li>
              <li>
                Visit{' '}
                <a
                  href='https://discord.gg/9yYsQVYR3K'
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  Icarus Discord
                </a>{' '}
                and send an @ to an admin at the entrance.
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>2. Complete the Figment Solana Protocol</CardTitle>
            <CardDescription>
              <li>
                Finish the figment course to learn the basics before you start
                expeditions.
              </li>
              <li>
                This also sets you up with a DataHub account and get familiar
                with the blockchain functions and methods.
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>3. Find Or Make A Squad</CardTitle>
            <CardDescription>
              <li>
                If enlisting as a captain, notify an admin to help you create a
                github team page, a github repo, and a squad discord channel.
              </li>
              <li>
                If enlisting as a pilot, scroll through{' '}
                <a
                  href='https://github.com/orgs/icarus-initiative/teams'
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  teams page
                </a>{' '}
                to find a squadron with less than 6 pilots and not in-flight
                (under team description).
              </li>
              <li>
                Introduce yourself and the captain (aka Maintainer) will handle
                the recruitment.
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>4. Meet Squad And Chart Path</CardTitle>
            <CardDescription>
              <li>
                Captains will schedule a squad briefing in the discord to chart
                the expedition.
              </li>
              <li>
                The squad votes on takeoff date, duration, landing dates,
                pitstops, resources to evaluate and other details.
              </li>
              <li>
                The captains also collect pilot information for the roster,
                submit a PR for all the dates, pilots, and other details for the
                green light.
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>5. Start Expedition And Take Pitstops</CardTitle>
            <CardDescription>
              <li>
                Expeditions have pitstops, where pilots reconvene on discord to
                discuss project and resource details.
              </li>
              <li>
                Pilots also encouraged to twitter hashtag their squadmates and
                icarusinitiative (once available).
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>6. Landing And Debriefing</CardTitle>
            <CardDescription>
              <li>
                Squadrons lands at the end of the expedition and presents their
                flight.
              </li>
              <li>Captains to set up a meeting with a more senior squadron.</li>
              <li>
                Senior squadrons gives feedback and notify admins via a PR to
                report the "Actual Landing Date".
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>7. Vote, Rest, Redeploy</CardTitle>
            <CardDescription>
              <li>
                Captains collects majority votes to vote resources into the
                expdition's open positions.
              </li>
              <li>
                Squadrons, captains, or pilots can create content for
                contribution.
              </li>
              <li>
                The squadron can take leave or get started on a new expedition!
              </li>
            </CardDescription>
          </Card>
        </Cards>
      </Section>
    </Wrapper>
  );
}
