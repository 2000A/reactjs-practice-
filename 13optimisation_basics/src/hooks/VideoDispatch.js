import { useContext } from "react"
import VideoDispatchContext from "../context/VideoDispatchContext"

//react hook are required to be put inside function
function useVideoDispatch(){
    // const dispatch = useContext(VideoDispatchContext)
    return useContext(VideoDispatchContext)
}

export default useVideoDispatch;

//this custom hook can be used by importing it