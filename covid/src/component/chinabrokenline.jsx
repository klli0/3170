import React, { Component } from 'react';
import * as echarts from "echarts";
import * as userService from "../service/userService";
class ChinaBrokenLine extends Component {
    eChartsRef = React.createRef();
    state = {
        option: {
            title: {
                text: "中国新冠累计确诊折线图",
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: [
                    "2021/08/13",
                    "2021/08/14",
                    "2021/08/15",
                    "2021/08/16",
                    "2021/08/17",
                    "2021/08/18",
                ],
                name: "时间"
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                data: [22, 19, 88, 66, 5, 90],
                type: 'line',
                smooth: true
            }]
        }
    }
    componentDidMount = async () => {
        const myChart = echarts.init(this.eChartsRef.current);
        const response = await userService.china_brokenline_chart();
        console.log(response)
        const time = response.data.time;
        const value = response.data.value;
        const option = this.state.option
        option.xAxis.data = time
        option.series[0].data = value

        this.setState({ option })
        console.log(this.state.option)
        myChart.setOption(this.state.option);
    }
    render() {
        return <div ref={this.eChartsRef} style={{
            width: 1200,
            height: 600,
            margin: 100,
            marginLeft: 150
        }}></div>;
    }
}

export default ChinaBrokenLine;