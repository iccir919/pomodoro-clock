function Timer({ type, length, onButtonClick }) {
    return (<div className="col">
        <h2 className="text-capitalize" id={`${type}-label`}>{type}</h2>
        <div>
            <button className="btn btn-danger" id={`${type}-decrement`} onClick={() => onButtonClick(type, -1)}>-</button>
            <span className="fs-3" id={`${type}-length`}>{length}</span>
            <button className="btn btn-success" id={`${type}-increment`} onClick={() => onButtonClick(type, 1)}>+</button>
        </div>
    </div>)
}

export default Timer