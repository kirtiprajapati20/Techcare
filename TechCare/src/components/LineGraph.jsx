import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
                beginAtZero: false,
                min: 60,
                max: 180,
                stepSize: 20,
                callback: (value) => {
                    if ([60, 80, 100, 120, 140, 160, 180].includes(value)) {
                        return value;
                    }
                },
                padding: 10,
            },
            grid: {
                lineWidth: 1,
                color: 'rgba(0, 0, 0, 0.1)',
            },
        },
        y1: {
            display: false,
        },
    },
};




const labels = ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'];


export const data = {
    labels,
    datasets: [
        {
            label: 'Systolwwwic',
            data: labels.map(() => faker.datatype.number({ min: 60, max: 180 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
            tension: 0.4,
            pointRadius: 8,
            pointHoverRadius: 12,
        },
        {
            label: 'Diastolic',
            data: labels.map(() => faker.datatype.number({ min: 60, max: 180 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
            tension: 0.4,
            pointRadius: 8,
            pointHoverRadius: 12,
        },
    ],
};


export function LineGraph() {
    return (
        <div style={{ width: '100%', height: '100%' }}>

            <Line options={options} data={data} width={null} height={null} />

        </div>
    );
}
