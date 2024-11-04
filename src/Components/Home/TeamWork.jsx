

const TeamWork = () => {
  
    return (
        <section className="container mx-auto py-20">
           
            <div className="flex justify-between gap-6">
                <div className="w-[870px]">
                    <h1 className="text-4xl font-bold ">How We <span className="text-[#2EB8A2]">Work Together</span> </h1>
                    <p className="mt-4">Mediusware is a US-based software development company with unique access to premium developers & Designers. We follow a structured process to ensure project success. Our approach guarantees reliability and ongoing support for every project. Here is the process we work on:</p>
                </div>
            <div className="border bg-gray-100 rounded-md p-4">
                <img src="/icons/i_1.png" alt="" />
                <h3 className="text-lg font-semibold mt-6">Planning</h3>
                <p className="mt-1">Collaborate with clients to create a detailed project plan.</p>
            </div>
            <div className="border bg-gray-100 rounded-md p-4">
                <img src="/icons/i_2.png" alt="" />
                <h3 className="text-lg font-semibold mt-6">Defining</h3>
                <p className="mt-1">Document project requirements and specifications.</p>
            </div>
            
            </div >
            <div className="mt-6 flex justify-between gap-6">
            <div className="border rounded-md p-4 bg-gray-100">
                <img src="/icons/i_3.png" alt="" />
                <h3 className="text-lg font-semibold mt-6">Designing</h3>
                <p className="mt-1">Develop and refine user-friendly prototypes and wireframes.</p>
            </div>
            <div className="border bg-gray-100 rounded-md p-4">
                <img src="/icons/i_4.png" alt="" />
                <h3 className="text-lg font-semibold mt-6">Coding & Implement</h3>
                <p className="mt-1">Develop the software using best practices and latest technologies.</p>
            </div>
            <div className="border bg-gray-100 rounded-md p-4">
                <img src="/icons/i_5.png" alt="" />
                <h3 className="text-lg font-semibold mt-6">Testing</h3>
                <p className="mt-1">Rigorously test for functionality, performance, and security.</p>
            </div>

        <div className="border bg-gray-100 rounded-md p-4">
            <img src="/icons/i_6.png" alt="" />
            <h3 className="text-lg font-semibold mt-6">Integration</h3>
            <p className="mt-1">Integrate components, conduct final testing, and provide support.</p>
        </div>
            </div>
            
        </section>
    )
}

export default TeamWork;