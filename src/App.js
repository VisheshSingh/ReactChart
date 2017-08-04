import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Chart } from './components/Chart';

class App extends Component {
    /*constructor(){
        super();
        this.state = {
            chartData:{},
        }
    }

    componentWillMount(){
        console.log('hello');
        this.getChartData();
    }

    getChartData(){
        //Ajax call here
        this.setState=({
            chartData:{
                labels: ["Yonkers", "Buffalo", "Albany", "Rochester", "Syracuse", "Binghamton", "Niagara Falls"],
                datasets: [{
                    label: 'Population',
                    data: [195976, 261310, 97856, 210565, 145170, 47376, 50193],
                    backgroundColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    borderColor: '#000',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                }]
            }//chartData
        })
    }*/

  render() {
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
          </div>
          <Chart />
      </div>
    );
  }
}

export default App;
