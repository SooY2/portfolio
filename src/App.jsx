import Portfolio from "./components/portfolio/portfolio";
import StrengthSection from "./components/strength/StrengthSection";
import headerSt from "./styles/header.module.css";
import strengthSt from "./styles/strength.module.css";

function App() {
  return (
    <>
      <header className={headerSt.header_container}>
        <nav>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <StrengthSection />
        <Portfolio />

        <section id={"contact"}>
          <h2>Contact</h2>
          <div>
            <p>email | ssy67366736@gmail.com</p>
            <p>phone | 010-5048-6736</p>
          </div>
        </section>
      </main>

      <footer id={"footer"}>
        <p>© 2023 SooY. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
