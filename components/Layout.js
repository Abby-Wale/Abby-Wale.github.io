import Link from "next/link";
import Navbar from "./Navigation";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import styled from "@emotion/styled";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <header>
        <Link href="/" passHref>
          <a>
            <h1>
              <span>Data Scientist and AI Engineer</span>
            </h1>
          </a>
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>

      <Footer>
        <Footer1>
          <SocialIcon href="https://github.com/Abby-Wale" target="_blank" rel="noopener noreferrer">
            <FaGithub color="#fff" />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/bornriches" target="_blank" rel="noopener noreferrer">
            <FaTwitter color="#fff" />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/waleabiola/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn color="#fff" />
          </SocialIcon>
        </Footer1>
        <Footer2>
          whatsapp contact:
          <SocialIcon href="https://wa.me/4915217431500" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp color="#fff" />
          </SocialIcon>
        </Footer2>
      </Footer>
    </div>
  );
}

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 0;
  a {
    text-decoration: none;
    font-size: 25px;
    margin: 0 15px;
  }
`;

export const Footer1 = styled.div`
  text-align: center;
  padding: 20px 0;
  a {
    text-decoration: none;
    font-size: 25px;
    margin: 0 15px;
  }
`;

export const Footer2 = styled.div`
  text-align: center;
  padding: 10px 0;
  color: #fff;
  a {
    text-decoration: none;
    font-size: 25px;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  font-size: 25px;
  margin: 0 15px;
`;
