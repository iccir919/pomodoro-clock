function Controller({ currentStatus, currentType, currentLength, onStatusButtonClick }) {

    let startStopButton;

    if (currentStatus === "stopped") {
        startStopButton = <button type="button" className="btn btn-success btn-lg" onClick={() => onStatusButtonClick()} id="start_stop">Start</button>
    } else if (currentStatus = "started") {
        startStopButton = <button type="button" className="btn btn-danger btn-lg" onClick={() => onStatusButtonClick()} id="start_stop">Stopped</button>
    }


    return (
        <div className="row">
            <div className="col">
                <h1 className="display-6 text-capitalize" id="timer-label">{currentType}</h1>
                <h1 className="display-2" id="time-left">{addZero(Math.floor(currentLength / 60))}:{addZero(currentLength % 60)}</h1>
            </div>
            <div className="col">
                {startStopButton}
                <button type="button" className="btn btn-secondary btn-lg" id="reset">Reset</button>
            </div>
        </div>
    )
}

function addZero(length) {
    if (length >= 10) return '' + length;
    else return '0' + length;
}

export default Controller;