import { useEffect, useState } from 'react';
import './AddVideos.css'
function AddVideos({addVideos,updateVideos,editableVideos}){ //how editableVideos data will get assigned to AddVideos state variable // {setVideo} if this was an option then we have to import video data again
   console.log("add video rendered")
   
    const initialState = {         
    time: '5sec ago',
    channel: 'Coder dost',
    verified: true,
    title:'',//it is connected to input as video.title editableVideos?editableVideos.title:''
    views:''//connected to input as video.views  editableVideos?editableVideos.value:''
}
    const[video, setVideo] = useState(initialState)

    function handleSubmit(e){//video upload button (main challenge)
        //preventing reload
        e.preventDefault();
        //yad karo ek button par multiple functionality chahiye jse update and add ke liye to logic likhna padta hai
        if(editableVideos){ //will be responsible to make sure video just replace hojay and not get added so little different functionality from addVideo
            updateVideos(video);//vidoe containing updated views and title 
        }else{
            addVideos(video);
        }
        
        
        setVideo(initialState)// Add Videos button par click karte hi video will be reinitialised to initialState var so there we have titl and views and '' so input will get empty
        
    }

    function handleChange(e){
        
        setVideo({...video, 
           [e.target.name] : e.target.value 
        })
    }
    //problems like where to use editableVideos main purpose is to assign it to video state variable
    // video = editableVideos (wrong)
    // directly on input -> value={editableVideos} (wrong)
    //koi tarika chahiye ki apne aap yeh cheese hojaey

    //video object passed --> App se video object again passed to child (AddButton) --> Now changing of data is a side Effect means our of react flow
    //inshort jab re-render hoga upon clicking edit button then ek functionality run karni hai
    //therefore we will use useEffect() hook which run when a component mount or unmount (i.e when a component renders be it first time also) and also runs when 
    //dependencies list array items changes
    useEffect(()=>{
        console.log("use Effect")//this is working for first render of AddButton component
        if(editableVideos){
            setVideo(editableVideos);
        }
    },[editableVideos])
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
            
                >{editableVideos?'Edit':'Add'} Videos
            </button>
        </form>
    )
}

export default AddVideos;