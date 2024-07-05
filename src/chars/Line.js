import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  plugins,
  scales
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const LineChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Rrr'],
    datasets: [{
      labels: 'grafica',
      data:[3,6,9],
      backgroundColor: 'aqua',
      borderColor: 'black',
      pointBorderColor: 'aqua'
      }
    ]
  }

  const options = {
    plugins:{
      legend : true
    },
    scales:{
      y:{
        min: 3,
        nmax:6
      }
    }
  }
  return (
    <>
      <Line>
        data = {data}
        options = {options}
      </Line>
    </>
  )
}

export default LineChart
