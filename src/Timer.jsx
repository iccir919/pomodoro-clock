function Timer({ type, length }) {
    return <>
        <h2 class="text-capitalize" id={`${type}-label`}>{type}</h2>
        <div>
            <button class="btn btn-danger" id={`${type}-decrement`}>-</button>
            <span class="fs-3" id={`${type}-length`}>{length}</span>
            <button class="btn btn-success" id={`${type}-increment`}>+</button>
        </div>
    </>
}

export default Timer