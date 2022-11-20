import React, { useState, useEffect } from 'react'

const ControlledForm = () => {

    //this form allow us to have control of each state and validate it

    const [name, setName] = useState('');
    const [age, setAge] = useState<number>();
    const [hairColor, setHairColor] = useState('');

    const [inputError, setInputError] = useState('');


    //controll forms allow us to do form validations

    //useEffect listen for changes in any one of this states
    useEffect(() => {
        if (name.length < 2) {
            console.log('Username must be 2 or more caracters')
            setInputError('Username must be 2 or more caracters')
        } else {
            setInputError('')
        }
    }, [name])


    return (
        <form>
            <input type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)} />

            <input type="number"
                name="age"
                placeholder="Age"
                value={age}
                onChange={e => setAge(Number(e.target.value))} />

            <input type="text"
                name="hairColor"
                placeholder="HairColor"
                value={hairColor}
                onChange={e => setHairColor(e.target.value)} />

            <button>Submit</button>
            <div>

                {inputError}
            </div>
        </form>
    )
}

export default ControlledForm
