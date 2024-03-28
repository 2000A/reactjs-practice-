import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Video from './components/Video'
import videosDB from './data/data'
import PlayButton from './components/PlayButton'
import AddVideos from './components/AddVideos'
import VideoList from './components/VideoList'
function App() {
  console.log("App")
  const [videos, setVideos] = useState(videosDB)//when function addVideos will run then all data will get stored in videos 
  function addVideos(video){//this data come from child AddVideos
   
      setVideos([...videos, 
               {...video, id:videos.length+1}
      ])
    
  }
  return (
    <div onClick={()=>console.log("App")}>
    
    <div>Videos</div>
    <AddVideos addVideos={addVideos}></AddVideos> {/*//passing function as a prop to child AddVideos*/}
    <VideoList videos = {videos}></VideoList>  {/* sending prop ie videos data to Child(VideoList)  */}
   
    </div>
     
  )
}

export default App
