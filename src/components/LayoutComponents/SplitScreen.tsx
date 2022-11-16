import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex: 1;
`;


//left and right are the components passed
const SplitScreen = ({ left: Left, right: Right }: { left: any, right: any }) => {
    return (
        <Container>
            <Pane>
                <Left />
            </Pane>
            <Pane>
                <Right />
            </Pane>
        </Container>
    )
}

export default SplitScreen
