import Link from "next/link";
import Navbar from "./Navigation";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "@emotion/styled";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>User Experience</span>
              <span>Design</span>
            </h1>
            {/* <h3>enjoy it</h3> */}
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <Footer>
        <a
          href="https://github.com/princehaybee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#fff" />
        </a>
        <a
          href="https://twitter.com/bornriches"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter color="#fff" />
        </a>
        <a
          href="https://www.linkedin.com/in/waleabiola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn color="#fff" />
        </a>
      </Footer>
    </div>
  );
}

export const Footer = styled.div`
  display: block;
  text-align: center;
  padding: 20px 0;

  left: 0;
  bottom: 0;
  a {
    text-decoration: none;
    font-size: 25px;
    margin: 0 15px;
  }
`;
