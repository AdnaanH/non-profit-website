import {FaCircle} from 'react-icons/fa'
import {montserrat} from '@/components/fonts';
import Link from "next/link";

const Navbar = () => {
    return ( 
    <nav className="flex justify-between items-center py-4 px-12">
        <div className="flex items-center space-x-2">
            <FaCircle color='#147b74' size={15} />
            <span className={`${montserrat.className} text-xl xl:text-2xl text-center font-bold `}>non-proft.org</span>
        </div>
        <div className="flex space-x-4 uppercase font-semibold text-base xl:text-xl text-[#7a7a7a]">
            <Link href='/' className='text-[#147b74] transition-colors'>who we are</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>what we do</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>join us</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>blog</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>volunteer</Link>
        </div>
    </nav> );
}
 
export default Navbar;