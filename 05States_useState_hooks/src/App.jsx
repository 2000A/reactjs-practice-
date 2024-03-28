import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Video from './components/Video'
import videosDB from './data/data'
import PlayButton from './components/PlayButton'
function App() {
  console.log("App")
  const [videos, setVideos] = useState(videosDB)
  
  return (
    <div onClick={()=>console.log("App")}>
    
    <div>Videos</div>
    {/* last task is to add videos dynamically  */}
    <button onClick={()=>{
        // setVideos([]);//isse videos which was storing data videosDB will now be empty array toh empty array par map lagega no result
        // videos.push({ //nothing happening because react does not allows to directly change a state variable 
        //   id: Math.floor(Math.random()*10),//it wants first make copy of that variable and then change
        //   title: 'Mongo DB tutorial',
        //   views: '4k',
        //   time: '5sec ago',
        //   channel: 'Coder dost',
        //   verified: true
        // })
        setVideos([...videos,{  //yaha par react says ki state variable ki copy banao and then us copy
          id: videos.length+1,  //mein value add karo 
          title: 'Demo tutorial',//so what we did is we created empty array inside it we have used spred operator to create copy of videos array(i.e data.js wala array) and added new items to that array
          views: '4k',           //now our videos state variable will get updated by setter function when we will click our Add videos button
          time: '5sec ago',
          channel: 'Coder dost',
          verified: true
        },])
    }}>Add Videos</button>
    {
      videos.map(videos => <Video 
        key= {videos.id} 
        title={videos.title}
        views= {videos.views}
        time={videos.time}
        verified={videos.verified}
        id = {videos.id} >

        <PlayButton 
          onPlay={()=> console.log("playing",videos.title) } 
          onPause={()=>console.log(videos.title,"paused")}
          >
            {videos.title}
          </PlayButton>
        </Video>)
    }

     <Counter></Counter>
    
    </div>
     
  )
}

export default App
