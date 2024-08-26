"use client"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger
} from "@/components/ui/menubar"
import { SignOutButton } from "@clerk/nextjs"
import { ArrowRight, ArrowRightToLine, ArrowUpRight, ChevronDown, CircleArrowUp } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const Menu = () => {

    return (

        <Menubar className="cursor-pointer relative">
            <MenubarMenu>
                <MenubarTrigger className="no-border cursor-pointer ">
                    <ChevronDown className=" h-4 w-4 cursor-pointer" /></MenubarTrigger>
                <MenubarContent className="m-2 p-4">
                    <MenubarItem>
                        <Link href="/account" className="cursor-pointer">
                            Account
                        </Link>
                    </MenubarItem>

                    <MenubarItem>
                        <Link href="/subscription" className="cursor-pointer">
                            Subscription
                        </Link>
                    </MenubarItem>


                    <MenubarSeparator />
                    <MenubarItem>
                        <Link href="/usage" className="cursor-pointer flex items-center justify-between w-full">
                            Usage <MenubarShortcut><ArrowRight className=" h-4 w-4" /></MenubarShortcut>
                        </Link>
                    </MenubarItem>

                    <MenubarItem>
                        Verifications <MenubarShortcut>6 / 25</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem className="text-[10px]">
                        Qoutas reset in 29 days.
                    </MenubarItem>
                    <Button className="bg-blue-500 w-[180px] my-2 hover:bg-blue-700"><CircleArrowUp className=" h-4 w-4 mr-2" /> Upgrade</Button>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Link href="/" className="cursor-pointer flex items-center justify-between w-full">
                            Home <MenubarShortcut><ArrowUpRight className=" h-4 w-4" /></MenubarShortcut>
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <SignOutButton />
                        <MenubarShortcut><ArrowRightToLine className=" h-4 w-4" /></MenubarShortcut>

                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}

export default Menu
