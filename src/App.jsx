import videoBg from "./assets/bg.mp4"
import HomePage from "./Components/Home/HomePage"
import "./App.css"
import Services from "./Components/Home/Services"


function App() {


  return (
    <>
      <div className='min-h-screen'>
        <video className="absolute  h-full top-0 left-0 w-screen object-cover  " src={videoBg} autoPlay loop muted>
        </video>
        <div className="relative">
          <HomePage />
        </div>
      </div>
      <div>
        <Services/>
      </div>




    </>
  )
}

export default App
