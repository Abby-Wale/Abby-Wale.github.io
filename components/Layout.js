import Link from "next/link";
import Navbar from "./Navigation";

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
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Adewale :)</p>
      </footer>
    </div>
  );
}
