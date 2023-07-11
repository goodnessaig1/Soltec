import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Stacked Chart',
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
        label: 'Analysis',
        data: [10, 15, 8, 12, 20, 14, 18, 16, 10, 12, 15, 8],
        backgroundColor: '#fbba52',
      },
      {
        label: 'Sales',
        data: [8, 12, 15, 10, 16, 20, 14, 12, 18, 10, 8, 15],
        backgroundColor: '#ff7373',
      },
      {
        label: 'Orders',
        data: [18, 10, 12, 15, 8, 12, 15, 14, 20, 16, 10, 8],
        backgroundColor: '#8de8fc',
      },
    ],
  };

  return (
    <div className='chat_container'>
      {/* <h2>Stacked Chart</h2> */}
      <Bar data={data} options={options} />
      {/* <Bar data={data} /> */}
    </div>
  );
};
export default BarChart;
