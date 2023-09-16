import { FaBars, FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [showmenu, updateShowmenu] = useState(false);

  return (
    <Header>
      <LeftNav>
        <Link href="/" passHref>
          <LeftAnchor onClick={() => updateShowmenu(!showmenu)}>Home</LeftAnchor>
        </Link>
        <button onClick={() => updateShowmenu(!showmenu)}>
          {showmenu ? <FaTimes /> : <FaBars />}
        </button>
      </LeftNav>
      <RightNav showmenu={showmenu}>
        <Link href="/about" passHref>
          <RightAnchor onClick={() => updateShowmenu(!showmenu)}>About</RightAnchor>
        </Link>
        <RightAnchor 
          onClick={() => { 
            updateShowmenu(!showmenu);
            window.open("/AdewaleAbiolaResume.pdf", "_blank", "noopener,noreferrer");
          }}
        >
          Resume
        </RightAnchor>
      </RightNav>
    </Header>
  );
}

export default Navbar;


export const Header = styled.div`
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  color: #064734;
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const StyledDiv = styled.div`
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
  @media screen and (min-width: 800px) {
    :hover {
      padding-left: 0;
      border-bottom: 1px solid #064734;
    }
  }
`;

export const RightNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  list-style-type: none;
  height: ${({ showmenu }) => (showmenu ? "auto" : "0")};
  div {
    text-decoration: none;
  }
  @media screen and (min-width: 800px) {
    display: flex;
    height: auto;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background: transparent;
    border-color: transparent;
  }
  @media screen and (min-width: 800px) {
    justify-content: flex-end;
    button {
      display: none;
    }
  }
`;
