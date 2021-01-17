import React from 'react';
import {GiEarthAsiaOceania} from 'react-icons/gi';
import {MdAirplanemodeActive} from 'react-icons/md';
import {MdTimer} from 'react-icons/md';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import '../components/styles/styles.css';

export const StatsData=[
    {
        icons: (<GiEarthAsiaOceania className="blue" />),
        title: "Travel Anywhere",
        description: "Travel with trusted partners with affordable rate"
    },
    {
        icons: (<MdAirplanemodeActive className="brown" />),
        title: "Easy Flight",
        description: "Tour hassle free, ticket and other documents will be proccessed by us."
    },
    {
        icons: (<MdTimer className="red" />),
        title: "Fast Support",
        description: "Experience the fastest support from our fast-track service."
    },
    {
        icons: (<FaRegMoneyBillAlt className="green" />),
        title: "Affordable",
        description: "Find the best deals from us with no compromise on our service."
    },
    
]

