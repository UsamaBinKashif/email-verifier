import { Bell, Building, CircleHelp, Layers3, MailCheck, Users } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Menu from "./Menu"
import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { NotificationCard } from "./NotificationCard"
import { CardDescription, CardHeader, CardTitle } from "./ui/card"

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

const Header = async () => {
    const user = await currentUser();

    return (

        <header className="text-gray-600 bg-white border border-gray-900/20 ">
            <div className=" mx-auto flex px-5 py-1  md:flex-row items-center justify-between">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900  md:mb-0">
                    <svg width="30" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4405 16.7509C20.429 19.5731 22.455 21.0644 24.7116 23.0766C19.5071 23.2213 16.1518 22.0677 14.6348 19.6104C14.5759 19.5086 14.517 19.4013 14.4578 19.294C13.8038 18.0063 13.6647 16.4826 15.128 15.5598C16.9019 14.4383 17.2881 15.1196 18.4405 16.7509ZM11.2955 11.5304C10.9685 11.5464 10.6953 11.2941 10.6792 10.9669C10.6629 10.6396 10.9149 10.3661 11.2418 10.35C11.5688 10.334 11.8421 10.586 11.8584 10.9132C11.8745 11.2408 11.6225 11.5143 11.2955 11.5304ZM21.367 7.00197C19.5552 3.24618 15.7175 0.654724 11.2687 0.654724C8.18663 0.654724 5.38867 1.9051 3.36275 3.92781C1.33129 5.95577 0.0715866 8.76189 0.0715866 11.8684C0.0715866 14.9694 1.33129 17.7808 3.36275 19.8091C5.38867 21.8318 8.18138 23.0818 11.2687 23.0818C12.153 23.0818 13.0108 22.9801 13.8307 22.7867C11.6172 22.0625 9.34454 20.5601 8.63142 18.3227C8.18138 16.9116 8.21871 15.1036 8.73875 12.8931C9.06046 11.5356 8.71746 10.7793 7.31834 10.2319C8.50834 9.72235 8.91025 9.80285 9.46238 9.81889C10.3628 8.57406 12.3353 8.38622 13.686 9.09993C14.8171 9.69552 15.0743 10.8006 15.5083 11.9005C16.1891 13.612 16.9716 15.2754 18.9121 13.7786C21.3347 11.9166 22.8677 10.1193 21.367 7.00197Z" fill="#1A1A1A" />
                    </svg>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-4 md:pl-4 md:border-l md:border-gray-900/20	flex flex-wrap items-center text-base justify-center">
                    {/* <Button className="text-[14px]" variant="ghost">
                        <Building className="mr-2 h-4 w-4 lg:block hidden" /> Tools
                    </Button> */}
                    <Link href="/verifier">
                        <Button className="text-[14px]" variant="ghost">
                            <MailCheck className="mr-2 h-4 w-4 lg:block hidden" /> Verifier
                        </Button>
                    </Link>
                    <Link href="/bulk-verify">
                        <Button className="text-[14px]" variant="ghost">
                            <Layers3 className="mr-2 h-4 w-4 lg:block hidden" /> Bulk Verify
                        </Button>
                    </Link>
                    {/* <Button className="text-[14px]" variant="ghost">
                        <Users className="mr-2 h-4 w-4 lg:block hidden" /> Leads
                    </Button> */}
                </nav>
                <div className="flex items-center">
                    <div className="md:mr-auto md:ml-4 md:py-4 md:pl-4 md:border-r md:border-gray-900/20	">
                        <Button variant="ghost">
                            <CircleHelp className="  h-4 w-4" />
                        </Button>
                        <Popover>

                            <PopoverTrigger asChild>
                                <Button variant="ghost">
                                    <Bell className=" h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <CardHeader>
                                    <CardTitle >Notifications</CardTitle>
                                    <CardDescription className="text-xs">You have 3 unread messages.</CardDescription>
                                </CardHeader>
                                <div>
                                    {notifications.map((notification, index) => (
                                        <div
                                            key={index}
                                            className="mb-4 grid grid-cols-[25px_1fr] bg-gray-50 p-2 shadow rounded items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {notification.title}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {notification.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>

                    </div>

                    <div className="flex px-2 gap-x-2">
                        <Avatar className="lg:block hidden">
                            <AvatarImage src={user?.imageUrl} />
                            <AvatarFallback>{user?.firstName && user?.firstName[0]} {user?.lastName && user?.lastName[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex gap-x-3 ">
                            <div className="text-[14px] ">
                                <h1 className="text-black">{user?.firstName} {user?.lastName && user?.lastName[0]}</h1>
                                <h1 >Free Plan</h1>
                            </div>
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
