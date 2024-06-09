import { lusitana } from '@/components/fonts';
import { FaChevronRight } from 'react-icons/fa';
import { Button } from './ui/button';

const Hero = () => {
    return ( 
        <div className="min-h-[500px] w-full bg-no-repeat bg-cover bg-center px-12 flex justify-start items-center" style={{backgroundImage: `url('/hero.jpg')`}}>
            <div className="grid gap-4 lg:w-6/12 w-full  bg-[#7a7a7a] rounded-md p-5 shadow-md">
                <h1 className={`${lusitana.className} lg:text-5xl text-3xl lg:text-start text-center font-bold `}>Join us today in making an impact</h1>
                <p className='text-base font-semibold lg:text-start text-center lg:w-4/6 w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex justify-end">
                <Button className="bg-[#147b74]" variant="outline" size="icon">
                    <FaChevronRight className="h-4 w-4" />
                </Button>
                </div>
            </div>            
        </div>
     );
}
 
export default Hero;
