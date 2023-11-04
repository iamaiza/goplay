import { Chart as ChartJS } from "chart.js/auto"
import React from 'react';
import { Line } from 'react-chartjs-2';
ChartJS.defaults.plugins.tooltip.enabled = false;
ChartJS.defaults.plugins.legend.display = false;

const Chart = () => {
  const data = {
    labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [
      {
        data:[0, 0.2, 0.4, 0.6, 0.8, 1],
        borderWidth: 0,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          min: 0,
          max: 1,
          stepSize: 0.2,
          font: {
            size: 13
          },
          color: 'rgb(200 200 200)'
        },
        grid: {
          color: "transparent",
        },
        
      },
      x: {
        ticks: {
          font: {
            size: 15
          },
          color: 'rgb(100 116 139)',
        },
        grid: {
          color: "transparent",
        },
      },
    },
  };

  return (
    <div>
      <Line className="tw-w-full tw-h-full" data={data} options={options} />
    </div>
  );
};

export default Chart;