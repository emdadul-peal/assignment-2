import { IoIosArrowRoundForward } from "react-icons/io";
import { VscSend } from "react-icons/vsc";

const InquirySection = () => {
    return (
        <section className="mb-28">
            <div className="flex gap-6  container mx-auto">
                <div className=" w-1/2">
                    <div className=" relative ">
                        <div className="w-[228px]  ">
                            <img src="/images/inquiry.png" alt="" />
                        </div>
                        <div className="bg-customFromInquiryBg absolute bottom-0 left-48 px-4 py-2 rounded-md">
                            <h2>Md. Shahinur Rahman</h2>
                            <p>Managing Director, Mediusware Ltd</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p>I'd be excited to talk with you about your projects or what you need.</p>
                        <p className="mt-2">Fill in the form or send us an email to <a className="text-blue-700 font-semibold underline" href="info@mediusware.com">“info@mediusware.com”</a></p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-bold">Talk to you in less than 24hs.</h3>
                    </div>
                    <div className="bg-customFromAboutUsBg rounded-lg  mt-6">
                        <div className="p-4">
                            <h5 className="font-semibold">Book a call</h5>
                            <p>Feel free to select a time at your convenience!</p>
                            <button className="flex items-center mt-4 text-blue-500 font-medium ">Let’s Talk <IoIosArrowRoundForward className=' text-2xl' /> </button>
                        </div>
                    </div>
                </div>


                <div className="bg-customFromAboutUsBg p-4 rounded-lg w-1/2" >
                    <div >
                        <h1 className="text-3xl font-semibold">Got an idea? We’ve got the skills.</h1>
                        <p className="mt-3">Fill out our contact form and we’ll get in touch!</p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 pt-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name*</label>
                                <input className="mt-3 block w-full   px-3 py-2 border border-gray-300 rounded-md shadow-md" type="text" placeholder="Enter Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email*</label>
                                <input className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md" type="email" placeholder="Enter Your Email" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-neutral-400">(Optional)  </span>
                                </label>
                                <input className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md shadow-md" type="text" placeholder="Enter Your Phone Number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Company Name <span className="text-neutral-400">(Optional)</span></label>
                                <input className="mt-3 w-full border border-gray-300 rounded-md shadow-md px-3 py-2" type="text" placeholder="Enter Your Company Name" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <label className="block text-sm font-medium">Deep Details About Your Query <span className="text-neutral-400">(Optional)</span></label>
                                <textarea className="border rounded-md shadow-md w-full mt-3 px-3 py-2 h-24" name="" id="" placeholder="Tell us more about your query"></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                <button className="flex items-center border rounded-md shadow-md px-3 py-2 bg-blue-500 text-white text-sm font-medium">Submit Inquiry
                    <VscSend className='ml-2 ' />
                </button>
            </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InquirySection
