import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: [8, 9, 15, 12, 12, 15, 21, 19, 22, 19, 24, 21],
        borderColor: 'rgb(225, 22, 144)',
        borderWidth: '1',
      },
      {
        label: 'Orders',
        data: [10, 12, 17, 13, 15, 25, 22, 26, 24, 22, 28, 29],
        borderColor: 'yellowgreen',
        borderWidth: '1',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Line Chart',
        align: 'start',
      },
      legend: {
        position: 'top',
        align: 'end',
        display: true,
        labels: {
          font: {
            size: 8,
          },
          usePointStyle: true,
        },
      },
    },
  };
  return (
    <div className='chat_container'>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
