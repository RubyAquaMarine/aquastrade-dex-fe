"use client"
import React, { useEffect, useState } from 'react';
import { Metaport } from "skale_metaport";
import 'skale_metaport/dist/style.css'
import {RubyConfig, SmsConfig, stagingConfig} from '../Utils/metaportNetworkConfigV2'


const MetaportWidgetV2 = () => {
   
    return (<div>
        <Metaport config={RubyConfig}/>
    </div>)
};

export default MetaportWidgetV2;
