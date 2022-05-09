import React from 'react';
import WorldBrokenLine from './worldbrokenline';
import WorldPieChart from './worldpiechart';
import WorldTopFiveBar from './worldtopfivebar';

const World = () => {
    return (<div><div><WorldBrokenLine></WorldBrokenLine></div><div><WorldPieChart></WorldPieChart></div><div><WorldTopFiveBar></WorldTopFiveBar></div> </div>);
}

export default World;