import { useState } from "react";

function PlayButton({message,children, onPlay,onPause}){

    const [playing, setPlaying] = useState(false);//state variable
    console.log("PlayButton rendered")
    function handleClick(e){
        // console.log(e);
       
        e.stopPropagation();
        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);
    }
    return(
        <button onClick={handleClick}>{children}:{playing? '▶️':'⏸️'}</button>
    )
}

export default PlayButton;

