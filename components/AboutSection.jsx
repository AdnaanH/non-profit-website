import Image from "next/image";

const AboutSection = () => {
    return ( 
        <div className="min-h-screen bg-[#3cb4ac] py-12 lg:px-16 px-4 flex lg:flex-row flex-col justify-between gap-10">
           <div className="grid lg:w-2/6 w-full gap-4">
                <Image
                    src="/medical-illustration.png"
                    alt="medical illustration"
                    width="400"
                    height="600"
                    className="rounded-md"
                />
           </div>
           <div className="grid lg:w-4/6 w-full lg:text-start text-center">                
                <h1 className="uppercase lg:text-5xl text-3xl lg:text-start text-center font-bold text-white">Who we Are</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
                <h2 className="text-white uppercase text-xl font-bold">Our Vital Mission</h2>
                <p>
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                </p>
                <p>
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                </p>
           </div>
        </div>
     );
}
 
export default AboutSection;