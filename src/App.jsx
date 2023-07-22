import { About, Contact, Experience,Feedbacks, Hero, Navbar, Tech, Works, } from "./components"
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div>
        <Contact />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
