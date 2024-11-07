

const Achievements = () => {
  return (
    <section className=" bg-customFromAboutUsBg py-20">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Achievements <span className="text-[#2EB8A2]">& Awards</span></h1>
          <p className="mt-4">People know us for our top-notch work and great customer service, all of whom have expressed nothing but positive feedback about our services. Take a moment to see for yourself.</p>
        </div>
        <div className="mt-10 grid grid-cols-4 gap-4">
        <div className="flex justify-center items-center bg-customFromAboutDetailsBg p-4 rounded-md">
                <img src="/images/awards1.png" alt="" />
          </div>
          <div className="flex justify-center items-center bg-customFromAboutDetailsBg p-4 rounded-md">
                <img src="/images/awards2.png" alt="" />
          </div>
          <div className="flex justify-center items-center bg-customFromAboutDetailsBg p-4 rounded-md ">
                <img src="/images/awards3.png" alt="" />
          </div>
          <div className="flex justify-center items-center bg-customFromAboutDetailsBg p-4 rounded-md">
                <img src="/images/awards4.png" alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Achievements
