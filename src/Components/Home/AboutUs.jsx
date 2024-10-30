

const AboutUs = () => {
  return (
   <div className="container mx-auto bg-customFromAboutUsBg p-28">
     <div className="flex-col md:flex-row justify-center items-center gap-6">
      <div className="md:relative">
        <img className=" rounded-lg" src="/images/abut1.png" alt="" />
      </div>
      <div className="md:absolute right-48 bg-customFromAboutDetailsBg p-8 w-[700px] rounded-lg  ">
        <div className="">
          <h2 className="font-bold text-4xl ">A Little Bit <span className="text-[#2EB8A2]">About Us</span></h2>
          <p className="mt-2">
          Incepted in 2015, Mediusware Ltd. has been serving as a leading IT Solution provider in USA & Bangladesh. Our aim is to help businesses all around the world by providing the digital solutions according to their need. Serving a number of renowned companies from the USA, UK, and many other countries, we have already created a wide range of satisfied clients!
          </p>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="border bg-gray-100 rounded-lg p-4">
            <h1 className="font-bold text-2xl">800+</h1>
            <p>Projects Completed</p>
          </button>
          <button className="border bg-gray-100 rounded-lg p-4">
            <h1 className="font-bold text-2xl">100+</h1>
            <p>Team Members</p>
          </button>
          <button className="border bg-gray-100 rounded-lg p-4">
            <h1 className="font-bold text-2xl">1,000+</h1>
            <p>Happy Customers</p>
          </button>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-customFromAboutUsBtnBg text-white rounded-md p-2 ">Contact Us</button>
          <button className="border rounded-md p-2 ">Company Deck</button>
        </div>
        
      </div>
    </div>
   </div>
  )
}

export default AboutUs
