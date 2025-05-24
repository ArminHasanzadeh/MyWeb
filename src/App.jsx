import './App.css'
import './header/Header.css'
import './TopMain/TopMain.css'
import './projectbox/ProjectBox.css'
import './skills/Skills.css'
import './aboutme/AboutMe.css'
import TopMain from './TopMain/TopMain'
import Header from './header/Header'
import ProjectBox from './projectbox/ProjectBox'
import Skills from './skills/Skills'
import AboutMe from './aboutme/AboutMe'


function App() {
 

  return (
    <main className=' flex justify-center items-end flex-col'>
     <Header />
     <TopMain />
     <ProjectBox />
     <Skills />
     <AboutMe />
    </main>
  )
}

export default App
