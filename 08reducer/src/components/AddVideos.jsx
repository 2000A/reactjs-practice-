import { useEffect, useState } from "react";

function AddVideos({dispatch,editableVideo}){//dispatch is setter function just like setVideos from App.jsx
    const initialState = {
        title:'',
        views:'',
        time:'',
        verified: false,
        channel: 'coder dost'
    }
    const [newVideo,setNewVideo] = useState(initialState)

    function handleSubmit(e){
        e.preventDefault();
        if(editableVideo){
            // updateVideo(newVideo)
            dispatch({type:'UPDATE', payload:newVideo})
        }else{
            // addVideos(newVideo)//passing state variable to parent by calling function ( got as prop) which will run in parent (lifting state up)
            dispatch({type:'ADD',payload: newVideo})
        }
        setNewVideo(initialState)
    }
    function handleChange(e){
        e.stopPropagation();
        setNewVideo({
            ...newVideo,
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        if(editableVideo){
            setNewVideo(editableVideo)
        }
    },[editableVideo])
    return(
        <form>
            <input type="text" placeholder="title" onChange={handleChange} name="title" value={newVideo.title} />
            <input type="text" placeholder="views" onChange={handleChange} name="views" value={newVideo.views} />
            <input type="text" placeholder="time" onChange={handleChange} name="time" value={newVideo.time} />
            {/* <input type="text" placeholder="verified" onChange={handleChange} name="verified" value={newVideo.verified} /> */}

            <button onClick={handleSubmit}>{editableVideo?'Edit':'Add'} Videos</button>
        </form>
    )
}

export default AddVideos;