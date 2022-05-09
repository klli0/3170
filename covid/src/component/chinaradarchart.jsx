import React, { Component } from 'react';
import * as echarts from "echarts";
import * as userService from "../service/userService";
class ChinaRadarChart extends Component {
    eChartsRef = React.createRef();
    state = {
        option: {
            title: {
                text: '三项指标数据'
            },
            legend: {
                data: ['中国', "美国", "世界"]
            },
            tooltip: {
                trigger: 'item'
            },
            radar: {
                indicator: [
                    { name: '病死率', max: 0.05 },
                    { name: '感染率', max: 0.5 },
                    { name: '治愈率', max: 1 },

                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: "中国"
                        },
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: "美国"
                        },
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: "世界"
                        },
                    ]
                }
            ]
        }
    }
    componentDidMount = async () => {
        const myChart = echarts.init(this.eChartsRef.current);
        const response1 = await userService.china_radar_chart();
        console.log(response1)
        const value1 = response1.data.value;
        const option = this.state.option
        var data1 = [];
        for (var i = 0; i < 3; i++) {
            data1.push(value1[i])
        }
        option.series[0].data[0].value = data1

        const response2 = await userService.usa_radar_chart();
        console.log(response2)
        const value2 = response2.data.value;
        var data2 = [];
        for (var i = 0; i < 3; i++) {
            data2.push(value2[i])
        }
        option.series[0].data[1].value = data2

        const response3 = await userService.world_radar_chart();
        console.log(response3)
        const value3 = response3.data.value;
        var data3 = [];
        for (var i = 0; i < 3; i++) {
            data3.push(value3[i])
        }
        option.series[0].data[2].value = data3
        this.setState({ option })
        console.log(this.state.option)
        myChart.setOption(this.state.option);
    }
    render() {
        return <div><div ref={this.eChartsRef} style={{
            width: 1200,
            height: 800,
            margin: 100,
            marginLeft: 200
        }}></div><p style={{ marginLeft: 100 }}>Up to 2022-04-24</p></div>;
    }
}

export default ChinaRadarChart;