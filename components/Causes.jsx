import Cause from "./Cause";

const Causes = () => {
    return ( 
    <div className="py-16 my-4 grid 2xl:px-12 xl:px-8 px-4 items-center">
        <div className="grid gap-2">
            <h1 className="lg:text-5xl text-3xl text-[#3cb4ac] font-semibold text-center">Support our Causes</h1>
            <p className="text-center lg:text-xl text-base text-[#7a7a7a] font-bold">Easily support our causes with just a click, no account required</p>
        </div>
        <div className="w-full grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center mt-2">
            <Cause />
            <Cause />
            <Cause />
            <Cause />
        </div>
    </div> 
    );
}
 
export default Causes;