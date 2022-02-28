import React from 'react'

export default function SpecialButtonReact({children}) {
    const specialFunction = () => alert('you clicked the react button')

    return (
        <button onClick={specialFunction}>
            {children}
        </button>
    )
}