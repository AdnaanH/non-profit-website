import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn,FaPinterest, } from "react-icons/fa";

const Connect = () => {
    return ( 
        <div className="grid gap-8 p-16">
            <div className="flex lg:flex-row flex-col justify-around px-16 py-14">
                <div className="lg:w-3/12 w-full text-center gap-2">
                    <h2 className="text-5xl text-[#3cb4ac] font-bold">10000+</h2>
                    <h3 className="text-base font-bold text-black">Lives impacted</h3>
                </div>
                <div className="lg:w-3/12 w-full text-center gap-2">
                    <h2 className="text-5xl text-[#3cb4ac] font-bold">10000+</h2>
                    <h3 className="text-base font-bold text-black">Lives impacted</h3>
                </div>
                <div className="lg:w-3/12 w-full text-center gap-2">
                    <h2 className="text-5xl text-[#3cb4ac] font-bold">10000+</h2>
                    <h3 className="text-base font-bold text-black">Lives impacted</h3>
                </div>

            </div>
            <div className="grid gap-6">
                <h1 className="text-center lg:text-5xl text-3xl font-bold text-[#3cb4ac]">Stay connected with us</h1>
                <div className="flex justify-center gap-4">
                    <FaFacebook size={36} />
                    <FaInstagram size={36}/>
                    <FaTwitter size={36} />
                    <FaLinkedinIn size={36} />
                    <FaPinterest size={36} />
                    <FaYoutube size={36} />
                </div>
            </div>
        </div>
     );
}
 
export default Connect;