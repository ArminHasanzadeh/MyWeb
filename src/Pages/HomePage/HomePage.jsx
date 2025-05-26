
import "./header/Header.css";
import "./HomePage.css";
import "./TopMain/TopMain.css";
import "./projectbox/ProjectBox.css";
import "./skills/Skills.css";
import "./aboutme/AboutMe.css";
import "./contacts/Contacts.css";
import "./Footer/Footer.css";

import TopMain from "./TopMain/TopMain";
import ProjectBox from "./projectbox/ProjectBox";
import Skills from "./skills/Skills";
import AboutMe from "./aboutme/AboutMe";
import Contacts from "./contacts/Contacts";


function  HomePage() {
  return (
    <>
      <main className=" flex justify-center items-end flex-col overflow-hidden">
      
        <TopMain />
        <ProjectBox />
        <Skills />
        <AboutMe />
        <Contacts />
        
      </main>
    </>
  );
}



export default HomePage;
