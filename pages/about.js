import styled from "@emotion/styled";

const AboutPage = () => {
  return (
    <Main>
      <h2>Hey there, it's aremuade </h2>
      <Section>
        <p>
        I'm a Data Scientist and AI Engineer with expertise in Python, SQL, MongoDB, and Power BI. 
        My portfolio also extends to web development using JavaScript, HTML5 and CSS. 
        Known for my ability to translate complex technical data into understandable insights, 
        I specialise in leveraging data to solve real-world problems and boost organisational success.
        </p>
        <p>My core skills include Data Modelling, Statistical Analysis, Machine Learning, and Data Visualisation via Power BI. 
          These are reinforced by my soft skills—exceptional communication, analytical thinking, and meticulous attention to detail.</p>

        <p>I'm certified in a range of areas including "Data Analyst with Python" and "Data Analyst with SQL" from DataCamp, 
          "Responsive Web Design" from FreeCodeCamp, "JavaScript Essential Training" and "AI Foundations: Machine Learning" from LinkedIn.</p>
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
