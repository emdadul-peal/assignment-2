

const PeopleSays = () => {
  return (
    <section className=" bg-customFromAboutUsBg py-20">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">What the People <span className="text-[#2EB8A2]">Are Saying</span></h1>
          <p className="mt-4">Explore success stories from clients across a range of industries, spanning from techpreneurs and start-ups to established enterprises.</p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="bg-customFromAboutDetailsBg p-4 rounded-md">
          <div className="grid relative">
                <img src="/images/people_says1.jpeg" alt="" />
                <img className="absolute right-1/2 bottom-1/2 " src="/icons/video_icon.png" alt="" />
            </div>
            <h3 className="text-lg font-medium mt-3">Mediusware renewed our trust in outsourcing IT development in the USA.</h3>
            <div>
              <h4 className="text-base font-medium mt-1">Jenny Wilson</h4>
              <p>CEO, Company Name</p>
            </div>
          </div>
          <div className="bg-customFromAboutDetailsBg p-4 rounded-md">
          <div className="grid relative">
                <img src="/images/people_says2.jpeg" alt="" />
                <img className="absolute right-1/2 bottom-1/2 " src="/icons/video_icon.png" alt="" />
            </div>
            <h3 className="text-lg font-medium mt-3">Mediusware renewed our trust in outsourcing IT development in the USA.</h3>
            <div>
              <h4 className="text-base font-medium mt-1">Courtney Henry</h4>
              <p>CTO, Company Name</p>
            </div>
          </div>
          <div className="bg-customFromAboutDetailsBg p-4 rounded-md">
            <div className="grid relative">
                <img src="/images/people_says3.jpeg" alt="" />
                <img className="absolute right-1/2 bottom-1/2 " src="/icons/video_icon.png" alt="" />
            </div>
            <h3 className="text-lg font-medium mt-3">Mediusware renewed our trust in outsourcing IT development in the USA.</h3>
            <div>
              <h4 className="text-base font-medium mt-1">Kristin Watson</h4>
              <p>Director, Company Name</p>
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

export default PeopleSays;
