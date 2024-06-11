import Event from "./Event";

const Events = () => {
    return ( 
        <div className="py-16 grid 2xl:px-12 xl:px-8 px-4 items-center bg-[#3cb4ac]">
        <div className="grid gap-2">
            <h1 className="lg:text-5xl text-3xl text-white font-semibold text-center">Join Us</h1>
            <p className="text-center lg:text-xl text-base text-black font-bold mb-3">Support us today by volunteering for our upcoming events</p>
        </div>
        <div className="w-full grid gap-6 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center mt-2">
            <Event />
            <Event />
            <Event />
            <Event />
        </div>
    </div> 
     );
}
 
export default Events;