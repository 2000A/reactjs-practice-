import Video from "./Video";
import PlayButton from "./PlayButton";
// import { useContext } from "react"; no use if using my custom hook
import VideosContext from "../context/VideosContext";//this also same above condition
import useVideos from "../hooks/Videos";
function VideoLists({ editVideo }) {//removing videos prop as well from here to access videos use useContext , as well dispatch
  // const videos = useContext(VideosContext)//   useContext ---> gets context and cosnt videos ----> gets value which we have given in provider .see VideosContext a global variable easily accessible right
  const videos = useVideos();
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
        //  deleteVideo = {deleteVideo}
        editVideo={editVideo}
      //  dispatch={dispatch}/ no need here as well keeping it just for knowing 
      >

        <PlayButton
          message="Playyy"
          onPlay={() => console.log("playing", videos.title)}
          onPause={() => console.log(videos.title, "paused")}
        >
          Play</PlayButton>

      </Video>)}
    </>
  )
}
export default VideoLists;