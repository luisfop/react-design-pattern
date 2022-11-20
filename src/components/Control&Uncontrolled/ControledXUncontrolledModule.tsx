import React, { useState } from 'react'
// import UncontrolledForm from './Uncontrolled/UncontrolledForm'
import ControlledForm from './Controlled/ControlledForm'
import ModalControlled from './Controlled/ModalControlled';
import ModalUncontrolled from './Uncontrolled/ModalUncontrolled'

const ControledXUncontrolledModule = () => {

    const [shouldShow, setShouldShow] = useState(false);
    return (
        <div>
            {/* <UncontrolledForm /> */}
            {/* <ControlledForm/> */}
            {/* <ModalUncontrolled>
                <p>Hello</p>
            </ModalUncontrolled> */}

            <button onClick={() => setShouldShow(!shouldShow)}>{shouldShow ? 'Hide modal' : 'Show modal'}</button>
            <ModalControlled shouldShow={shouldShow} onRequestClose={() => setShouldShow(!shouldShow)}>
                <h1>State controlled by the father</h1>
            </ModalControlled>

        </div>
    )
}

export default ControledXUncontrolledModule
