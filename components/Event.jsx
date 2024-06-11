import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Event = () => {
    return ( 
        <div className="w-2xl:w-[350px] xl:w-[310px] md:w-[350px] w-[320px] ">
            <Image
             src="/event.jpg"
             alt="events"
             width={310}
             height={400}
             className="rounded-md"
             />
             <div className="grid w-[310] gap-1">
                <h1 className="text-2xl font-bold justify-start mt-2 lg:text-start text-center">Ut enim ad minima </h1>
                <h2 className="text-sm lg:text-start text-center">01.01.2024</h2>
                <p className="text-base font-normal justify-start mb-6 lg:text-start text-center">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="bg-white hover:bg-white text-base text-[#147b74] font-bold ">Join Us</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>Add details</SheetTitle>
                        <SheetDescription>
                            Fill in the details to volunteer in our programs
                        </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Name
                                </Label>
                                <Input id="name" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                Email
                                </Label>
                                <Input id="email" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-right">
                                Phone
                                </Label>
                                <Input id="phone" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-right">
                                Category
                                </Label>
                                <Select id="category">
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Education</SelectItem>
                                        <SelectItem value="dark">Health</SelectItem>
                                        <SelectItem value="system">Mentorship</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit" className="bg-[#3cb4ac] hover:bg-#147b74">Save changes</Button>
                        </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
             </div>
        </div>
     );
}
 
export default Event;