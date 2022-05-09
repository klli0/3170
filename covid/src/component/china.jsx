import React from 'react';
import ChinaBrokenLine from './chinabrokenline';
import ChinaPieChart from './chinapiechart';
import ChinaTopFivaBar from './chinatopfivebar';

const China = () => {
    return (<div><div><ChinaBrokenLine></ChinaBrokenLine></div><div><ChinaPieChart></ChinaPieChart></div><div><ChinaTopFivaBar></ChinaTopFivaBar></div><p style={{ marginLeft: 100 }}>Up to 2022-04-24</p> </div>);
}

export default China;