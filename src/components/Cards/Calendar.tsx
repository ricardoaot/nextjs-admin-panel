'use client';
import { ResponsiveTimeRange } from '@nivo/calendar'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTimeRange = (props:any) => (
    <ResponsiveTimeRange
        data={props.data}
        from="2018-04-01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[]}
        /*legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
                translateX: -60,
                translateY: -60,
                symbolSize: 20
            }
        ]}*/
    />
)

export default function Calendar () {
    return <Card className='h-[260px]' >
        <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Number of contributions.</CardDescription>
        </CardHeader>
        <CardContent className='h-full grid w-full'>
            <MyResponsiveTimeRange data={timeRangeData} />
        </CardContent>
    </Card> 
}

const timeRangeData = [
    {
      "value": 274,
      "day": "2018-07-19"
    },
    {
      "value": 48,
      "day": "2018-05-17"
    },
    {
      "value": 75,
      "day": "2018-05-18"
    },
    {
      "value": 288,
      "day": "2018-05-26"
    },
    {
      "value": 369,
      "day": "2018-06-08"
    },
    {
      "value": 397,
      "day": "2018-06-05"
    },
    {
      "value": 141,
      "day": "2018-07-25"
    },
    {
      "value": 361,
      "day": "2018-04-08"
    },
    {
      "value": 112,
      "day": "2018-05-16"
    },
    {
      "value": 186,
      "day": "2018-05-07"
    },
    {
      "value": 184,
      "day": "2018-07-08"
    },
    {
      "value": 192,
      "day": "2018-04-19"
    },
    {
      "value": 281,
      "day": "2018-07-10"
    },
    {
      "value": 68,
      "day": "2018-04-03"
    },
    {
      "value": 350,
      "day": "2018-04-05"
    },
    {
      "value": 24,
      "day": "2018-08-02"
    },
    {
      "value": 5,
      "day": "2018-07-04"
    },
    {
      "value": 340,
      "day": "2018-06-03"
    },
    {
      "value": 152,
      "day": "2018-06-26"
    },
    {
      "value": 108,
      "day": "2018-07-24"
    },
    {
      "value": 243,
      "day": "2018-06-24"
    },
    {
      "value": 103,
      "day": "2018-04-17"
    },
    {
      "value": 250,
      "day": "2018-04-22"
    },
    {
      "value": 140,
      "day": "2018-07-15"
    },
    {
      "value": 52,
      "day": "2018-05-24"
    },
    {
      "value": 113,
      "day": "2018-06-04"
    },
    {
      "value": 305,
      "day": "2018-06-11"
    },
    {
      "value": 154,
      "day": "2018-04-06"
    },
    {
      "value": 47,
      "day": "2018-05-22"
    },
    {
      "value": 306,
      "day": "2018-04-23"
    },
    {
      "value": 23,
      "day": "2018-04-01"
    },
    {
      "value": 372,
      "day": "2018-04-21"
    },
    {
      "value": 321,
      "day": "2018-04-16"
    },
    {
      "value": 399,
      "day": "2018-08-07"
    },
    {
      "value": 46,
      "day": "2018-04-11"
    },
    {
      "value": 56,
      "day": "2018-04-14"
    },
    {
      "value": 31,
      "day": "2018-08-01"
    },
    {
      "value": 183,
      "day": "2018-07-02"
    },
    {
      "value": 117,
      "day": "2018-05-12"
    },
    {
      "value": 192,
      "day": "2018-06-19"
    },
    {
      "value": 68,
      "day": "2018-05-09"
    },
    {
      "value": 43,
      "day": "2018-08-09"
    },
    {
      "value": 392,
      "day": "2018-08-03"
    },
    {
      "value": 336,
      "day": "2018-06-22"
    },
    {
      "value": 292,
      "day": "2018-06-17"
    },
    {
      "value": 64,
      "day": "2018-04-29"
    },
    {
      "value": 308,
      "day": "2018-05-02"
    },
    {
      "value": 86,
      "day": "2018-05-23"
    },
    {
      "value": 89,
      "day": "2018-05-11"
    },
    {
      "value": 334,
      "day": "2018-04-18"
    },
    {
      "value": 287,
      "day": "2018-04-15"
    },
    {
      "value": 185,
      "day": "2018-07-26"
    },
    {
      "value": 108,
      "day": "2018-07-06"
    },
    {
      "value": 116,
      "day": "2018-07-12"
    },
    {
      "value": 83,
      "day": "2018-07-23"
    },
    {
      "value": 259,
      "day": "2018-05-03"
    },
    {
      "value": 364,
      "day": "2018-06-18"
    },
    {
      "value": 137,
      "day": "2018-08-05"
    },
    {
      "value": 376,
      "day": "2018-04-02"
    },
    {
      "value": 348,
      "day": "2018-05-10"
    },
    {
      "value": 175,
      "day": "2018-05-01"
    },
    {
      "value": 309,
      "day": "2018-07-09"
    },
    {
      "value": 58,
      "day": "2018-04-12"
    },
    {
      "value": 391,
      "day": "2018-06-13"
    },
    {
      "value": 310,
      "day": "2018-04-10"
    },
    {
      "value": 14,
      "day": "2018-06-14"
    },
    {
      "value": 316,
      "day": "2018-06-12"
    },
    {
      "value": 348,
      "day": "2018-06-02"
    },
    {
      "value": 69,
      "day": "2018-07-29"
    },
    {
      "value": 105,
      "day": "2018-05-28"
    },
    {
      "value": 143,
      "day": "2018-07-05"
    },
    {
      "value": 76,
      "day": "2018-04-27"
    },
    {
      "value": 148,
      "day": "2018-05-21"
    },
    {
      "value": 301,
      "day": "2018-07-28"
    },
    {
      "value": 272,
      "day": "2018-05-14"
    },
    {
      "value": 267,
      "day": "2018-08-11"
    },
    {
      "value": 175,
      "day": "2018-04-07"
    },
    {
      "value": 133,
      "day": "2018-06-25"
    },
    {
      "value": 353,
      "day": "2018-07-13"
    },
    {
      "value": 312,
      "day": "2018-07-07"
    },
    {
      "value": 81,
      "day": "2018-07-03"
    },
    {
      "value": 44,
      "day": "2018-07-27"
    },
    {
      "value": 291,
      "day": "2018-06-23"
    },
    {
      "value": 361,
      "day": "2018-06-29"
    },
    {
      "value": 171,
      "day": "2018-07-17"
    },
    {
      "value": 206,
      "day": "2018-05-20"
    },
    {
      "value": 389,
      "day": "2018-06-06"
    },
    {
      "value": 198,
      "day": "2018-06-16"
    },
    {
      "value": 127,
      "day": "2018-05-05"
    },
    {
      "value": 393,
      "day": "2018-06-27"
    },
    {
      "value": 313,
      "day": "2018-07-16"
    },
    {
      "value": 214,
      "day": "2018-06-20"
    },
    {
      "value": 298,
      "day": "2018-06-15"
    },
    {
      "value": 325,
      "day": "2018-08-04"
    },
    {
      "value": 90,
      "day": "2018-08-06"
    },
    {
      "value": 105,
      "day": "2018-06-09"
    },
    {
      "value": 207,
      "day": "2018-04-24"
    },
    {
      "value": 180,
      "day": "2018-04-26"
    },
    {
      "value": 201,
      "day": "2018-05-25"
    },
    {
      "value": 251,
      "day": "2018-07-21"
    },
    {
      "value": 237,
      "day": "2018-04-13"
    },
    {
      "value": 6,
      "day": "2018-07-14"
    },
    {
      "value": 53,
      "day": "2018-04-04"
    },
    {
      "value": 134,
      "day": "2018-06-01"
    },
    {
      "value": 291,
      "day": "2018-08-08"
    },
    {
      "value": 275,
      "day": "2018-06-10"
    },
    {
      "value": 326,
      "day": "2018-07-18"
    },
    {
      "value": 334,
      "day": "2018-05-31"
    },
    {
      "value": 0,
      "day": "2018-05-06"
    },
    {
      "value": 194,
      "day": "2018-07-30"
    },
    {
      "value": 185,
      "day": "2018-05-19"
    },
    {
      "value": 45,
      "day": "2018-05-30"
    }
  ]