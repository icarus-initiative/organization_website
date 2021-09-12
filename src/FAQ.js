import styled from 'styled-components';
import Wrapper from './Wrapper';
import lib from './lib';

const Section = styled.section`
  margin-bottom: 2rem;
`;
const H1 = styled.h1`
  font-size: 4.8rem;
`;
const H3 = styled.h3`
  border-bottom: 5px solid var(--purple);
`;
const Ul = styled.ul`
  margin-bottom: 3rem;
  line-height: 1.5;
`;
const Li = styled.li``;
const Div = styled.div`
  text-align: center;
  a:visited,
  a:link {
    outline: 0;
    border: none;
  }
`;
const Button = styled.button`
  padding: 1rem;
  color: var(--teal);
  border-color: var(--purple);
  background: transparent;
  border-width: 5px;
  border-radius: 5px;
  text-align: center;
  font-size: 1.8rem;
  &:hover {
    color: var(--white);
    background: var(--purple);
    border-color: var(--teal);
    cursor: pointer;
  }
`;
const Partition = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 0;
`;
const Part1L = styled.div`
  width: 19.98%;
  background-image: url('/left_wave.jpg');
  height: 1500px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: left bottom;
  position: relative;
  margin: 0;
  border-radius: 5px;

  @media (max-width: 539px) {
    background-image: none;
  }
`;
const CenterColumn = styled.div`
  width: 40%;
  margin: 0;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 539px) {
    width: 100%;
  }
`;
const EmptyColumn = styled.div`
  width: 19.98%;
  margin: 0;
`;
const Part2R = styled.div`
  width: 19.98%;
  background-image: url('/right_wave.jpg');
  height: 1500px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: left bottom;
  position: relative;
  margin: 0;
  border-radius: 5px;

  @media (max-width: 539px) {
    background-image: none;
  }
