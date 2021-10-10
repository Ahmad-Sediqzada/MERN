import React, {useState} from 'react';


const Child = (props) => {

    const { firstName, lastName, age, hairColor } = props;
    const [stateAge, setStateAge] = useState(age)

    const ageHandler = (e) => {
        setStateAge(stateAge + 1);
    }






    return (
        <div>
            <h3>{firstName}, {lastName}</h3>
            <p>Age: {stateAge}c</p>
            <p>Hair Color: {hairColor}</p>

            <button onClick={(e) => ageHandler()}>Birthday button for {firstName}, {lastName}</button>
        </div>
    )
}

export default Child;