import React from 'react'
import SplitScreen from './SplitScreen'


const LeftComponentExample = () => {
    return <h1 style={{ backgroundColor: 'lightGreen', height: '100vh' }}>Left component</h1>
}

const RightComponentExample = () => {
    return <h1 style={{ backgroundColor: 'lightBlue', height: '100vh' }}>Right component</h1>
}

const LayoutModule = () => {
    return (
        <div>
            <SplitScreen leftSpace={1} rightSpace={2}>
                <LeftComponentExample />
                <RightComponentExample />
            </SplitScreen>
        </div>
    )
}

export default LayoutModule
