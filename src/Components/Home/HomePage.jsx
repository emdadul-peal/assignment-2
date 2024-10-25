

const HomePage = () => {
  return (
    <section >
      <div className=" flex justify-around w-full items-center py-4 ">
        <div>
          <img className="" src="../../../public/images/Logo.png" alt="" />
        </div>
        <div className=" space-x-6">
          <a href="#home" className="underline text-xl text-white">Home</a>
          <a href="#services" className="text-xl text-white">Services</a>
          <a href="#services" className=" text-xl text-white">Projects</a>
          <a href="#about" className=" text-xl text-white">About Us</a>
          <a href="#contact" className=" text-xl text-white">Contact Us</a>
        </div>
        <div>
          <button className="border rounded-lg hover:bg-blue-600 text-white px-3 py-2 ">Get a Schedule</button>
        </div>
      </div>
      
      <div className="">
          <div className="flex justify-center items-center mt-40 h-full">
            <h1 className="text-3xl md:text-8xl font-bold  text-white text-center">
              Transforming Your Ideas <br /> into <span className="text-[#2EB8A2]">Digital Outcomes</span>
              <br />

              <div className="mt-8">  
                <h3 className="text-lg font-thin text-white text-center ">Our global journey needs your expertise. Align with our brand ethos and help us reach new heights across the world.</h3>
                <div className='flex justify-center items-center h-full py-10'>
                  
                  <button className="border rounded-md bg-blue-500 text-sm px-4  py-2 ">Talk To Someone</button>
                </div>
              </div>

            </h1>

          </div>
      </div>

    </section>



  )
}

export default HomePage






