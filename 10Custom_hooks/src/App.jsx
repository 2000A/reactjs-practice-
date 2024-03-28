import { useState, useReducer, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Video from './components/Video'
import videosDB from './data/data'
import PlayButton from './components/PlayButton'
import Counter from './components/Counter'
import AddVideos from './components/AddVideos'
import VideoLists from './components/VideoLists'
import ThemeContext from './context/ThemeContext'//import karna jaruri hai before using
import VideosContext from './context/VideosContext'
import VideoDispatchContext from './context/VideoDispatchContext'
function App() {
  const [editableVideo, setEditableVideo] = useState(null)


  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [               
          ...videos,
          { ...action.payload, id: videos.length + 1 } 
        ]

      case 'DELETE':
        return videos.filter(item => item.id !== action.payload) 

      case 'UPDATE':
        const index = videos.findIndex(item => item.id === action.payload.id)
        const updatedVideos = [...videos]
        updatedVideos.splice(index, 1, action.payload)
        setEditableVideo(null)//not good way as its work of different component
        return updatedVideos
      default:
        return videos
    }
  }


  const [videos, dispatch] = useReducer(videoReducer, videosDB)
  const [mode, setMode] = useState('darkMode')
  // const themeContext = useContext(ThemeContext)

  // console.log({themeContext});//to see in object format


  function editVideo(id) {
    setEditableVideo(videos.find(item => item.id === id))
    console.log(editableVideo)
  }



  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}> {/* //now videos ie. our state variable is a global can be used globally without passing prop  and second thing VideosContext will get assigned to videos as value if we don't proved value it will use default value*/}
        <VideoDispatchContext.Provider value={dispatch}>
        <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>click</button>
        <div className={`App ${mode}`} onClick={() => console.log("App")}>
          <Counter></Counter>
          <AddVideos editableVideo={editableVideo} ></AddVideos> {/**now dispatch={dispatch } gone from here as well*/}
          <h1>Videos</h1>
          <VideoLists editVideo={editVideo}></VideoLists>  {/* dispatch={dispatch} gone as well//videos ={videos} <--- propis getting removed as we can easily access videos in VideoLists.jsx component */}
        </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App

//this app will combine both useContext + useReducer -> complete usecase of redux
//in this app we will create separate context for videos(ie.our state variable) and one for dispatch so that these two can be accessible anywhere in code
//Abh joh problem useContext will solve is bar bar dispatch as prop bhejna pad raha hai toh kyun na ise globally declare karle
//and we can use it in any component or anywhere basically.
//creating a context variable can reduce prop drilling as well i.e state management 
//overuse is creating useContext for almost everything don't 
//can be used for themeing (dark or ligth) mode , etc 

//second topic covered is creating custom hooks. 
//to help us with releif of importing useContext and the context variables.

//third topic is useRef hook
//it is used to store a value between component rendering 
//as we want its value to be remembered by component but that value is nothing to do with change in state variable
