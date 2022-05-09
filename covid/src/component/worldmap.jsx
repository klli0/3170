import * as echarts from 'echarts';
import React, { Component } from 'react';
import world from '../resources/world.json';

echarts.registerMap("world", world);

/*2022/05/08*/ 

class WorldMap extends Component {

    constructor(props){
        super(props);
        this.eChartsRef = React.createRef();
    }

    state = {
        option: {

            title: {
                // 标题组件
                text: "USA Covid-17 Statistics", // 主标题文本
                top: 30,
                left: "center",
                textStyle: {
                    color: "#000" // 主标题文字的颜色
                }
            },

            visualMap: {
                // 视觉映射组件
                type: "continuous", // 连续型
                left: "right", // visualMap 组件离容器左侧的距离,值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。
                min: 500000,
                max: 38000000,
                inRange: {     // 定义 **在选中范围中** 的视觉元素
                    // 图元的颜色
                    // 这里以这数组所填写的颜色点作为基准，形成一种『渐变』的色带，数据映射到这个色带上
                    color: [ // 橘色效果
                    "#fff",
                    "#fedeb5",
                    "#f96a35",
                    "#c3380e",
                    "#942005"
                    ]
                },
                text: [`最大值：${38000000}`, 0],  // 两端的文本,如 `['High', 'Low']`
                textStyle: {
                    color: "#000" // visualMap 文字的颜色。
                },
                calculable: true
            },

            toolbox: {
                // 工具导航
                show: true, // 是否显示工具栏组件。
                //orient: 'vertical', // 工具栏 icon 的布局朝向。
                left: "right",         // 工具栏组件离容器左侧的距离
                top: "top",           // 工具栏组件离容器上侧的距离
                feature: {   // 各工具配置项
                    // dataView: { readOnly: false }, // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                    restore: {},     // 配置项还原
                    saveAsImage: {}  // 保存为图片
                }
            },

            tooltip: {
                // 提示框
                trigger: "item", // 触发类型
                showDelay: 0, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
                transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
                formatter: function (params) { // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                    let { data = {} } = params; // 第一个参数 `params` 是 formatter 需要的数据集
                    let { value = 0 } = data;  // 传入的数据值
                    // params.name 数据名，类目名
                    return `${params.name}<br/>累计确诊人数: ${value}`;
                }
            },

            series: {
                // 地图,可以是数组，多个
                type: "map",
                map: "world", // 使用 registerMap 注册的地图名称
                label: { // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                    show: false, //显示省市名称
                    position: [1, 100], // 相对的百分比
                    fontSize: 12,
                    offset: [2, 0], // 是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。
                    align: "left" // 文字水平对齐方式，默认自动。
                },
                itemStyle: { // 地图区域的多边形 图形样式
                    areaColor: "#fff" // 地图图形颜色
                },
                roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 `'scale'` 或者 `'move'`。设置成 `true` 为都开启
                zoom: 1, // 当前视角的缩放比例
                scaleLimit: { // 滚轮缩放的极限控制，默认的缩放为`1`
                    max: 2, // 最大的缩放值
                    min: 1  // 最小的缩放值
                },
                top: "20%", // 距离顶部距离
                left: "10%",
                right: "10%",



                
                
                data: [
                    {name: 'Alabama', value: 4822023},
                    {name: 'Alaska', value: 731449},
                    {name: 'Arizona', value: 6553255},
                    {name: 'Arkansas', value: 2949131},
                    {name: 'California', value: 38041430},
                    {name: 'Colorado', value: 5187582},
                    {name: 'Connecticut', value: 3590347},
                    {name: 'Delaware', value: 917092},
                    {name: 'District of Columbia', value: 632323},
                    {name: 'Florida', value: 19317568},
                    {name: 'Georgia', value: 9919945},
                    {name: 'Hawaii', value: 1392313},
                    {name: 'Idaho', value: 1595728},
                    {name: 'Illinois', value: 12875255},
                    {name: 'Indiana', value: 6537334},
                    {name: 'Iowa', value: 3074186},
                    {name: 'Kansas', value: 2885905},
                    {name: 'Kentucky', value: 4380415},
                    {name: 'Louisiana', value: 4601893},
                    {name: 'Maine', value: 1329192},
                    {name: 'Maryland', value: 5884563},
                    {name: 'Massachusetts', value: 6646144},
                    {name: 'Michigan', value: 9883360},
                    {name: 'Minnesota', value: 5379139},
                    {name: 'Mississippi', value: 2984926},
                    {name: 'Missouri', value: 6021988},
                    {name: 'Montana', value: 1005141},
                    {name: 'Nebraska', value: 1855525},
                    {name: 'Nevada', value: 2758931},
                    {name: 'New Hampshire', value: 1320718},
                    {name: 'New Jersey', value: 8864590},
                    {name: 'New Mexico', value: 2085538},
                    {name: 'New York', value: 19570261},
                    {name: 'North Carolina', value: 9752073},
                    {name: 'North Dakota', value: 699628},
                    {name: 'Ohio', value: 11544225},
                    {name: 'Oklahoma', value: 3814820},
                    {name: 'Oregon', value: 3899353},
                    {name: 'Pennsylvania', value: 12763536},
                    {name: 'Rhode Island', value: 1050292},
                    {name: 'South Carolina', value: 4723723},
                    {name: 'South Dakota', value: 833354},
                    {name: 'Tennessee', value: 6456243},
                    {name: 'Texas', value: 26059203},
                    {name: 'Utah', value: 2855287},
                    {name: 'Vermont', value: 626011},
                    {name: 'Virginia', value: 8185867},
                    {name: 'Washington', value: 6897012},
                    {name: 'West Virginia', value: 1855413},
                    {name: 'Wisconsin', value: 5726398},
                    {name: 'Wyoming', value: 576412},
                    {name: 'Puerto Rico', value: 3667084}
                ]


            },
        }
    }

    componentDidMount() {


        var myChart = echarts.init(this.eChartsRef.current);

        myChart.setOption(this.state.option);

    }
    render() {
        return <div ref={this.eChartsRef} style={{
            width: 1200,
            height: 800,
            margin: 10
        }}></div>;
    }
}

export default WorldMap;