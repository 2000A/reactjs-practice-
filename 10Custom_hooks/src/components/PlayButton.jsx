import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import './PlayButton.css'
function PlayButton({onPlay,onPause,children}){
    console.log('render PlayButton')
    const theme = useContext(ThemeContext)//see how we are able to use ThemeContext Globally
    const [playing,setPlaying] = useState(false);
    function handleClick(e){
        e.stopPropagation();
        
        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);
    }
    return(
        <button className={theme} onClick={handleClick}>{children} {playing ? '▶️':'⏸️'}</button>
    )
}
export default PlayButton;