import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from 'axios'
import { useContext, useEffect, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";
function VideoLists({ editVideo }) {
  const url = "https://my.api.mockaroo.com/videos.json?key=1d351120"

  const videos = useVideos();
  const dispatch = useVideoDispatch()
  // const [videos,setVideos] = useState([]) removing for testing purpose
//axios ka ek format hota hai ek object ke form mein from that inside data property we can access data
  // async function handleClick(){//we are adding side effect to button which is fine
  //   const res = await axios.get(url)
  //   // console.log(res.data)
  //   // setVideos(res.data)
  //   dispatch({type:'LOAD',payload:res.data})
  // }
//but if we want to render our videos on first render just like youtube we need to put our side effect in useEffect
  useEffect(()=>{ //cannot give async at top level useEffect ko bura lagta hai 

    async function getVideos(){ //par async function can be given here
      const res = await axios.get(url)
      dispatch({type:'LOAD',payload:res.data})
    }
    getVideos();
  },[])


  return (
    <>
      {videos.map((video, index) => <Video
        key={index}
        id={video.id}
        channel={video.channel}
        title={video.title}
        time={video.time}
        views={video.views}
        verified={video.verified}
        editVideo={editVideo}
      >

        <PlayButton
          message="Playyy"
          onPlay={() => console.log("playing", videos.title)}
          onPause={() => console.log(videos.title, "paused")}
        >
          Play</PlayButton>

      </Video>)}
      {/* <button onClick={handleClick}>Get Videos</button> */}
    </>
  )
}
export default VideoLists;