import { FaBars, FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [showmenu, updateShowmenu] = useState(false);

  return (
    <Header>
      <LeftNav>
        <Link href="/about" passHref>
          <StyledDiv onClick={() => updateShowmenu(!showmenu)}>
            <span>About</span>
          </StyledDiv>
        </Link>
        <button onClick={() => updateShowmenu(!showmenu)}>
          {showmenu ? <FaTimes /> : <FaBars />}
        </button>
      </LeftNav>
      <RightNav showmenu={showmenu}>
        <Link href="/" passHref>
          <StyledDiv onClick={() => updateShowmenu(!showmenu)}>
            <span>Projects</span>
          </StyledDiv>
        </Link>
        <a href="/Abiola Adewale Resume.pdf" target="_blank" rel="noopener noreferrer">
          <StyledDiv onClick={() => updateShowmenu(!showmenu)}>Resume</StyledDiv>
        </a>
      </RightNav>
    </Header>
  );
}

export default Navbar;

const Header = styled.div`
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  color: #064734;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const LeftNav = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background: transparent;
    border: none;
  }
  @media (min-width: 800px) {
    justify-content: flex-end;
    button {
      display: none;
    }
  }
`;

const RightNav = styled.div`
  display: ${props => (props.showmenu ? 'flex' : 'none')};
  flex-direction: column;
  overflow: hidden;
  list-style-type: none;
  a {
    text-decoration: none;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    height: auto;
  }
`;

const StyledDiv = styled.div`
  font-size: 20px;
  letter-spacing: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  text-decoration: none;
  cursor: pointer;
  color: #064734;
  border-bottom: none;
  @media (min-width: 800px) {
    :hover {
      padding-left: 0;
      border-bottom: 1px solid #064734;
    }
  }
`;
