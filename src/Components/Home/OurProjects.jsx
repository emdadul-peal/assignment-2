import { IoIosArrowRoundForward } from "react-icons/io";

const OurProjects = () => {
  return (
    <section className="bg-red-10 py-20">
      <div className="container mx-auto ">
        <div className="flex justify-between ">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Projects We’d Hang on <span className="text-[#2EB8A2]">Our Refrigerator</span></h1>
          <p className="mt-4">Discover our latest work, showcasing innovative solutions and successful collaborations that highlight our expertise in delivering high-quality software development projects.</p>
        </div>
       <div>
       <button className=" flex items-center gap-1 border text-white rounded-lg px-4 py-1 bg-blue-500">
              See All    <IoIosArrowRoundForward className=' text-3xl' />
            </button>

       </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="bg-customFromAboutUsBg  rounded-lg">
                <img className="rounded-t-md"  src="/images/project1.jpeg" alt="" />
            <h3 className="text-lg font-medium p-3">GoThruhike Website Redesign</h3>
            <div className="p-3">
              <p>Thruhike is the ultimate platform for discovering and sharing your favorite places and products. Our mission is to celebrate local business and inspire new experiences.</p>
              <button className=" mt-4 text-lg font-medium ">View Project</button>
            </div>
          </div>
          <div className="bg-customFromAboutUsBg  rounded-lg">
                <img className="rounded-t-md" src="/images/project2.jpeg" alt="" />
            <h3 className="text-lg font-medium p-3">Gamezone Game Launcher</h3>
            <div className="p-3">
              <p>Game Launcher is a sleek desktop application designed exclusively for gamers. It offers seamless access to your favorite games, customizable settings, and efficient organization of your gaming library. With intuitive navigation and quick-launch features, it enhances your gaming experience by putting everything you need right at your fingertips.</p>
              <button className="mt-4 text-lg font-medium ">View Project</button>
            </div>
          </div>
          <div className="bg-customFromAboutUsBg  rounded-lg ">
                <img className="rounded-t-md"  src="/images/project3.jpeg" alt="" />
            <h3 className="text-lg font-medium p-3">Learn Here</h3>
            <div className="p-3">
              <p>LearnHere is the platform that presents all  the lessons from Beginner to Expert Level with live and
              recorded classes.</p>
              <button className="mt-4 text-lg font-medium ">View Project</button>
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center mt-10">
          <img src="/icons/Rectangle 9.png" alt="" />
          <img src="/icons/Rectangle dot.png" alt="" />
          <img src="/icons/Rectangle dot.png" alt="" />
          <img src="/icons/Rectangle dot.png" alt="" />
          <img src="/icons/Rectangle dot.png" alt="" />
          <img src="/icons/Rectangle dot.png" alt="" />
        </div>
      </div>

    </section>
  )
}

export default OurProjects
