

const Subscribe = () => {
    return (
        <section className="px-16 py-32">
            <div className="flex justify-between items-center container mx-auto bg-customFromSubscribeBg rounded-lg">
                <div className="text-white p-20">
                    <h2 className="text-3xl ">Want to know what we are up to?</h2>
                    <p>Subscribe to our newsletter.</p>
                </div>
                <div className="p-20 flex gap-3" >
                    <input className="px-3 py-1 rounded-md " type="email" placeholder="Enter Your Email" />
                    <button className="border rounded-md text-white bg-blue-500 px-3 py-1 ">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
