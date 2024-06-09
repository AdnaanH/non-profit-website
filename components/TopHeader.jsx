import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {FaDonate} from 'react-icons/fa'

const TopHeader = () => {
    return ( 
    <div className="flex lg:justify-end justify-center items-center space-x-3 py-1 md:px-12 px-2">
        <div className="flex md:w-2/6 w-full gap-2">
            <Input type="text" placeholder="Search" />
            <Button variant="ghost"><FaDonate color="#147b74" className="mr-2 h-4 w-4" /> Donate</Button>
        </div>
    </div> 
);
}
 
export default TopHeader;