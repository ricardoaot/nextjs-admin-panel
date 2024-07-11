import Calendar from "@/components/Cards/Calendar";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { TableComp } from "@/components/Cards/TableComp";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return <div>
    <div className="grid grid-cols-2 gap-[20px]">
      <General />
      <div className="grid gap-4">
        <Card className="h-full ">
          <CardHeader>
            <CardTitle>Budget Management</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur.</CardDescription>
          </CardHeader>
          <CardContent className='h-[300px] items-center w-full overflow-y-scroll'>
            <TableComp/>
          </CardContent>
        </Card>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 pt-4 h-[500px] overflow-hidden">
      <Card className="h-full">
        <CardHeader>
            <CardTitle>User Bills</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur.
            </CardDescription>
        </CardHeader>
        <CardContent className='h-[300px] items-center w-full overflow-y-scroll'>
          <DataTableDemo />
        </CardContent>
      </Card>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Pipeline diagram</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur.</CardDescription>
        </CardHeader>
        <CardContent className='h-[300px] flex items-center w-full'>
          <Lines />
        </CardContent>
      </Card>

    </div>
  </div>
  
}
