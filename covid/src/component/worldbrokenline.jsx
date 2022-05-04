import React, { Component } from 'react';
import * as echarts from "echarts";

class WorldBrokenLine extends Component {
    eChartsRef = React.createRef();
    state = {
        option: {
            title: {
                text: "折线图数据",
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
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [22, 19, 88, 66, 5, 90],
                type: 'line',
                smooth: true
            }]
        }
    }
    componentDidMount() {
        const myChart = echarts.init(this.eChartsRef.current);

        myChart.setOption(this.state.option);
    }
    render() {
        return <div ref={this.eChartsRef} style={{
            width: 1200,
            height: 400,
            margin: 100
        }}></div>;
    }
}

export default WorldBrokenLine;