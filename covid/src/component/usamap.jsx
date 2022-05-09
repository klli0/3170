import * as echarts from 'echarts';
import React, { Component } from 'react';
import usa from '../resources/usageo.json';

/*2022/05/08*/

echarts.registerMap('usa', usa, {
    // 把阿拉斯加移到美国主大陆左下方
    Alaska: {
        left: -131,
        top: 25,
        width: 15
    },
    // 夏威夷
    Hawaii: {
        left: -110,
        top: 28,
        width: 5
    },
    // 波多黎各（因为名字有空格，所以写为字符串的形式）
    'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2
    }
});



class USAMap extends Component {

    constructor(props) {
        super(props);
        this.eChartsRef = React.createRef();
    }

    state = {
        option: {

            title: {
                // 标题组件
                text: "美国累计新冠确诊统计", // 主标题文本
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
                min: 0,
                max: 1000000,
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
                text: [`最大值：${1000000}`, 0],  // 两端的文本,如 `['High', 'Low']`
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
                    let { value } = data;  // 传入的数据值
                    // params.name 数据名，类目名
                    return `${params.name}<br/>累计确诊人数: ${value}`;
                }
            },

            series: {
                // 地图,可以是数组，多个
                type: "map",
                map: "usa", // 使用 registerMap 注册的地图名称
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
                zoom: 1.2, // 当前视角的缩放比例
                scaleLimit: { // 滚轮缩放的极限控制，默认的缩放为`1`
                    max: 2, // 最大的缩放值
                    min: 1  // 最小的缩放值
                },
                top: "20%", // 距离顶部距离
                left: "10%",
                right: "10%",





                data: [
                    {
                        "name": "Alaska",
                        "value": "243466"
                    },
                    {
                        "name": "Alabama",
                        "value": "1299729"
                    },
                    {
                        "name": "Arkansas",
                        "value": "834995"
                    },
                    {
                        "name": "American Samoa",
                        "value": "5766"
                    },
                    {
                        "name": "Arizona",
                        "value": "2019174"
                    },
                    {
                        "name": "California",
                        "value": "9177609"
                    },
                    {
                        "name": "Colorado",
                        "value": "1379243"
                    },
                    {
                        "name": "Connecticut",
                        "value": "751810"
                    },


                    {
                        "name": "DC",
                        "value": "141355"
                    },
                    {
                        "name": "DDelawareE",
                        "value": "261399"
                    },
                    {
                        "name": "Florida",
                        "value": "5908075"
                    },


                    {
                        "name": "FSM",
                        "value": "9"
                    },
                    {
                        "name": "Georgia",
                        "value": "2509160"
                    },


                    {
                        "name": "Guam",
                        "value": "47973"
                    },
                    {
                        "name": "Hawaii",
                        "value": "238763"
                    },
                    {
                        "name": "Iowa",
                        "value": "762036"
                    },
                    {
                        "name": "Idaho",
                        "value": "445545"
                    },
                    {
                        "name": "Illinois",
                        "value": "3114036"
                    },
                    {
                        "name": "Indiana",
                        "value": "1696759"
                    },
                    {
                        "name": "Kansas",
                        "value": "773796"
                    },
                    {
                        "name": "Kentucky",
                        "value": "1325964"
                    },
                    {
                        "name": "Louisiana",
                        "value": "1171633"
                    },
                    {
                        "name": "Massachusetts",
                        "value": "1738231"
                    },
                    {
                        "name": "Maryland",
                        "value": "1025925"
                    },
                    {
                        "name": "Maine",
                        "value": "242033"
                    },
                    {
                        "name": "Michigan",
                        "value": "2411464"
                    },
                    {
                        "name": "Minnesota",
                        "value": "1443859"
                    },
                    {
                        "name": "Missouri",
                        "value": "1421159"
                    },


                    {
                        "name": "Northern Marianas",
                        "value": "11263"
                    },
                    {
                        "name": "Mississippi",
                        "value": "796840"
                    },
                    {
                        "name": "Montana",
                        "value": "273489"
                    },
                    {
                        "name": "North Carolina",
                        "value": "2658907"
                    },
                    {
                        "name": "North Dakota",
                        "value": "240713"
                    },
                    {
                        "name": "Nebraska",
                        "value": "479181"
                    },
                    {
                        "name": "New Hampshire",
                        "value": "307528"
                    },
                    {
                        "name": "New Jersey",
                        "value": "2244918"
                    },
                    {
                        "name": "New Mexico",
                        "value": "521018"
                    },


                    {
                        "name": "Nevada",
                        "value": "717368"
                    },
                    {
                        "name": "New York",
                        "value": "2750530"
                    },
                    {
                        "name": "NYC",
                        "value": "2361037"
                    },
                    {
                        "name": "Ohio",
                        "value": "2688327"
                    },
                    {
                        "name": "Oklahoma",
                        "value": "1039415"
                    },
                    {
                        "name": "Oregon",
                        "value": "714346"
                    },
                    {
                        "name": "Pennsylvania",
                        "value": "2808171"
                    },


                    {
                        "name": "Puerto Rico",
                        "value": "516612"
                    },


                    {
                        "name": "PW",
                        "value": "4396"
                    },
                    {
                        "name": "Rhode Island",
                        "value": "350016"
                    },


                    {
                        "name": "RMI",
                        "value": "17"
                    },
                    {
                        "name": "South Carolina",
                        "value": "1474279"
                    },
                    {
                        "name": "South Dakota",
                        "value": "237535"
                    },
                    {
                        "name": "Tennessee",
                        "value": "2027895"
                    },
                    {
                        "name": "Texas",
                        "value": "6725359"
                    },
                    {
                        "name": "Utah",
                        "value": "930558"
                    },
                    {
                        "name": "Virginia",
                        "value": "1691279"
                    },
                    {
                        "name": "U.S. Virgin Islands",
                        "value": "16091"
                    },
                    {
                        "name": "Vermont",
                        "value": "112620"
                    },
                    {
                        "name": "Washington",
                        "value": "1487969"
                    },
                    {
                        "name": "Wisconsin",
                        "value": "1601444"
                    },
                    {
                        "name": "West Virginia",
                        "value": "499796"
                    },
                    {
                        "name": "Wyoming",
                        "value": "156392"
                    }
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
            margin: 10,
            marginLeft: 200
        }}></div>;
    }
}

export default USAMap;