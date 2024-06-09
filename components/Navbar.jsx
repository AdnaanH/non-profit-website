"use client"
import { useState } from 'react';
import {FaBars, FaCircle, FaTimes} from 'react-icons/fa'
import {montserrat} from '@/components/fonts';
import Link from "next/link";
import { Button } from './ui/button';
import { Input } from './ui/input';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return ( 
    <nav className="flex justify-between items-center py-4 md:px-12 px-2">
        <div className="flex items-center space-x-2">
            <FaCircle color='#147b74' size={15} />
            <span className={`${montserrat.className} text-xl xl:text-2xl text-center font-bold `}>non-proft.org</span>
        </div>
        <div className="lg:flex hidden space-x-4 uppercase font-semibold text-base xl:text-xl text-[#7a7a7a]">
            <Link href='/' className='text-[#147b74] transition-colors'>who we are</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>what we do</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>join us</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>blog</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>volunteer</Link>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden block" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={22}/>  : <FaBars size={22} />}
            
        </div>
        {isMobileMenuOpen && (
        <div className="uppercase absolute pt-10 top-[100px] left-0 md:w-[600px] w-full h-screen transition-all  bg-[#3cb4ac] p-4 lg:hidden flex flex-col gap-4 text-base font-bold font-Poppins text-black">
            <Link href='/' className='text-[#147b74] transition-colors'>who we are</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>what we do</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>join us</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>blog</Link>
            <Link href='/' className='hover:text-[#147b74] transition-colors'>volunteer</Link>
            <div className="flex items-center space-x-2 mt-6">
                <Input type="number" placeholder="$100" className="w-4/6"></Input>
                <Button className="bg-[#147b74]">Donate</Button>
            </div>
        </div>
        )}
    </nav> );
}
 
export default Navbar;