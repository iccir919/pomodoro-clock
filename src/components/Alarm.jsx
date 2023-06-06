import audioUrl from "../assets/gong-sound.wav"
import { forwardRef } from 'react';


const Alarm = forwardRef((props, ref) => {
    return (
        <audio ref={ref} src={audioUrl} id="beep" />
    )
});

export default Alarm