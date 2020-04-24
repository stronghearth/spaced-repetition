import React from 'react'

export default function ValidationError(props) {
    return props.message ?
            <p className='error'>{props.message}</p>
            : <></>
}