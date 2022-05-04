import React, { Component } from 'react';
import * as echarts from "echarts";
class ChinaPieChart extends Component {
    eChartsRef = React.createRef();
    state = {
        option: {
            title: {
                text: 'Referer of a Website',
                subtext: 'Fake Data',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }
    componentDidMount() {
        const myChart = echarts.init(this.eChartsRef.current);

        myChart.setOption(this.state.option);
        window.onresize = function () {
            myChart.resize();
        };
    }
    render() {
        return <div ref={this.eChartsRef} style={{
            width: 800,
            height: 600,
            margin: 100
        }}></div>;
    }
}

export default ChinaPieChart;