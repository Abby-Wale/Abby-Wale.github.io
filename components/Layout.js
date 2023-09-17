import Link from "next/link";
import Navbar from "./Navigation";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import styled from "@emotion/styled";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <header>
        <h1>
          <span>Data Scientist & AI Engineer</span>
          <span>Bridging Data to Actionable Insights</span>
        </h1>
      </header>

      <div className="page-content">
        {children}
      </div>

      <Footer>
       
          <SocialIcon href="https://github.com/Abby-Wale" target="_blank" rel="noopener noreferrer">
            <FaGithub color="#fff" />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/bornriches" target="_blank" rel="noopener noreferrer">
            <FaTwitter color="#fff" />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/waleabiola/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn color="#fff" />
          </SocialIcon>
          <SocialIcon href="https://wa.me/447405263938" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp color="#fff" />
          </SocialIcon>
    
      </Footer>

      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        header {
          text-align: center;
          margin: 60px 0;
        }
        .page-content {
          flex-grow: 1;
          padding: 20px;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .page-content {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  a {
    text-decoration: none;
    font-size: 25px;
    margin: 0 15px;
  }
  @media (max-width: 768px) {
    a {
      font-size: 20px;
      margin: 0 10px;
    }
  }
`;

export const Footer1 = styled(Footer)``;

export const SocialIcon = styled.a`
  text-decoration: none;
  font-size: 25px;
  margin: 0 15px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0 10px;
  }
`;
