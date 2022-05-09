import React, { Component } from 'react';
import * as echarts from "echarts";
import * as userService from "../service/userService";
class ChinaPieChart extends Component {
    eChartsRef = React.createRef();
    state = {
        option: {
            title: {
                text: '四大经济分区新冠累计确诊',
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
    componentDidMount = async () => {
        const myChart = echarts.init(this.eChartsRef.current);
        const response = await userService.china_pie_chart();
        console.log(response)
        const name = response.data.name;
        const value = response.data.value;
        const option = this.state.option
        var data = [];
        for (var i = 0; i < 4; i++) {
            data[i] = {};

            data[i].value = value[i]
            data[i].name = name[i]

        }
        option.series[0].data = data
        this.setState({ option })
        console.log(this.state.option)
        myChart.setOption(this.state.option);
    }
    render() {
        return <div ref={this.eChartsRef} style={{
            width: 800,
            height: 600,
            margin: 100,
            marginLeft: 400
        }}></div>;
    }
}

export default ChinaPieChart;