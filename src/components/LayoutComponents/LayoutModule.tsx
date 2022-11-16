import React from 'react'
import SplitScreen from './SplitScreen'


const LeftComponentExample = () => {
    return <h1 style={{backgroundColor: 'lightGreen'}}>Left component</h1>
}

const RightComponentExample = () => {
    return <h1 style={{backgroundColor: 'lightBlue'}}>Right component</h1>
}

const LayoutModule = () => {
    return (
        <div>
            <SplitScreen left={LeftComponentExample} right={RightComponentExample} />
        </div>
    )
}

export default LayoutModule
