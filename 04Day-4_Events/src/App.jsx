import { useState } from 'react'
import Video from './components/Video'
// import './App.css' 
import videos from './data/data'
import PlayButton from './components/PlayButton'

function App() {
  let channel = "coder dost"
  
    return(
      <div onClick={()=>console.log("App")}>{/* event propagation will take place from PlayButton child  */}
        
        <div>Videos</div>
        {
          videos.map(videos => <Video 
            key= {videos.id} 
            title={videos.title}
            views= {videos.views}
            time={videos.time}
            verified={videos.verified}
            id = {videos.id} >

              {/* we have nested PlayButton so it will be acessed through children prop in Video component  */}
            <PlayButton message="play-msg" onPlay={()=> console.log("playing",videos.title) } onPause={()=>console.log(videos.title,"paused")}>{videos.title}</PlayButton>//this children can be access using children prop in parent prop inside which it in nested
            </Video>)
        }
        
        {/*in verified if we will pass 0 and 1 then we can get different output in conditional rendering  */}
       {/* <PlayButton message="play-msg" onClick={()=>console.log("playyy")}>Play</PlayButton>
       <PlayButton  message="pause-msg" onClick={()=>alert("video paused")}>Pause</PlayButton> */}
       
       {/* <PlayButton message="play-msg" onSmash={()=>console.log("playyy")}>Play</PlayButton>
       <PlayButton  message="pause-msg" onSmash={()=>alert("video paused")}>Pause</PlayButton> */}

       {/* <PlayButton message="play-msg" onPlay={()=> console.log("play") } onPause={()=>console.log("pause")}>Play</PlayButton> */}
       {/* achieving multiple functionality on single component by making multiple events  */}
       
       
      </div>
    )
}

export default App




//when there's a need to pass multiple functions as prop then its better to name the prop starting with 'on'
//yes functions can also be passed as props