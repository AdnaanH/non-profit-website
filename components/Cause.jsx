import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

const Cause = () => {
    return ( 
        <>
            <Card className="2xl:w-[350px] xl:w-[310px] md:w-[350px] w-[320px]">
                <CardHeader>
                    <CardTitle>Sed ut perspiciatis </CardTitle>
                    <CardDescription>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="amount">Amount</Label>
                        <Select>
                            <SelectTrigger id="amount">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="100">$100</SelectItem>
                            <SelectItem value="250">$250</SelectItem>
                            <SelectItem value="500">$500</SelectItem>
                            <SelectItem value="1000">$1000</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="bg-[#3cb4ac] hover:bg-[#147b74]">Support</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action will redirect you to Paypal page for payment confirmation.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-[#3cb4ac] hover:bg-[#147b74]">Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardFooter>
            </Card>
        </>
     );
}
 
export default Cause;