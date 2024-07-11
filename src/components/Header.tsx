'use client';

import { BellIcon, ChevronDown } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { truncate } from "fs";

export default function Header() {
    const [notifications, setNotifications] = useState<any>([
        {
            text: "New message from John Doe",
            date: "10-01-2023",
            read: true
        },
        {
            text: "Maria has updated her profile",
            date: "21-01-2023",
            read: false
        },
    ])
    return (
        <div className="grid grid-cols-2 gap-4 border-b p-4">
            <CommandDemo />
            <div className="flex items-center justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger className="relative border rounded-lg p-2 h-12" >                        
                        <div 
                            className = {`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 
                                ${
                                    notifications.find(
                                        (notification: any) => { 
                                            return notification.read===true
                                        }
                                    )?'bg-green-500': 'bg-neutral-200'
                                } 
                            `} 
                        >
                        </div>
                        <BellIcon className="h-8 w-4" />
                       
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {notifications.map(
                            (notification: any, index: number) => {
                                return (
                                    <DropdownMenuItem 
                                        key={index}
                                        className="p-1 cursor-pointer hover:bg-neutral-500 transition 
                                        flex items-start gap-2"    
                                    >
                                        <div className= {`h-3 w-3 rounded-full my-1 ${notification.read ? 'bg-green-500' : "bg-neutral-200"}`}></div>
                                        <div>
                                            <p>{notification.text}</p>
                                            <p className="text-xs text-neutral-500">
                                                {notification.date}
                                            </p>
                                        </div>
                                    </DropdownMenuItem>
                                )
                            }
                        )}
                        
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </div>
    )
}