

const Services = () => {
    return (
        <div className='flex flex-col items-center '>
            <h1 className='text-4xl font-semibold py-10 '>
                Things We’re <span className='text-[#2EB8A2]'>Good At</span>
            </h1>
            <div className='grid grid-cols-3 gap-4'>
                <img src="../../../public/images/Software Development.png" alt="" />
                <img src="../../../public/images/Web Development.png" alt="" />
                <img src="../../../public/images/Mobile App Development.png" alt="" />
                <img src="../../../public/images/E-commerce Solution.png" alt="" />
                <img src="../../../public/images/UX Design.png" alt="" />
                <img src="../../../public/images/API Integration.png" alt="" />
            </div>
            <div className='my-10 '>
                <button className='border border-black rounded-md px-3 py-1  bg-blue-500 text-white '>See All</button>
            </div>
        </div>
    )
}

export default Services
