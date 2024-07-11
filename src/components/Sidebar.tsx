'use client';

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
import UserItem from 'useritem';
//const UserItem = dynamic(() => import('useritem'), { ssr: false });
//import UserItem from "./UserItem";

import { Bell, BookLock, CreditCard, Inbox, ScrollText, Settings, User } from "lucide-react"
import Link from "next/link";

export default function Sidebar() {
    const menuList = [
        {
            group:"General",
            items:[
                { 
                    link: "/",
                    text: "Profile",
                    icon: <User />
                },
                { 
                    link: "/",
                    text: "Inbox",
                    icon: <Inbox />
                },
                { 
                    link: "/",
                    text: "Billing",
                    icon: <CreditCard />
                },
                { 
                    link: "/",
                    text: "notificacions",
                    icon: <Bell />
                },
            ]
        },
        {
            group:"Settings",
            items:[
                { 
                    link: "/",
                    text: "General Settings",
                    icon: <Settings />
                },
                { 
                    link: "/",
                    text: "Privacy",
                    icon: <BookLock />
                },
                { 
                    link: "/",
                    text: "Logs",
                    icon: <ScrollText />
                },
            ]
        }          
    ]
    return (
        <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
            <div> 
                <UserItem
                    name="Ricardo Olivari"
                    description="ricardoaot@gmail.com"
                    avatarUrl="https://media.licdn.com/dms/image/D4D03AQFctWJb85x_bg/profile-displayphoto-shrink_100_100/0/1701925373811?e=1726099200&v=beta&t=QhSgXFkfsz0NrPbWpzi0ZewwnvN8mSbQKIn_rJWCkss"
                    online={true}
                    verified={true}
                    shadow={true}
                    onClick={(e:any) => console.log("User item clicked!", e)}
                    
                />
            </div>
            <div className="grow"> 
                <Command style={{ overflow: "visible" }}>
                    <CommandList style={{ overflow: "visible" }}>
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((item: any, itemKey: number) => (
                                    <CommandItem key={itemKey} className="gap-2 font-bold cursor-pointer"> 
                                        {item.icon}
                                        {item.text}
                                    </CommandItem>
                                ))}
                            </CommandGroup> 
                        ))}
                        <CommandSeparator />
                    </CommandList>
                    </Command>

            </div>
            <div> 
                <Link href={"/team"} className="flex items-center gap-2">
                    <Settings />
                    <span>
                        Team Settings
                    </span>
                </Link>
            </div>
        </div>
    )    
}