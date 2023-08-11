import './App.css'
import {Navbar,Hero,About,Contact,Skills,Footer} from "./components"

function App() {

  return (
    <div data-theme="dark" className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
