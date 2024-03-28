import Video from "./Video";
import PlayButton from "./PlayButton";
function VideoLists({videos,dispatch,editVideo}){//prop drilling like no use in videoLists but through this passing prop to Video.jsx
    return(
        <>
        {videos.map((video,index) => <Video
            key={index}
            id={video.id}
           channel={video.channel}
           title={video.title}
           time={video.time}
           views={video.views}
           verified={video.verified}
          //  deleteVideo = {deleteVideo}
           editVideo ={editVideo}
           dispatch={dispatch}//prop drilling 
          >
      
          <PlayButton 
            message="Playyy" 
            onPlay ={()=>console.log("playing",videos.title)} 
            onPause ={()=>console.log(videos.title,"paused")}
          >
          Play</PlayButton>
      
          </Video>)}
          </>
    )
}
export default VideoLists;