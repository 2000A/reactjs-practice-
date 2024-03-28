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
          //  deleteVideo = {deleteVideo}//prop drilling
           editVideo ={editVideo}//prop drilling 
           dispatch={dispatch}//prop drilling will not happen when reducer and context api gets and work together
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

//reducers has helped in reducing props passing yes it has made state management sort of easy