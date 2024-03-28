import { useState } from 'react';
import './AddVideos.css'
function AddVideos({addVideos}){  // {setVideo} if this was an option then we have to import video data again
   const initialState = {         
    time: '5sec ago',
    channel: 'Coder dost',
    verified: true,
    title:'',//it is connected to input as video.title
    views:''//connected to input as video.views
}
    const[video, setVideo] = useState(initialState)

    function handleSubmit(e){//video upload button (main challenge)
        //preventing reload
        e.preventDefault();
        addVideos(video);
        console.log(video);
        setVideo(initialState)// Add Videos button par click karte hi video will be reinitialised to initialState var so there we have titl and views and '' so input will get empty
    }

    function handleChange(e){
        console.log(e.target.name,e.target.value);
        setVideo({...video, 
           [e.target.name] : e.target.value 
        })
        console.log(video);
        // e.target.value = "" failed
    }
    return(
        <form>
            <input 
            type="text" 
            name='title' 
            onChange = {handleChange} 
            placeholder='title' 
            value={video.title}
            />
            {/* {video.title} for testing purpose only so check it in UI only */}
            <input 
            type="text" 
            name='views' 
            onChange={handleChange} 
            placeholder='views' 
            value={video.views}
            />
            <button 
            onClick={handleSubmit}
            
                >Add Videos
            </button>
        </form>
    )
}

export default AddVideos;