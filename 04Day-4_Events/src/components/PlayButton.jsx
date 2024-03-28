function PlayButton({message,children, onPlay,onPause}){

    let playing = false;//don't use this approch for the puropse you are utilising for (ui change)
    
    function handleClick(e){//handler function good to create a handler function outside
        console.log(e);
        e.stopPropagation();
        if(playing) onPause();
        else onPlay();

        playing = !playing;
    }
    return(
        <button onClick={handleClick}>{children}:{playing? '<':'||'}</button>//and use it like this by passing refrence in onClick method
    )
}

export default PlayButton;

//onClick is a handler function or simply handler which always requires a callback

