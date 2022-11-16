import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
`;
const Pane = styled("div") <{ space: number }>`
    flex: ${props => props.space};
`;


//left and right props are the components passed
const SplitScreen = ({ leftSpace = 1, rightSpace = 1, children }: { children: any, leftSpace: number, rightSpace: number }) => {

    //using the components coming from inside the spliScreen
    const [left,right] = children;

    return (
        <Container>
            <Pane space={leftSpace}>
                {left}
            </Pane>
            <Pane space={rightSpace}>
                {right}
            </Pane>
        </Container>
    )
}

export default SplitScreen
