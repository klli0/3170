import React, { Component } from 'react';
import * as echarts from "echarts";
import * as userService from "../service/userService";
class USATopFiveBar extends Component {
    eChartsRef = React.createRef();

    state = {
        option: {
            title: {
                text: "美国排名前五确诊病例总数",
            },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            },
            yAxis: {},
            series: [
                {
                    name: "确诊病例总数",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20],
                },
            ],
        }
    }
    componentDidMount = async () => {
        const myChart = echarts.init(this.eChartsRef.current);
        const response = await userService.usa_top_five_bar();
        console.log(response)
        const name = response.data.name;
        const value = response.data.value;
        const option = this.state.option
        option.xAxis.data = name
        option.series[0].data = value

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

export default USATopFiveBar;