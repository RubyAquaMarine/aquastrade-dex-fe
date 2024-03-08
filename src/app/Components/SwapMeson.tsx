// @ts-nocheck
"use client"

import { MesonToButton } from '@mesonfi/to'


const SwapMeson = () => {
    return (
        <>
            <MesonToButton
                appId='demo'
                type='iframe'
                to={{ network: 'polygon', addr: '0x243f22fbd4C375581aaACFCfff5A43793eb8A74d' }}
                onCompleted={() => { }}
            />

        </>
    );
};

export default SwapMeson;
// type='iframe'