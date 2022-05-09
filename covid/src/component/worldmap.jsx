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
                min: 0,
                max: 100000,
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
                text: [`最大值：${890000}`, 0],  // 两端的文本,如 `['High', 'Low']`
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
                

                nameMap:{
                    "Afghanistan": "阿富汗",
                    "Angola": "安哥拉",
                    "Albania": "阿尔巴尼亚",
                    "Algeria": "阿尔及利亚",
                    "Argentina": "阿根廷",
                    "Armenia": "亚美尼亚",
                    "Australia": "澳大利亚",
                    "Austria": "奥地利",
                    "Azerbaijan": "阿塞拜疆",
                    "Bahamas": "巴哈马",
                    "Bangladesh": "孟加拉国",
                    "Belgium": "比利时",
                    "Benin": "贝宁",
                    "Burkina Faso": "布基纳法索",
                    "Burundi": "布隆迪",
                    "Bulgaria": "保加利亚",
                    "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
                    "Belarus": "白俄罗斯",
                    "Belize": "伯利兹",
                    "Bermuda": "百慕大群岛",
                    "Bolivia": "玻利维亚",
                    "Brazil": "巴西",
                    "Brunei": "文莱",
                    "Bhutan": "不丹",
                    "Botswana": "博茨瓦纳",
                    "Cambodia": "柬埔寨",
                    "Cameroon": "喀麦隆",
                    "Canada": "加拿大",
                    "Central African Rep.": "中非共和国",
                    "Chad": "乍得",
                    "Chile": "智利",
                    "China": "中国",
                    "Colombia": "哥伦比亚",
                    "Congo": "刚果",
                    "Costa Rica": "哥斯达黎加",
                    "Côte d’Ivoire": "科特迪瓦",
                    "Croatia": "克罗地亚",
                    "Cuba": "古巴",
                    "Cyprus": "塞浦路斯",
                    "Czech Rep.": "捷克共和国",
                    "Dem. Rep. Korea": "韩国",
                    "Dem. Rep. Congo": "民主刚果",
                    "Denmark": "丹麦",
                    "Djibouti": "吉布提",
                    "Dominican Rep.": "多米尼加共和国",
                    "Ecuador": "厄瓜多尔",
                    "Egypt": "埃及",
                    "El Salvador": "萨尔瓦多",
                    "Eq. Guinea": "赤道几内亚",
                    "Eritrea": "厄立特里亚",
                    "Estonia": "爱沙尼亚",
                    "Ethiopia": "埃塞俄比亚",
                    "Falkland Is.": "福克兰群岛",
                    "Fiji": "斐济",
                    "Finland": "芬兰",
                    "France": "法国",
                    "French Guiana": "法属圭亚那",
                    "Fr. S. Antarctic Lands": "法属南部领地",
                    "Gabon": "加蓬",
                    "Gambia": "冈比亚",
                    "Germany": "德国",
                    "Georgia": "佐治亚州",
                    "Ghana": "加纳",
                    "Greece": "希腊",
                    "Greenland": "格陵兰",
                    "Guatemala": "危地马拉",
                    "Guinea": "几内亚",
                    "Guinea-Bissau": "几内亚比绍",
                    "Guyana": "圭亚那",
                    "Haiti": "海地",
                    "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
                    "Honduras": "洪都拉斯",
                    "Hungary": "匈牙利",
                    "Iceland": "冰岛",
                    "India": "印度",
                    "Indonesia": "印度尼西亚",
                    "Iran": "伊朗",
                    "Iraq": "伊拉克",
                    "Ireland": "爱尔兰",
                    "Israel": "以色列",
                    "Italy": "意大利",
                    "Ivory Coast": "象牙海岸",
                    "Jamaica": "牙买加",
                    "Japan": "日本",
                    "Jordan": "乔丹",
                    "Kashmir": "克什米尔",
                    "Kazakhstan": "哈萨克斯坦",
                    "Kenya": "肯尼亚",
                    "Kosovo": "科索沃",
                    "Kuwait": "科威特",
                    "Kyrgyzstan": "吉尔吉斯斯坦",
                    "Laos": "老挝",
                    "Lao PDR": "老挝人民民主共和国",
                    "Latvia": "拉脱维亚",
                    "Lebanon": "黎巴嫩",
                    "Lesotho": "莱索托",
                    "Liberia": "利比里亚",
                    "Libya": "利比亚",
                    "Lithuania": "立陶宛",
                    "Luxembourg": "卢森堡",
                    "Madagascar": "马达加斯加",
                    "Macedonia": "马其顿",
                    "Malawi": "马拉维",
                    "Malaysia": "马来西亚",
                    "Mali": "马里",
                    "Mauritania": "毛里塔尼亚",
                    "Mexico": "墨西哥",
                    "Moldova": "摩尔多瓦",
                    "Mongolia": "蒙古",
                    "Montenegro": "黑山",
                    "Morocco": "摩洛哥",
                    "Mozambique": "莫桑比克",
                    "Myanmar": "缅甸",
                    "Namibia": "纳米比亚",
                    "Netherlands": "荷兰",
                    "New Caledonia": "新喀里多尼亚",
                    "New Zealand": "新西兰",
                    "Nepal": "尼泊尔",
                    "Nicaragua": "尼加拉瓜",
                    "Niger": "尼日尔",
                    "Nigeria": "尼日利亚",
                    "Korea": "朝鲜",
                    "Northern Cyprus": "北塞浦路斯",
                    "Norway": "挪威",
                    "Oman": "阿曼",
                    "Pakistan": "巴基斯坦",
                    "Panama": "巴拿马",
                    "Papua New Guinea": "巴布亚新几内亚",
                    "Paraguay": "巴拉圭",
                    "Peru": "秘鲁",
                    "Republic of the Congo": "刚果共和国",
                    "Philippines": "菲律宾",
                    "Poland": "波兰",
                    "Portugal": "葡萄牙",
                    "Puerto Rico": "波多黎各",
                    "Qatar": "卡塔尔",
                    "Republic of Seychelles": "塞舌尔共和国",
                    "Romania": "罗马尼亚",
                    "Russia": "俄罗斯",
                    "Rwanda": "卢旺达",
                    "Samoa": "萨摩亚",
                    "Saudi Arabia": "沙特阿拉伯",
                    "Senegal": "塞内加尔",
                    "Serbia": "塞尔维亚",
                    "Sierra Leone": "塞拉利昂",
                    "Slovakia": "斯洛伐克",
                    "Slovenia": "斯洛文尼亚",
                    "Solomon Is.": "所罗门群岛",
                    "Somaliland": "索马里兰",
                    "Somalia": "索马里",
                    "South Africa": "南非",
                    "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑德威奇群岛",
                    "S. Sudan": "南苏丹",
                    "Spain": "西班牙",
                    "Sri Lanka": "斯里兰卡",
                    "Sudan": "苏丹",
                    "Suriname": "苏里南",
                    "Swaziland": "斯威士兰",
                    "Sweden": "瑞典",
                    "Switzerland": "瑞士",
                    "Syria": "叙利亚",
                    "Tajikistan": "塔吉克斯坦",
                    "Tanzania": "坦桑尼亚",
                    "Thailand": "泰国",
                    "The Kingdom of Tonga": "汤加王国",
                    "Timor-Leste": "东帝汶",
                    "Togo": "多哥",
                    "Trinidad and Tobago": "特立尼达和多巴哥",
                    "Tunisia": "突尼斯",
                    "Turkey": "土耳其",
                    "Turkmenistan": "土库曼斯坦",
                    "Uganda": "乌干达",
                    "Ukraine": "乌克兰",
                    "United Arab Emirates": "阿拉伯联合酋长国",
                    "United Kingdom": "大不列颠联合王国",
                    "United Republic of Tanzania": "坦桑尼亚联合共和国",
                    "United States": "美国",
                    "United States of America": "美利坚合众国",
                    "Uruguay": "乌拉圭",
                    "Uzbekistan": "乌兹别克斯坦",
                    "Vanuatu": "瓦努阿图",
                    "Venezuela": "委内瑞拉",
                    "Vietnam": "越南",
                    "West Bank": "西岸",
                    "W. Sahara": "西撒哈拉",
                    "Yemen": "也门",
                    "Zambia": "赞比亚",
                    "Zimbabwe": "津巴布韦"
                },
                
                
                data: [
                    {
                        "name": "不丹",
                        "value": "7"
                    },
                    {
                        "name": "东帝汶",
                        "value": "24"
                    },
                    {
                        "name": "中国",
                        "value": "84324"
                    },
                    {
                        "name": "中非共和国",
                        "value": "19"
                    },
                    {
                        "name": "丹麦",
                        "value": "8210"
                    },
                    {
                        "name": "乌克兰",
                        "value": "7647"
                    },
                    {
                        "name": "乌兹别克斯坦",
                        "value": "1778"
                    },
                    {
                        "name": "乌干达",
                        "value": "75"
                    },
                    {
                        "name": "乌拉圭",
                        "value": "563"
                    },
                    {
                        "name": "乍得",
                        "value": "34"
                    },
                    {
                        "name": "也门共和国",
                        "value": "1"
                    },
                    {
                        "name": "亚美尼亚",
                        "value": "1596"
                    },
                    {
                        "name": "以色列",
                        "value": "15058"
                    },
                    {
                        "name": "伊拉克",
                        "value": "1708"
                    },
                    {
                        "name": "伊朗",
                        "value": "88194"
                    },
                    {
                        "name": "伯利兹",
                        "value": "18"
                    },
                    {
                        "name": "佛得角",
                        "value": "73"
                    },
                    {
                        "name": "俄罗斯",
                        "value": "68622"
                    },
                    {
                        "name": "保加利亚",
                        "value": "1188"
                    },
                    {
                        "name": "克罗地亚",
                        "value": "2009"
                    },
                    {
                        "name": "关岛",
                        "value": "136"
                    },
                    {
                        "name": "冈比亚",
                        "value": "10"
                    },
                    {
                        "name": "冰岛",
                        "value": "1789"
                    },
                    {
                        "name": "几内亚",
                        "value": "954"
                    },
                    {
                        "name": "几内亚比绍",
                        "value": "52"
                    },
                    {
                        "name": "列支敦士登",
                        "value": "82"
                    },
                    {
                        "name": "刚果（布）",
                        "value": "200"
                    },
                    {
                        "name": "刚果（金）",
                        "value": "416"
                    },
                    {
                        "name": "利比亚",
                        "value": "60"
                    },
                    {
                        "name": "利比里亚",
                        "value": "117"
                    },
                    {
                        "name": "加拿大",
                        "value": "43889"
                    },
                    {
                        "name": "加纳",
                        "value": "1279"
                    },
                    {
                        "name": "加蓬",
                        "value": "172"
                    },
                    {
                        "name": "匈牙利",
                        "value": "2383"
                    },
                    {
                        "name": "北马其顿",
                        "value": "1326"
                    },
                    {
                        "name": "北马里亚纳群岛联邦",
                        "value": "14"
                    },
                    {
                        "name": "南苏丹",
                        "value": "4"
                    },
                    {
                        "name": "南非",
                        "value": "4220"
                    },
                    {
                        "name": "博茨瓦纳",
                        "value": "22"
                    },
                    {
                        "name": "卡塔尔",
                        "value": "8525"
                    },
                    {
                        "name": "卢旺达",
                        "value": "154"
                    },
                    {
                        "name": "卢森堡",
                        "value": "3695"
                    },
                    {
                        "name": "印度",
                        "value": "23452"
                    },
                    {
                        "name": "印度尼西亚",
                        "value": "8211"
                    },
                    {
                        "name": "危地马拉",
                        "value": "342"
                    },
                    {
                        "name": "厄瓜多尔",
                        "value": "11183"
                    },
                    {
                        "name": "厄立特里亚",
                        "value": "39"
                    },
                    {
                        "name": "叙利亚",
                        "value": "42"
                    },
                    {
                        "name": "古巴",
                        "value": "1235"
                    },
                    {
                        "name": "吉尔吉斯斯坦",
                        "value": "656"
                    },
                    {
                        "name": "吉布提",
                        "value": "999"
                    },
                    {
                        "name": "哈萨克斯坦",
                        "value": "2334"
                    },
                    {
                        "name": "哥伦比亚",
                        "value": "4881"
                    },
                    {
                        "name": "哥斯达黎加",
                        "value": "681"
                    },
                    {
                        "name": "喀麦隆",
                        "value": "1401"
                    },
                    {
                        "name": "土耳其",
                        "value": "104912"
                    },
                    {
                        "name": "圣其茨和尼维斯",
                        "value": "15"
                    },
                    {
                        "name": "圣卢西亚",
                        "value": "15"
                    },
                    {
                        "name": "圣多美和普林西比",
                        "value": "8"
                    },
                    {
                        "name": "圣巴泰勒米岛",
                        "value": "6"
                    },
                    {
                        "name": "圣文森特和格林纳丁斯",
                        "value": "13"
                    },
                    {
                        "name": "圣皮埃尔和密克隆群岛",
                        "value": "1"
                    },
                    {
                        "name": "圣马丁岛",
                        "value": "38"
                    },
                    {
                        "name": "圣马力诺",
                        "value": "501"
                    },
                    {
                        "name": "圭亚那",
                        "value": "73"
                    },
                    {
                        "name": "坦桑尼亚",
                        "value": "299"
                    },
                    {
                        "name": "埃及",
                        "value": "4092"
                    },
                    {
                        "name": "埃塞俄比亚",
                        "value": "117"
                    },
                    {
                        "name": "塞内加尔",
                        "value": "545"
                    },
                    {
                        "name": "塞尔维亚",
                        "value": "8152"
                    },
                    {
                        "name": "塞拉利昂",
                        "value": "82"
                    },
                    {
                        "name": "塞浦路斯",
                        "value": "804"
                    },
                    {
                        "name": "塞舌尔",
                        "value": "11"
                    },
                    {
                        "name": "墨西哥",
                        "value": "12872"
                    },
                    {
                        "name": "多哥",
                        "value": "90"
                    },
                    {
                        "name": "多米尼克",
                        "value": "16"
                    },
                    {
                        "name": "多米尼加",
                        "value": "5543"
                    },
                    {
                        "name": "奥地利",
                        "value": "14985"
                    },
                    {
                        "name": "委内瑞拉",
                        "value": "298"
                    },
                    {
                        "name": "孟加拉国",
                        "value": "4689"
                    },
                    {
                        "name": "安哥拉",
                        "value": "25"
                    },
                    {
                        "name": "安圭拉",
                        "value": "3"
                    },
                    {
                        "name": "安提瓜和巴布达",
                        "value": "24"
                    },
                    {
                        "name": "安道尔",
                        "value": "731"
                    },
                    {
                        "name": "尼加拉瓜",
                        "value": "10"
                    },
                    {
                        "name": "尼日利亚",
                        "value": "1095"
                    },
                    {
                        "name": "尼日尔",
                        "value": "681"
                    },
                    {
                        "name": "尼泊尔",
                        "value": "48"
                    },
                    {
                        "name": "巴勒斯坦",
                        "value": "441"
                    },
                    {
                        "name": "巴哈马",
                        "value": "70"
                    },
                    {
                        "name": "巴基斯坦",
                        "value": "11155"
                    },
                    {
                        "name": "巴巴多斯",
                        "value": "76"
                    },
                    {
                        "name": "巴布亚新几内亚",
                        "value": "8"
                    },
                    {
                        "name": "巴拉圭",
                        "value": "213"
                    },
                    {
                        "name": "巴拿马",
                        "value": "4992"
                    },
                    {
                        "name": "巴林",
                        "value": "2506"
                    },
                    {
                        "name": "巴西",
                        "value": "52995"
                    },
                    {
                        "name": "布基纳法索",
                        "value": "629"
                    },
                    {
                        "name": "布隆迪共和国",
                        "value": "12"
                    },
                    {
                        "name": "希腊",
                        "value": "2490"
                    },
                    {
                        "name": "库拉索岛",
                        "value": "14"
                    },
                    {
                        "name": "开曼群岛",
                        "value": "66"
                    },
                    {
                        "name": "德国",
                        "value": "150383"
                    },
                    {
                        "name": "意大利",
                        "value": "192994"
                    },
                    {
                        "name": "拉脱维亚",
                        "value": "784"
                    },
                    {
                        "name": "挪威",
                        "value": "7444"
                    },
                    {
                        "name": "捷克",
                        "value": "7236"
                    },
                    {
                        "name": "摩尔多瓦",
                        "value": "2926"
                    },
                    {
                        "name": "摩洛哥",
                        "value": "3758"
                    },
                    {
                        "name": "摩纳哥",
                        "value": "98"
                    },
                    {
                        "name": "文莱",
                        "value": "138"
                    },
                    {
                        "name": "斐济",
                        "value": "18"
                    },
                    {
                        "name": "斯威士兰",
                        "value": "40"
                    },
                    {
                        "name": "斯洛伐克",
                        "value": "1360"
                    },
                    {
                        "name": "斯洛文尼亚",
                        "value": "1373"
                    },
                    {
                        "name": "斯里兰卡",
                        "value": "414"
                    },
                    {
                        "name": "新加坡",
                        "value": "12075"
                    },
                    {
                        "name": "新喀里多尼亚",
                        "value": "18"
                    },
                    {
                        "name": "新西兰",
                        "value": "1114"
                    },
                    {
                        "name": "日本",
                        "value": "12859"
                    },
                    {
                        "name": "智利",
                        "value": "12306"
                    },
                    {
                        "name": "柬埔寨",
                        "value": "122"
                    },
                    {
                        "name": "根西岛",
                        "value": "243"
                    },
                    {
                        "name": "格林那达",
                        "value": "15"
                    },
                    {
                        "name": "格陵兰",
                        "value": "11"
                    },
                    {
                        "name": "格鲁吉亚",
                        "value": "431"
                    },
                    {
                        "name": "梵蒂冈",
                        "value": "9"
                    },
                    {
                        "name": "比利时",
                        "value": "44293"
                    },
                    {
                        "name": "毛里塔尼亚",
                        "value": "7"
                    },
                    {
                        "name": "毛里求斯",
                        "value": "331"
                    },
                    {
                        "name": "沙特阿拉伯",
                        "value": "15102"
                    },
                    {
                        "name": "法国",
                        "value": "122577"
                    },
                    {
                        "name": "法属圭亚那",
                        "value": "107"
                    },
                    {
                        "name": "法属波利尼西亚",
                        "value": "57"
                    },
                    {
                        "name": "法罗群岛",
                        "value": "187"
                    },
                    {
                        "name": "波兰",
                        "value": "10892"
                    },
                    {
                        "name": "波多黎各",
                        "value": "1416"
                    },
                    {
                        "name": "波黑",
                        "value": "1413"
                    },
                    {
                        "name": "泰国",
                        "value": "2854"
                    },
                    {
                        "name": "泽西岛",
                        "value": "255"
                    },
                    {
                        "name": "津巴布韦",
                        "value": "29"
                    },
                    {
                        "name": "洪都拉斯",
                        "value": "519"
                    },
                    {
                        "name": "海地",
                        "value": "62"
                    },
                    {
                        "name": "澳大利亚",
                        "value": "6667"
                    },
                    {
                        "name": "爱尔兰",
                        "value": "18184"
                    },
                    {
                        "name": "爱沙尼亚",
                        "value": "1605"
                    },
                    {
                        "name": "牙买加",
                        "value": "243"
                    },
                    {
                        "name": "特克斯和凯科斯群岛",
                        "value": "11"
                    },
                    {
                        "name": "特立尼达和多巴哥",
                        "value": "115"
                    },
                    {
                        "name": "玻利维亚",
                        "value": "672"
                    },
                    {
                        "name": "瑞典",
                        "value": "17678"
                    },
                    {
                        "name": "瑞士",
                        "value": "28494"
                    },
                    {
                        "name": "瓜德罗普岛",
                        "value": "148"
                    },
                    {
                        "name": "留尼旺",
                        "value": "412"
                    },
                    {
                        "name": "白俄罗斯",
                        "value": "8773"
                    },
                    {
                        "name": "百慕大",
                        "value": "99"
                    },
                    {
                        "name": "直布罗陀",
                        "value": "133"
                    },
                    {
                        "name": "福克兰群岛",
                        "value": "12"
                    },
                    {
                        "name": "科威特",
                        "value": "2614"
                    },
                    {
                        "name": "科特迪瓦",
                        "value": "1077"
                    },
                    {
                        "name": "秘鲁",
                        "value": "21648"
                    },
                    {
                        "name": "突尼斯",
                        "value": "922"
                    },
                    {
                        "name": "立陶宛",
                        "value": "1410"
                    },
                    {
                        "name": "索马里",
                        "value": "328"
                    },
                    {
                        "name": "约旦",
                        "value": "441"
                    },
                    {
                        "name": "纳米比亚",
                        "value": "16"
                    },
                    {
                        "name": "缅甸",
                        "value": "144"
                    },
                    {
                        "name": "罗马尼亚",
                        "value": "10417"
                    },
                    {
                        "name": "美国",
                        "value": "890524"
                    },
                    {
                        "name": "美属维尔京群岛",
                        "value": "54"
                    },
                    {
                        "name": "老挝",
                        "value": "19"
                    },
                    {
                        "name": "肯尼亚",
                        "value": "336"
                    },
                    {
                        "name": "芬兰",
                        "value": "4395"
                    },
                    {
                        "name": "苏丹",
                        "value": "174"
                    },
                    {
                        "name": "苏里南",
                        "value": "10"
                    },
                    {
                        "name": "英国",
                        "value": "143464"
                    },
                    {
                        "name": "英属维尔京群岛",
                        "value": "5"
                    },
                    {
                        "name": "荷兰",
                        "value": "36535"
                    },
                    {
                        "name": "荷兰加勒比地区",
                        "value": "5"
                    },
                    {
                        "name": "荷属圣马丁",
                        "value": "73"
                    },
                    {
                        "name": "莫桑比克",
                        "value": "46"
                    },
                    {
                        "name": "菲律宾",
                        "value": "7192"
                    },
                    {
                        "name": "萨尔瓦多",
                        "value": "250"
                    },
                    {
                        "name": "葡萄牙",
                        "value": "22797"
                    },
                    {
                        "name": "蒙古",
                        "value": "36"
                    },
                    {
                        "name": "蒙特塞拉特",
                        "value": "11"
                    },
                    {
                        "name": "西班牙",
                        "value": "219764"
                    },
                    {
                        "name": "贝宁",
                        "value": "58"
                    },
                    {
                        "name": "赞比亚共和国",
                        "value": "84"
                    },
                    {
                        "name": "赤道几内亚",
                        "value": "214"
                    },
                    {
                        "name": "越南",
                        "value": "270"
                    },
                    {
                        "name": "钻石公主号邮轮",
                        "value": "712"
                    },
                    {
                        "name": "阿塞拜疆",
                        "value": "1592"
                    },
                    {
                        "name": "阿富汗",
                        "value": "1330"
                    },
                    {
                        "name": "阿尔及利亚",
                        "value": "3127"
                    },
                    {
                        "name": "阿尔巴尼亚",
                        "value": "678"
                    },
                    {
                        "name": "阿曼",
                        "value": "1790"
                    },
                    {
                        "name": "阿根廷",
                        "value": "3607"
                    },
                    {
                        "name": "阿联酋",
                        "value": "9281"
                    },
                    {
                        "name": "阿鲁巴",
                        "value": "100"
                    },
                    {
                        "name": "韩国",
                        "value": "10708"
                    },
                    {
                        "name": "马尔代夫",
                        "value": "128"
                    },
                    {
                        "name": "马恩岛",
                        "value": "307"
                    },
                    {
                        "name": "马拉维",
                        "value": "33"
                    },
                    {
                        "name": "马提尼克",
                        "value": "170"
                    },
                    {
                        "name": "马来西亚",
                        "value": "5691"
                    },
                    {
                        "name": "马约特",
                        "value": "339"
                    },
                    {
                        "name": "马耳他",
                        "value": "445"
                    },
                    {
                        "name": "马达加斯加",
                        "value": "121"
                    },
                    {
                        "name": "马里",
                        "value": "325"
                    },
                    {
                        "name": "黎巴嫩",
                        "value": "696"
                    },
                    {
                        "name": "黑山",
                        "value": "319"
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
            margin: 10
        }}></div>;
    }
}

export default WorldMap;