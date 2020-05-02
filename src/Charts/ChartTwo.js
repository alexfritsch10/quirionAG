import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

class ChartTwo extends Component {

  constructor(props){
    super(props);
    this.state = {
      labels: [],
      datasets: []
    }
  }

  componentDidMount() {
    this.addStockData('GOOG');
    this.addStockData('AAPL');
    this.addStockData('FB');
    this.addStockData('AMZN');
  }

  addStockData = (stockSymbol) => {

    const apiEndPoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ stockSymbol }&outputsize=compact&apikey=PR1V5TOYEANGWWMT`;

    axios.get( apiEndPoint ).then(response => {

      const dataPoints = response.data['Time Series (Daily)'];
      if(dataPoints != null) {
        if (!this.state.labels.length) {
          const days = Object.keys(dataPoints);
          this.setState({labels: days.reverse()});
        }

        const pricesClosed = Object.values(dataPoints).map(value => {
          return parseFloat(value['4. close']);
        });

        const randomColor = this.random_rgba();

        const newStockSymbol = {
          label: stockSymbol,
          data: pricesClosed.reverse(),
          fill: false,
          lineTension: 0.1,
          backgroundColor: randomColor,
          borderColor: this.changeA(randomColor),
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverBackgroundColor: randomColor,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
        };

        let dataSets = this.state.datasets.slice();
        dataSets = dataSets.concat(newStockSymbol);
        this.setState({datasets: dataSets});

      }

    });

  }

  random_rgba = () => {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ', 0.9)';
  };

  changeA = rgba => {
    return rgba.replace('0.9', '0.8');
  };

  render() {
      return (
        <div className="chart">
          <Line
            data={this.state}
            width={800}
            height={500}
            options= {{
              legend: {
                display: true,
                position: 'bottom'
              },
              maintainAspectRatio: false
            }}
          />
        </div>)
  }

}

export default ChartTwo;
