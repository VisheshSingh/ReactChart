import React,  { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
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
        }//this.state
    }//constructor

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() {
        return(
            <div className="Chart">
                <h2>My Chart Component</h2>
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Population by Cities in New York',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayTitle,
                            position: this.props.legendPosition
                        }
                    }}
                    layout={{ }}
                />
            </div>
        );
    }
}
