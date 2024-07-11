'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import dynamic from "next/dynamic";
import { useState } from "react";
const UserItem = dynamic(() => import('useritem'), { ssr: false });
type Member = {
    email: string;
    full_name: string;
    backgroundColorValue: string;
    role: string;
    status?: string;
    avatarUrl?: string;
}

export default function TeamSettings () {


    const [members, setMemebers] = useState<Member[]>([
        {
            email: "Ricardoaot@gmail.com",
            full_name: "Ricardo Olivari",
            backgroundColorValue: "rgba(125, 24, 66, 1)",
            role: "admin",
            avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFctWJb85x_bg/profile-displayphoto-shrink_100_100/0/1701925373811?e=1726099200&v=beta&t=QhSgXFkfsz0NrPbWpzi0ZewwnvN8mSbQKIn_rJWCkss",
        },
        {
            email: "juanmp@gmail.com",
            full_name: "Juan Mariano",
            backgroundColorValue: "rgba(125, 24, 66, 1)",
            role: "viewer",
            avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707d"
        },
        {
            email: "Marina@gmail.com",
            full_name: "Marina Mora",
            backgroundColorValue: "rgba(125, 24, 66, 1)",
            role: "admin",
            status: "pending",
        }
    ]);
    return <div className="grid gap4"> 
        <header>
            <h2 className="text-[36px] font-[700]">Team Settings</h2>
        </header>
        <div className="grid gap-4">
            <div>
                <div className="flex items-center justify-between gap-4">
                    <Command className="rounded-lg border">
                        <CommandInput placeholder="Type an email to invite..." />
                    </Command>
                    <Button variant={"outline"}>Add a new member</Button>
                </div>
            </div>
            <div className="border rounded">
                {members && members.map((member, index) => (
                    <div key={index}
                        className=
                            "grid grid-cols-6 border-b last:border-b-0 items-center justify-between pr-3"
                    >
                        <div className="col-span-2">

                            <UserItem 
                                name={member.full_name}
                                description={member.email}
                                avatarUrl={member.avatarUrl}
                                online={true}
                                verified={false}
                                shadow={true}
                                border={false}
                                onClick={(e:any) => console.log("User item clicked!", e)}
                                
                                backgroundColor={member.backgroundColorValue}
                                key={index}  />
                            
                        </div>
                        <div className="col-span-3 flex gap-2">
                            <Badge className={`tag ${member.role}`}>
                                {member.role}
                            </Badge>
                            {member.status && <Badge className={`tag ${member.status}`}>
                                {member.status}
                            </Badge>}
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <Button variant={"outline"} >Remove</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}