import { render } from "@testing-library/react";
import React, { PureComponent, Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: ['Java', 'Python', 'HTML & CSS', 'Animation and Game Design', 'Unity', 'C#', 'React.js'],
                datasets:[
                    {
                        label:"",
                        data: [
                            4,
                            7,
                            9,
                            2,
                            5,
                            3,
                            5
                        ],
                        backgroundColor: [
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(134,231,123,0.6)'
                        ],

                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        dispalyLegend: true,
        legendPosition: 'right'
    }

    render() {
        return (
            <div className="chart">
                <Bar
                data={this.state.chartData}
                width={"30%"}
                options={{
                    maintainAspectRatio: false,
                    title:{
                        display: this.props.displayTitle,
                        text: 'My Skillset',
                        fontSize:25
                    },
                    legend: {
                        display: this.props.dispalyLegend,
                        position: this.props.legendPosition
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max:10
                            },
                            gridLines: {
                                drawBorder: false
                              },
                        }]
                    },
                }}
                />
            </div>
        )
    }
}


export default Chart;