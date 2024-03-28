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
  const [editableVideos,setEditableVideos] = useState(null)//null as prop first time gets passed and useEffect also runs first time therefore video.title and video.value get null in return we get error
  
  function addVideos(video){//function to add video
   
      setVideos([...videos, 
               {...video, id:videos.length+1}
      ])
  }

  function deleteVideo(id){//function to delete video
    // console.log("video deleted",id)
    setVideos(videos.filter(video=>video.id!==id));//using higher order function filter: true wale new array mein otherwise not accepted inside new array. deleted item ke bina new array will be re rendered
  }

  function editVideo(id){//jese hi i will click on editVideo then i should get an option to edit the video right and that will only happen means App component is re-rendered therefore 
    setEditableVideos(videos.find(video=>video.id===id));//using higher order function find: returns value of the first element that passes the test , ek our cheese jese hi state change hoga pura app ke andar ka return statement will re-render 
    // console.log(id);
  }

  function updateVideos(video){//logic : to make changes in Array i.e, our videos state variable that is storing array and that changed/mutated array will get rendered (action: we will se updates in that particular videos only)
    // console.log(video); data is correct
    const index = videos.findIndex(vid=>vid.id===video.id)//using this higher order function becuase our array is large i.e, array of objects
    // videos.splice(index,1,video)//react says don't dare to directly update state variable 
    // const newVideos=[...videos].splice(index,1,video)//so splice returns something
    // console.log(newVideos);//returns old object only because splice returns removed item from array
    const newVideos = [...videos]//isse andar wala array fath kar bahar aa jata hai using spread opreator.
    newVideos.splice(index,1,video)//splice will change the copy array .
    // console.log(newVideos);//it will return new array which splice has changed
    setVideos(newVideos);

  }

  return (
    <div onClick={()=>console.log("App")}>
    
    <div>Videos</div>
    <AddVideos addVideos={addVideos} editableVideos={editableVideos} updateVideos={updateVideos}></AddVideos> {/*//passing function as a prop to child AddVideos*/}
    <VideoList deleteVideo={deleteVideo} videos = {videos} editVideo={editVideo}></VideoList>  {/* sending prop ie videos data to Child(VideoList)  */}
    
    </div>
     
  )
}

export default App

//mantra of react js
//state variables should be treated as immutable 
//since buil in primitive like number,string, boolean are immutable,
//meaning they can only be replaced
//But lets see the exception that : Objects and Arrays are mutable 
//so if objects and array are state variable they should be treated as mutable and only be 
//changed using state stter function
//reason behind : if we mutate object and array if they are state variables then react will not notice the change
//if not notified then react will not render right. therefore state setter function should be used
//to mutate objects and arrays. 
//mutation can also be done if that change we don't want to see in UI. 
//Inshort locally we do mutation of objects and array.(see react doc)

//rules to change state variable:
//first make copy of state variable
//second make changes to it
//third use state setter function to change state variable using the copy made in previous step