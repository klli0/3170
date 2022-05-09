import * as echarts from 'echarts';
import React, { Component } from 'react';
import china from '../resources/echartsdata-main/alichina.json';

echarts.registerMap("china", china);

/*2022/05/08*/



class ChinaMap extends Component {

    constructor(props) {
        super(props);
        this.eChartsRef = React.createRef();
    }

    state = {
        option: {

            title: {
                // 标题组件
                text: "中国累计新冠确诊统计", // 主标题文本
                left: "center",
                top: 30,
                textStyle: {
                    color: "#000" // 主标题文字的颜色
                }
            },

            visualMap: {
                // 视觉映射组件
                type: "continuous", // 连续型
                left: "right", // visualMap 组件离容器左侧的距离,值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。
                min: 0,        // 指定允许的最小值
                max: 5000,      // 指定允许的最大值,这里进行动态设置
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
                text: [`最大值：${5000}`, 0],  // 两端的文本,如 `['High', 'Low']`
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
                map: "china", // 使用 registerMap 注册的地图名称
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
                top: "0%", // 距离顶部距离
                left: "10%",
                right: "10%",

                data: [
                    {
                        "name": "上海市",
                        "value": "46254"
                    },
                    {
                        "name": "云南省",
                        "value": "2116"
                    },
                    {
                        "name": "内蒙古自治区",
                        "value": "1716"
                    },
                    {
                        "name": "北京市",
                        "value": "1891"
                    },
                    {
                        "name": "台湾省",
                        "value": "56468"
                    },
                    {
                        "name": "吉林省",
                        "value": "39982"
                    },
                    {
                        "name": "四川省",
                        "value": "2002"
                    },
                    {
                        "name": "天津市",
                        "value": "1802"
                    },
                    {
                        "name": "宁夏回族自治区",
                        "value": "122"
                    },
                    {
                        "name": "安徽省",
                        "value": "1063"
                    },
                    {
                        "name": "山东省",
                        "value": "2678"
                    },
                    {
                        "name": "山西省",
                        "value": "415"
                    },
                    {
                        "name": "广东省",
                        "value": "6986"
                    },
                    {
                        "name": "广西壮族自治区",
                        "value": "1573"
                    },
                    {
                        "name": "新疆维吾尔自治区",
                        "value": "999"
                    },
                    {
                        "name": "江苏省",
                        "value": "2180"
                    },
                    {
                        "name": "江西省",
                        "value": "1198"
                    },
                    {
                        "name": "河北省",
                        "value": "1993"
                    },
                    {
                        "name": "河南省",
                        "value": "2883"
                    },
                    {
                        "name": "浙江省",
                        "value": "2998"
                    },
                    {
                        "name": "海南省",
                        "value": "288"
                    },
                    {
                        "name": "湖北省",
                        "value": "68398"
                    },
                    {
                        "name": "湖南省",
                        "value": "1374"
                    },
                    {
                        "name": "澳门",
                        "value": "82"
                    },
                    {
                        "name": "甘肃省",
                        "value": "681"
                    },
                    {
                        "name": "福建省",
                        "value": "3005"
                    },
                    {
                        "name": "西藏自治区",
                        "value": "1"
                    },
                    {
                        "name": "贵州省",
                        "value": "179"
                    },
                    {
                        "name": "辽宁省",
                        "value": "1617"
                    },
                    {
                        "name": "重庆市",
                        "value": "694"
                    },
                    {
                        "name": "陕西省",
                        "value": "3276"
                    },
                    {
                        "name": "青海省",
                        "value": "93"
                    },
                    {
                        "name": "香港",
                        "value": "329147"
                    },
                    {
                        "name": "黑龙江省",
                        "value": "2877"
                    }
                ]

            }
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
            margin: 10,
            marginLeft: 200
        }}></div>;
    }
}

export default ChinaMap;