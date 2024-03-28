import { useState,useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Video from './components/Video'
import videosDB from './data/data'
import PlayButton from './components/PlayButton'
import Counter from './components/Counter'
import AddVideos from './components/AddVideos'
import VideoLists from './components/VideoLists'
function App() {
  const [editableVideo, setEditableVideo] = useState(null)


  function videoReducer(videos,action){//is an active listner as soon as it listens dispatch() is shouting it gets connected to it like dispatch action gets attached to reducer function 
    switch(action.type){
      case 'ADD': 
                  return[               //return sets state variable i.e, videos to new value and as state variable changes re-renders occur ....react renders agian
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

 // const [videos,setVideos] = useState(videosDB)
  //const[state,dispatch(does not manipulate state directly)]= useReducer(reducer(reducer function),videosDB)
  const [videos,dispatch] = useReducer(videoReducer,videosDB)
 

  //  function addVideos(video){
  //   dispatch({type:'ADD',payload: video})
  //   //action: {type:'ADD',payload: video}
  // }
 

  // function deleteVideo(id){
  //   dispatch({type: 'DELETE',payload: id})
  // }

  function editVideo(id){
   setEditableVideo(videos.find(item => item.id === id))
   console.log(editableVideo)
  }

  // function updateVideo(video){
  //   dispatch({type:'UPDATE', payload:video})

  // }

  return (
    <div onClick={()=>console.log("App")}>

    <AddVideos dispatch= {dispatch} editableVideo = {editableVideo} ></AddVideos>//
    <h1>Videos</h1>
    <VideoLists videos = {videos} dispatch={dispatch} editVideo={editVideo}></VideoLists>    {/* //passing sate variable to children as prop */}    

    </div>
  )
}

export default App

//easy state management
//reduces prop drilling 
//combines all state logic at one place 

//difference between setVideo(){i.e, useState variable} and dispatch()
//setVideo will instanly manipulate the state variable whereas dispatch() does not insatntly manipulates the state