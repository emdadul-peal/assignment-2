import videoBg from "./assets/bg.mp4"
import HomePage from "./Components/Home/HomePage"
import "./App.css"
import Services from "./Components/Home/Services"
import AboutUs from "./Components/Home/AboutUs"
import TeamWork from "./Components/Home/TeamWork"
import PeopleSays from "./Components/Home/PeopleSays"
import OurProjects from "./Components/Home/OurProjects"
import Achievements from "./Components/Home/Achievements"
import Subscribe from "./Components/Home/Subscribe"
import InquirySection from "./Components/Home/InquirySection"
import Footer from "./Components/Home/Footer"


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
<div>
  <AboutUs/>
</div>
<div>
  <TeamWork/>
</div>
<div>
  <PeopleSays/>
</div>
<div>
  <OurProjects/>
</div>
<div>
  <Achievements/>
</div>
<div>
  <Subscribe/>
</div>
<div>
  <InquirySection/>
</div>
<div>
  <Footer/>
</div>



    </>
  )
}

export default App
