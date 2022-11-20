import React, { useState } from 'react'
import styled from 'styled-components';


const ModalBackGround = styled.div`
position: fixed;
z-index: 1;
left: 0;
top:0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.5);
`;

const ModalBody = styled.div`
background-color: white;
margin: 10% auto;
padding: 20px;
width: 50%auto;
`;

//Uncontrolled: Parent component has none control of this component. Eg to open and close the modal.

// On Controlled components, parents pass the property to open/close the modal


const ModalUncontrolled = ({ children }: { children: JSX.Element }) => {

    const [shouldShow, setShouldShow] = useState(false);


    return (
        <>
            <button onClick={() => setShouldShow(!shouldShow)}>Show modal</button>
            {shouldShow && (
                <ModalBackGround onClick={() => setShouldShow(false)}>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShouldShow(false)}>hide modal</button>
                        {children}
                    </ModalBody>
                </ModalBackGround>)}
        </>
    )
}

export default ModalUncontrolled;
