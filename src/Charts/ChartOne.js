import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class ChartOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Aktien', 'Anleihen', 'ETFs'],
        datasets: [
          {
            label: 'Anteile',
            data: [
              0.12,
              0.58,
              0.3
            ],
            backgroundColor: [
              'rgb(240, 220, 232)',
              'rgb(174, 58, 133)',
              'rgb(123, 85, 157)'
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          width={500}
          height={500}
          options= {{
            legend: {
              display: true,
              position: 'bottom'
            },
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default ChartOne;
