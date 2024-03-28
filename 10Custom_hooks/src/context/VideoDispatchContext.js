import { createContext } from "react";

const VideoDispatchContext = createContext(null)

export default VideoDispatchContext;


//global context for dispatch function meaning which can be used anywhere in program inside context provider
//another meaning no use for sending dispatch again as prop.