import "./styles.css";
import { Header } from "./components/Header";
import { MainSection } from "./components/ui/MainSection";
import { About } from "./components/About";
import { MyStack } from "./components/MyStack";
import { Projects } from "./components/Projects";
import { MoreInfo } from "./components/MoreInfo";
import { Contact } from "./components/Contact";
import { Footer } from "./components/ui/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainSection>
        <About />
        <MyStack />
        <Projects />
        <MoreInfo />
        <Contact />
      </MainSection>
      <Footer />
    </div>
  );
}
