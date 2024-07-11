'use client';
export default function UserItem(){
    return <div className="flex items-center justify-items-start gap-2 border rounded-[8px] p-2"> 
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>RO</p>
        </div>
        <div>
            <p className="text-[16px] font-bold"> Ricardo Olivari</p>
            <p className="text-[12px] text-neutral-500"> ricardoaot@gmail.com</p>        
        </div>
    </div>
}