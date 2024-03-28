import { useContext, useEffect, useRef, useState } from "react";//no need if custom hook no need to import useContext
import './AddVideos.css'
import VideoDispatchContext from "../context/VideoDispatchContext";//no need
import useVideoDispatch from "../hooks/VideoDispatch";
function AddVideos({editableVideo}){//dispatch removed as prop
    // const dispatch = useContext(VideoDispatchContext) //accessed as context //here also we will use custom hook 
    const dispatch = useVideoDispatch();// our custom hook
    const inputRef = useRef(null)//this refrence will be binded to that input using react inbuilt ref
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
            dispatch({type:'UPDATE', payload:newVideo})//can be used without passing the prop now and call yaha ho raha hai and videoReducer function can listen it in App.jsx
        }else{
            dispatch({type:'ADD',payload: newVideo})//same abve comment applies here
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
    // inputRef.current.focus()  what happens? inputRef pata hai ki this is binded to input so this particular line of code
    //gives error says inputRef is null and how will i focus on null idiot
    //basically when whole component will be rendered only then inputRef will gets binded to input correctly 
        //thats why it is inside useEffect.
    useEffect(()=>{
        if(editableVideo){
            setNewVideo(editableVideo)
        }
        // inputRef.current.value = "Demo"
        inputRef.current.focus() 
    },[editableVideo])
    return(
        <form>
            {/* react inbuilt ref prop where we will pass inputRef  */}
            {/* Now react will automatically send the dom element to inputRef as initial value  (kind of getelementbyid stuff) {/* connected refrence variable with our input using inbuilt ref by react */}
            <input ref={inputRef} 
            type="text" placeholder="title"
             onChange={handleChange} 
             name="title" 
             value={newVideo.title} 
             />
            <input type="text" placeholder="views" onChange={handleChange} name="views" value={newVideo.views} />
            <input type="text" placeholder="time" onChange={handleChange} name="time" value={newVideo.time} />

            <button onClick={handleSubmit}>{editableVideo?'Edit':'Add'} Videos</button>
        </form>
    )
}

export default AddVideos;