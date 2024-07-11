'use client';
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = (props:any) => (
    <ResponsiveLine
        data={props.data}
        //colors={{ scheme: 'blues' }}
        colors={{ scheme: 'category10' }}
        //enableArea={true}
        margin={{ top: 30, right: 30, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="step"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        /*legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
                
        ]}
        */
    />
)
export default function Lines () {
  return <>
      <MyResponsiveLine data={linesData}/>
  </>

}

const linesData = [
    {
      "id": "japan",
      "color": "hsl(265, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 162
        },
        {
          "x": "helicopter",
          "y": 152
        },
        {
          "x": "boat",
          "y": 132
        },
        {
          "x": "train",
          "y": 67
        },
        {
          "x": "subway",
          "y": 178
        },
        {
          "x": "bus",
          "y": 225
        },
        {
          "x": "car",
          "y": 111
        },
        {
          "x": "moto",
          "y": 225
        },
        {
          "x": "bicycle",
          "y": 212
        },
        {
          "x": "horse",
          "y": 88
        },
        {
          "x": "skateboard",
          "y": 254
        },
        {
          "x": "others",
          "y": 187
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(42, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 43
        },
        {
          "x": "helicopter",
          "y": 183
        },
        {
          "x": "boat",
          "y": 6
        },
        {
          "x": "train",
          "y": 245
        },
        {
          "x": "subway",
          "y": 169
        },
        {
          "x": "bus",
          "y": 176
        },
        {
          "x": "car",
          "y": 149
        },
        {
          "x": "moto",
          "y": 229
        },
        {
          "x": "bicycle",
          "y": 103
        },
        {
          "x": "horse",
          "y": 120
        },
        {
          "x": "skateboard",
          "y": 69
        },
        {
          "x": "others",
          "y": 46
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(16, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 210
        },
        {
          "x": "helicopter",
          "y": 292
        },
        {
          "x": "boat",
          "y": 251
        },
        {
          "x": "train",
          "y": 250
        },
        {
          "x": "subway",
          "y": 135
        },
        {
          "x": "bus",
          "y": 24
        },
        {
          "x": "car",
          "y": 62
        },
        {
          "x": "moto",
          "y": 9
        },
        {
          "x": "bicycle",
          "y": 152
        },
        {
          "x": "horse",
          "y": 129
        },
        {
          "x": "skateboard",
          "y": 36
        },
        {
          "x": "others",
          "y": 239
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(125, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 247
        },
        {
          "x": "helicopter",
          "y": 28
        },
        {
          "x": "boat",
          "y": 98
        },
        {
          "x": "train",
          "y": 24
        },
        {
          "x": "subway",
          "y": 65
        },
        {
          "x": "bus",
          "y": 141
        },
        {
          "x": "car",
          "y": 97
        },
        {
          "x": "moto",
          "y": 210
        },
        {
          "x": "bicycle",
          "y": 188
        },
        {
          "x": "horse",
          "y": 52
        },
        {
          "x": "skateboard",
          "y": 22
        },
        {
          "x": "others",
          "y": 227
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(103, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 183
        },
        {
          "x": "helicopter",
          "y": 97
        },
        {
          "x": "boat",
          "y": 56
        },
        {
          "x": "train",
          "y": 206
        },
        {
          "x": "subway",
          "y": 29
        },
        {
          "x": "bus",
          "y": 75
        },
        {
          "x": "car",
          "y": 294
        },
        {
          "x": "moto",
          "y": 160
        },
        {
          "x": "bicycle",
          "y": 244
        },
        {
          "x": "horse",
          "y": 107
        },
        {
          "x": "skateboard",
          "y": 269
        },
        {
          "x": "others",
          "y": 241
        }
      ]
    }
  ]