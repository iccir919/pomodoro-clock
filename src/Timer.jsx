function Timer({ type, length }) {
    return <>
        <h2 id={`${type}-label`}>{type.toUpperCase()}</h2>
        <div>
            <button id={`${type}-decrement`}>-</button>
            <span id={`${type}-length`}>{length}</span>
            <button id={`${type}-increment`}>+</button>
        </div>
    </>
}

export default Timer