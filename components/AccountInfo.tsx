
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "./ui/button";
import { Label } from "recharts";
import { Input } from "postcss";

const AccountInfo = async () => {
    const user = await currentUser();
    console.log(user)
    return (
        <Card>
            <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Manage your account details and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={user?.imageUrl} />
                        <AvatarFallback>{user?.firstName && user?.firstName[0]} {user?.lastName && user?.lastName[0]}</AvatarFallback>
                    </Avatar>
                  
                </div>
            </CardContent>
            <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-600/50">Save Changes</Button>
            </CardFooter>
        </Card>
    )
}

export default AccountInfo
