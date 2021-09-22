import styled from "@emotion/styled";

const AboutPage = () => {
  return (
    <Main>
      <h2>Hey there, I’m Abiola Adewale! </h2>
      <Section>
        <p>
          I graduated from Göethe Universität, Frankfurt with a master’s degree
          in Linguistics. I have always been passionate about how things work.
          My curiosity on how the web and apps work led me into learning
          programming. My love for creativity inspired me to delve into UX
          Designs. Over the years, I have acquired some certifications in
          Responsive Web Design and UX Design whilst working on some personal
          projects, I have collaborated with some people of like minds to build
          some projects. I am comfortable working with the listed technologies:
          <ul>
            <li>👉 HTML5</li>
            <li>👉 CSS</li>
            <li>👉 Javascript</li>
            <li>👉 React with Next.js</li>
            <li>👉 Styled Components</li>
            <li>👉 Tailwind CSS</li>
            <li>👉 Figma</li>
            <li>👉 Adobe XD</li>
          </ul>
          Other than spending time on computer, I also enjoy playing console
          games like FIFA and some adventures. I am a scrabble expert. When I
          don't go for a walk in the evening, I ride my bike or spend time time
          chilling with friends.
        </p>
      </Section>
    </Main>
  );
};

export default AboutPage;

export const Main = styled.div`
  background-color: #064734;
  color: #fff;

  @media screen and (min-width: 800px) {
  }
`;
export const Section = styled.div`
  ul {
    list-style-type: none;
  }
  @media screen and (min-width: 800px) {
  }
`;
