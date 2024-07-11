'use client';

import dynamic from "next/dynamic";
import { useState } from "react";
const UserItem = dynamic(() => import('useritem'), { ssr: false });
type Member = {
    email: string;
    full_name: string;
    backgroundColorValue: string;
    role: string;
}

export default function TeamSettings () {


    const [members, setMemebers] = useState<Member[]>([
        {
            email: "string@gmail.com",
            full_name: "string",
            backgroundColorValue: "rgba(125, 24, 66, 1)",
            role: "Admin",
        }
    ]);
    return <div className="grid gap4"> 
        <header>
            <h2 className="text-[36px] font-[700]">Team Settings</h2>
        </header>
        <div>
            <div className="border rounded">
                {members.map((member, index) => (
                    <div key={index}>
                        <UserItem 
                            title={member.full_name}
                            description={member.email}
                            avatarUrl="https://media.licdn.com/dms/image/D4D03AQFctWJb85x_bg/profile-displayphoto-shrink_100_100/0/1701925373811?e=1726099200&v=beta&t=QhSgXFkfsz0NrPbWpzi0ZewwnvN8mSbQKIn_rJWCkss"
                            online={true}
                            verified={true}
                            shadow={true}
                            onClick={(e:any) => console.log("User item clicked!", e)}
                            
                            backgroundColor={member.backgroundColorValue}
                            key={index} {...member} />
                    </div>
                ))}
                Team module
            </div>
        </div>
    </div>
}