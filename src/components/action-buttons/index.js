import React, { forwardRef } from 'react'

function ActionButtons({
    onIncrement,
    onDecrement,
    onReset
}, ref) {
    return (
        <div id="test" ref={ref}>
            <button onClick={onIncrement}>INCREMENT</button>
            <button onClick={onDecrement}>DECREMENT</button>
            <button onClick={onReset}>RESET</button>
        </div>
    )
}

export default forwardRef(ActionButtons)
