import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import {
Tabs,
TabsContent,
TabsList,
TabsTrigger,
} from "@/components/ui/tabs"

const Auth = () => {
    return ( 
        <section className="flex justify-center items-center min-h-screen bg-[#3cb4ac]">            
            <Tabs defaultValue="login" className="md:w-[400px] w-[375px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                    <CardDescription>
                                        Easily login into your account.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password"   />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-[#3cb4ac] hover:bg-[#147b74] font-bol">Login</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="register">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Register</CardTitle>
                                    <CardDescription>
                                        Create an account easily
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="current">Password</Label>
                                        <Input id="current" type="password" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="new">Repeat password</Label>
                                        <Input id="new" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-[#3cb4ac] hover:bg-[#147b74] font-bol">Register</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
        </section>
     );
}
 
export default Auth;