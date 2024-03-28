import { useState } from "react";

function PlayButton({onPlay,onPause,children}){
    const [playing,setPlaying] = useState(false);
    function handleClick(e){
        e.stopPropagation();
        
        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);
    }
    return(
        <button onClick={handleClick}>{children} {playing ? '▶️':'⏸️'}</button>
    )
}
export default PlayButton;