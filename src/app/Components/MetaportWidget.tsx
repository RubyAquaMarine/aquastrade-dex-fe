"use client"
import React, { useEffect, useState } from 'react';

import {RubyConfig, SmsConfig, stagingConfig} from '../Utils/metaportNetworkConfig'


const MetaportWidget = () => {
    //const MetaportWidget: React.FC = () => {
    const [metaport, setMetaport] = useState<any | undefined>();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log("MetaportWidget client render ")
            const loadMetaport = async () => {
                console.log("MetaportWidget load ")
                // Load the Metaport library dynamically on the client side
                const Metaport = (await import('@skalenetwork/metaport')).Metaport;

                const metaportInstance = new Metaport(RubyConfig);// Select the Metaport Configuration that suites your Dapp the best or add your own by editing metaportNetworkConfig

                setMetaport(metaportInstance);
            };

            loadMetaport();
        } else {
            console.log("MetaportWidget server render ")
        }
    }, []);

    useEffect(() => {
        if (metaport) {
            console.log('metaport widget initialized');
        }
    }, [metaport]);


    const handleOpenMetaport = () => {
        console.log("open metaport")
        if (metaport) {
            metaport.open();
        } else {
            console.log("open metaport doesn't exist ")
        }
    };

    const handleCloseMetaport = () => {
        console.log("close metaport")
        if (metaport) {
            metaport.close();
        } else {
            console.log("close metaport doesn't exist ")
        }
    };



    return (

        <div id="metaport">



        </div>

    );
};

export default MetaportWidget;
