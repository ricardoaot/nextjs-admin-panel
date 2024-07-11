'use client';
import { ResponsiveBump } from '@nivo/bump'
import bumpData from './bumpData'
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
 } from '../ui/card';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBump = (props:any) => {
    return <ResponsiveBump
        data={props.data}
        colors={
            //{ scheme: 'spectral' }
            { scheme: 'blues' }
            //{ scheme: 'blue_green' }
        }
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        useMesh={true} // add this property
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Ranking',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        margin={{ top: 40, right: 80, bottom: 40, left: 50 }}
        axisRight={null}
    />
}

export default function General () {
    
    return <Card className='w-full'> 
        <CardHeader>
            <CardTitle>Performance Indicators</CardTitle>
            <CardDescription>This Graph explains the ranking of a particular item over the course of several years.</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4 h-[300px]'>
            <MyResponsiveBump className='w-full h-full' data={bumpData}/> 
        </CardContent>
    </Card>
}