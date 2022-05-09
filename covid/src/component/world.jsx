import React from 'react';
import WorldBrokenLine from './worldbrokenline';
import WorldPieChart from './worldpiechart';
import WorldTopFiveBar from './worldtopfivebar';

const World = () => {
    return (<div><div><WorldBrokenLine></WorldBrokenLine></div><div><WorldPieChart></WorldPieChart></div><div><WorldTopFiveBar></WorldTopFiveBar></div> <p>Up to "20220424"</p></div>);
}

export default World;