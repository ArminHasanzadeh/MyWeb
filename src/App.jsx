import './App.css'
import './header/Header.css'
import './TopMain/TopMain.css'
import TopMain from './TopMain/TopMain'
import Header from './header/Header'


function App() {
 

  return (
    <main className=' flex justify-center items-end flex-col'>
     <Header />
     <TopMain />
    </main>
  )
}

export default App