`;

export default function FAQ() {
  const { faq, Purplerize } = lib();
  return (
    <Wrapper>
      <Section id='faqs'>
        <Partition>
          <Part1L></Part1L>
          <CenterColumn>
            <H1>
              Frequently <Purplerize>Asked Questions</Purplerize>
            </H1>
            <H3>What is the Icarus Iniative?</H3>
            <Ul>
              <Li>
                A zero-cost, crowdsource community of Rust/Solana learners that
                iteratively improve the curriculum by building projects,
                evaluating resources, and voting on curriculum development.
              </Li>
              <Li>
                This initiative came about due to the myriad of resources that
                can often leave the uninitiated lost on their learning path.
              </Li>
            </Ul>

            <H3>What are the requirements to join the Icarus Iniative?</H3>
            <Ul>
              <Li>
                The developer must already have completed{' '}
                <a
                  href={faq.figment.url}
                  title={faq.figment.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  Figment's Solana Protocol
                </a>
                , have some programming experience like javascript or python,
                and be willing to pioneer.
              </Li>
              <Li>
                To get a better idea, glance at the minimum skills for the{' '}
                <a
                  href={faq.walletGuidelines.url}
                  title={faq.walletGuidelines.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  1st Expedition Wallet Guidelines
                </a>
                .
              </Li>
            </Ul>

            <H3>What's the cost of this initiative?</H3>
            <Ul>
              <Li>It's completely free and community-driven.</Li>
              <Li>
                This community empower members to take the lead to help foster a
                learning community.
              </Li>
              <Li>
                Each pilot contributes in their own way whether it's by voting,
                creating content, or sharing deliverables.
              </Li>
              <Li>
                When you listen, you learn. When you talk, I learn. When either
                teaches, we both learn.
              </Li>
            </Ul>

            <H3>What are the benefits of joining this initiative?</H3>
            <Ul>
              <Li>A passionate community to learn with.</Li>
              <Li>It filters out the folks who are just mere dabblers.</Li>
              <Li>
                Having an impactful voice to building the curriculum for future
                learners.
              </Li>
              <Li>Earning domain visibility in the industry.</Li>
              <Li>Making professional and personal connections.</Li>
              <Li>Creating tangible projects to showcase.</Li>
              <Li>Discourse to use as a forum and knowledge hub.</Li>
              <Li>Discord for community interaction.</Li>
              <Li>Github Organization for aggregating useful deliverables.</Li>
              <Li>Twitter to socially interact with the online community.</Li>
              <Li>
                Many other incentives, partnerships, and growth are planned.
              </Li>
            </Ul>

            <H3>What role can I play in this initiative?</H3>
            <Ul>
              <Li>
                <strong>Member</strong> - A member of the community who wishes
                to observe or is looking to join/create a squad.
              </Li>
              <Li>
                <strong>Pilot</strong> - Active learners who embark on learning
                expeditions by building recommended projects and evaluating
                different resources.
              </Li>
              <Li>
                Pilots are required to have completed Figment's Solana Pathway
                before starting the 1st expedition.
              </Li>
              <Li>
                <strong>Captain</strong> - Takes more of a leadership role in a
                squadron by merging PRs, organizing the groups, capturing squad
                members thoughts & concerns, communicating with admins to build
                out the curriculum further. Captains are obviously pilots also
                because they are leading their squad on the expedition.
              </Li>
              <Li>
                <strong>Admin</strong> - Set up systems and infrastructure for
                squads and the organization, optimize systems to demystify
                knowledge and increase accessibility, and helps construct the
                organization.
              </Li>
            </Ul>
          </CenterColumn>
          <EmptyColumn></EmptyColumn>
        </Partition>

        <Partition>
          <EmptyColumn></EmptyColumn>
          <CenterColumn>
            <H3>How to squadrons briefly work?</H3>
            <Ul>
              <Li>
                A squad consisting of 4-6 members embark on expeditions to level
                up together. A squadron aims to build a recommended project and
                evaluating at least one course, video series, or code sets on an
                expedition.
              </Li>
              <Li>
                There's many variables left up to the squad to decide if
                something more fitting including other projects, expedition
                length, additional resources, and any other innovative ideas.
              </Li>
              <Li>
                At least one of the members will be the captain, who will
                delegate and serve as a representive for the squadron. It's
                recommended that there's 2 captains to make the squad flow
                without major hitches. They would help with merging PRs,
                gathering the group, and communicating with organization admins.
              </Li>
              <Li>
                While there's the personal learning aspect, the social aspect
                will promote cohesion and camaraderie. We use various platforms
                that will are listed in the benefits section. You can also tweet
                and hashtag{' '}
                <a
                  href={faq.twitter.url}
                  title={faq.twitter.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  #icarussquadron
                </a>
                .
              </Li>
            </Ul>

            <H3>How do I sign up for this initiative?</H3>
            <Ul>
              <Li>
                The initiative is being piloted right now to test drive the
                concept.
              </Li>
              <Li>
                Once the concept is more established and battle-tested, the
                initiative will start to rolling out in Q4 2021.
              </Li>
              <Li>
                As planned, you can join as a pilot or captain. Eventually
                captains can advance to admin.
              </Li>
            </Ul>

            <H3>What are some of the methods of the organization?</H3>
            <Ul>
              <Li>
                Crowdsourcing can be a powerful tool to help build the
                community.
              </Li>
              <Li>
                The initiative aims to harness and transmute into a platform for
                new learners.
              </Li>
              <Li>
                The aim is not to make a set curriculum but rather recommended
                projects and resources. The squadrons can adapt to new resources
                as desired.
              </Li>
              <Li>
                A lot of the power is distributed to each squadron to as how
                they want to guide their own learning. The squadron comes
                together and validates ideas to contribute back to the
                initiative. Think of the Socratic method meet blockchain
                concepts.
              </Li>
              <Li>
                Members, pilots, and captains are encouraged to take charge of
                their own learning, disseminate knowledge and experiences for
                future learners, and blazing a trail where there were none.
              </Li>
              <Li>
                These contributions can take various forms such as creating
                deliverables for consumption, helping to answer technical
                questions, or leading events.
              </Li>
            </Ul>
            <H3>
              Who do I contact about this initiative, comments, and proposals?
            </H3>
            <Ul>
              <Li>
                Reach out to an admin on the{' '}
                <a
                  href={faq.discord.url}
                  title={faq.discord.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  Icarus Discord Channel
                </a>
                .
              </Li>
            </Ul>
            <H3>When will Solana go to $500 dollars?</H3>
            <Ul>
              <Li>In short, when it wants to.😉</Li>
              <Li>
                In the meantime, why not take a bet on yourself and your dev
                skills?
              </Li>
              <Li>
                There's a phrase flying around: <em>"Build and Hodl"</em>.
              </Li>
            </Ul>

            <Div>
              {' '}
              <a
                href={faq.repo.url}
                title={faq.repo.title}
                rel='noopener noreferrer nofollow'
                target='_blank'
              >
                <Button>More Deetz</Button>
              </a>
            </Div>
          </CenterColumn>
          <Part2R></Part2R>
        </Partition>
      </Section>
    </Wrapper>
  );
}
