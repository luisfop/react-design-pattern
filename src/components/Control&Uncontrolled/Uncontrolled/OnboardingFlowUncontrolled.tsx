import React, { useState } from 'react'

const OnboardingFlowUncontrolled = ({ children, onFinish }: { children: JSX.Element, onFinish: () => void; }) => {


    //NOT FINISHED

    
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentChild = React.Children.toArray(children)[currentIndex]

    return (
        <>
        {currentChild}
        <button>Previous</button>
        <button>Next</button>
        </>
    )
}

export default OnboardingFlowUncontrolled
