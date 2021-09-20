import { FaTimes } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [showmenu, updateShowmenu] = useState(false);

  return (
    <div className="header">
      <div className="leftNav">
        <Link href="/" passHref>
          <div className="leftAnchor" onClick={() => updateShowmenu(!showmenu)}>
            <span>ABIOLA</span>
          </div>
        </Link>
        <button
          className="leftButton"
          onClick={() => updateShowmenu(!showmenu)}
        >
          agagagagagagagag
          {showmenu ? <FaTimes /> : <FiGrid />}
        </button>
      </div>
      <div className="rightNav" showmenu={showmenu}>
        <Link href="/about" passHref>
          <div
            className="rightAnchor"
            onClick={() => updateShowmenu(!showmenu)}
          >
            <span>About</span>
          </div>
        </Link>

        <Link href="/design" passHref>
          <div
            className="rightAnchor"
            onClick={() => updateShowmenu(!showmenu)}
          >
            <span>Designs</span>
          </div>
        </Link>

        <Link href="/frontend" passHref>
          <div
            className="rightAnchor"
            onClick={() => updateShowmenu(!showmenu)}
          >
            <span>Resume</span>
          </div>
        </Link>
      </div>
      <style jsx>{`
        .header {
          margin: 0;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          color: #fff;
          background-color: blue;
        }

        .leftNav {
          display: flex;
          justify-content: space-between;
          background-color: red;
        }

        .leftAnchor {
          margin-right: auto;
          text-decoration: none;
          cursor: pointer;
        }
        .rightNav {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          overflow: hidden;
          list-style-type: none;

          height: ${({ showmenu }) => (showmenu ? "auto" : "0")};
        }

        .rightAnchor {
          color: #000;
          font-size: 20px;
          letter-spacing: 0.1rem;
          display: flex;
          flex-direction: columns;
          justify-content: center;
          align-items: center;
          margin: 12px;
          text-decoration: none;
          cursor: pointer;
        }
        @media screen and (min-width: 800px) {
          .header {
            flex-direction: row;
          }
          .leftNav {
            justify-content: flex-start;
          }
          .leftButton {
            display: none;
          }

          .leftAnchor {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .leftAnchor span {
            visibility: visible;
          }

          .rightNav {
            display: flex;
            height: auto;
          }
          rightNav :hover {
            padding-left: 0;
            border-bottom: 1px solid black;
            color: #000;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
