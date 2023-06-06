function Timer({ type, length, status, onIncrementChange }) {
    return (<div className="col">
        <h2 className="text-capitalize" id={`${type}-label`}>{type}</h2>
        <div>
            <button 
                className="btn btn-primary" 
                id={`${type}-decrement`} 
                onClick={() => onIncrementChange(type, -1)}
                disabled={status==="active" || length === 1}
            >
                 -
            </button>
            <span className="fs-3" id={`${type}-length`}>{length}</span>
            <button 
                className="btn btn-primary" 
                id={`${type}-increment`} 
                onClick={() => onIncrementChange(type, 1)}
                disabled={status==="active" || length==60}
            >
                +
            </button>
        </div>
    </div>)
}

export default Timer