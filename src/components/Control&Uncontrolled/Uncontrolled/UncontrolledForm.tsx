import React, { useRef } from 'react'

const UncontrolledForm = () => {

    const nameInput: any = useRef()
    const ageInput: any = useRef()
    const hairColorInput: any = useRef()

    const handleSubmit = (e: any) => {
        console.log(nameInput.current.value)
        console.log(ageInput.current.value)
        console.log(hairColorInput.current.value)
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name" ref={nameInput} />
            <input name="age" type="number" placeholder="age" ref={ageInput} />
            <input name="hairColor" type="text" placeholder="hairColor" ref={hairColorInput} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default UncontrolledForm;
