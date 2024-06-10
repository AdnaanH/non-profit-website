import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {FaDonate} from 'react-icons/fa'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

const TopHeader = () => {
    return ( 
    <div className="flex lg:justify-end justify-center items-center space-x-3 py-1 md:px-12 px-2">
        <div className="flex md:w-2/6 w-full gap-2">
            <Input type="text" placeholder="Search" />
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost"><FaDonate color="#147b74" className="mr-2 h-4 w-4" /> Donate</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Donate</h4>
                            <p className="text-sm text-muted-foreground">
                                We will highly appreciate your contributions.
                            </p>
                        </div>
                        <form className="grid gap-2">
                            <Input type="number" placeholder="$100" />
                            <Button className="bg-[#3cb4ac] hover:bg-[#147b74] mt-2">DONATE</Button>
                            <small className="underline">Learn more</small>
                        </form>
                    </div>
                </PopoverContent>
                </Popover>
        </div>
    </div> 
);
}
 
export default TopHeader;