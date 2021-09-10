import styled from 'styled-components';
import Wrapper from './Wrapper';
import globals from './data.js';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
const Flag = styled.aside`
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center center;
  width: 512px;
  height: 512px;
  margin: 2rem auto;
`;
const Recruit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const P = styled.p`
  font-size: 5.4rem;
`;
const Purplerize = styled.span`
  color: var(--purple);
`;
const Button = styled.button`
  padding: 1rem;
  color: var(--teal);
  border-color: var(--purple);
  background: transparent;
  border-width: 5px;
  border-radius: 5px;
  text-align: center;
  font-size: 2.9rem;
  &:hover {
    color: var(--white);
    background: var(--purple);
    border-color: var(--teal);
    cursor: pointer;
  }
`;
const A = styled.a`
  &:link,
  &:active,
  &:visited {
    border: none;
  }
`;

export default function Enlist() {
  const { enlist } = globals();
  return (
    <Wrapper>
      <Section id='enlist'>
        <Flag icon={enlist.flag.icon} />
        <Recruit>
          <P>
            Ready to take <Purplerize>to the skies?</Purplerize>
          </P>
          <A
            href='https://discord.gg/9yYsQVYR3K'
            alt='Icarus Initiative Discord'
            target='_blank'
          >
            <Button>Enlist</Button>
          </A>
        </Recruit>
        <Flag icon={enlist.flag.icon} />
      </Section>
    </Wrapper>
  );
}
