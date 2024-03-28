import { useState,useReducer, useContext} from 'react'
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
function App() {
  const [editableVideo, setEditableVideo] = useState(null)


  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD': 
                  return[               //return new state 
                    ...videos,
                    {...action.payload, id:videos.length +1} //action.payload = newVideo that is to added come from AddVideos.jsx
                  ]

      case 'DELETE':
                  return videos.filter(item => item.id !== action.payload) //same here return will change the state variable means react will render again

      case 'UPDATE':
                  const index = videos.findIndex(item => item.id === action.payload.id)
                  const updatedVideos = [ ...videos]
                  updatedVideos.splice(index,1,action.payload)//action.payload = newVideo from AddVideos.jsx this video data we want to update to our state variable
                  setEditableVideo(null)//not a good way
                  return updatedVideos//change the state variable ....react renders again
        default:
          return videos
    }
  }

 
  const [videos,dispatch] = useReducer(videoReducer,videosDB)
  const [mode,setMode] = useState('darkMode')
  // const themeContext = useContext(ThemeContext)//way one

  // console.log({themeContext});//to see in object format
 

  function editVideo(id){
   setEditableVideo(videos.find(item => item.id === id))
   console.log(editableVideo)
  }

  

  return (
    // .Provider will create a boundry within that boundry context can be used
    <ThemeContext.Provider value={mode}>//second way is to use provider as it will set boundary within which we can use that context variable
    <button onClick={()=>setMode(mode==='darkMode'?'lightMode':'darkMode')}>click</button>
    <div className={`App ${mode}`} onClick={()=>console.log("App")}>

    <AddVideos dispatch= {dispatch} editableVideo = {editableVideo} ></AddVideos>//
    <h1>Videos</h1>
    <VideoLists videos = {videos} dispatch={dispatch} editVideo={editVideo}></VideoLists>    {/* //passing sate variable to children as prop */}    

    </div>
    </ThemeContext.Provider>
  )
}

export default App

//context is like global variable which can be used anywhere in code be it another components as well.
//reducer + context api ==> functionlity of redux 
//using context we can create variables and use in anywhere in program without passing that variable as prop
//during passing value in provider value gets changed with default value passed during creation of context