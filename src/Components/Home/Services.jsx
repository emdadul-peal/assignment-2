

function Services() {
    const services = [
        {
            title: 'Software Development',
            description: 'Relieve the Burden of Software Development and Project Management.',
            imgUrl: '/images/p1.jpeg'
        },
        {
            title: 'Web Development',
            description: 'We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...',
            imgUrl: '/images/p2.jpeg'
        },
        {
            title: 'Mobile App Development',
            description: 'Innovative solutions tailored to your needs, delivering seamless user experiences.',
            imgUrl: '/images/p3.jpeg'
        },
        {
            title: 'E-commerce Solution',
            description: 'E-commerce websites need to be user-friendly, but attractive at the same time.',
            imgUrl: '/images/p4.jpeg'
        },
        {
            title: 'UX/UI Design',
            description: 'Crafting interfaces that enhance user experiences, elevating brand engagement effortlessly.',
            imgUrl: '/images/p5.jpeg'
        },
        {
            title: 'API Integration',
            description: 'Bridging platforms for effortless data flow, enabling enhanced operational efficiency.',
            imgUrl: '/images/p6.jpeg'
        }
    ]
    return (
        <div className="py-8">
            <div className="flex justify-center items-center py-8">
                <h2 className="text-4xl font-semibold ">
                    Things We’re <span className="text-[#2EB8A2]"> Good At</span>
                </h2>
            </div>

            <section className="container mx-auto py-8" >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
                    {services.map((service, index) => (
                        <div key={index}
                        className="relative ">
                            <img className="w-full h-60 object-cover rounded-lg" src={service.imgUrl} alt={service}
                            />
                            <div className="absolute bottom-2 left-2  bg-black bg-opacity-30  text-white p-2 ">
                              
                               <h3 className="font-bold text-2xl">
                                    {service.title}
                                </h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

              
                <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              See All
            </button>
          </div>
                
            </section>
        </div>
    )
}

export default Services

