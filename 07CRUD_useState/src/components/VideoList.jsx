import PlayButton from "./PlayButton";
import Video from "./Video";
function VideoList({videos,deleteVideo,editVideo}){//editVideo and deleteVideo both are no use of VideoLists but it required as they are getting passed to Video.jsx componet i.e, prop drilling(inshort yeh do functionlaity are getting passed to Video )
   
        return(
        <>
        {
        videos.map(videos => <Video 
          key= {videos.id} 
          title={videos.title}
          views= {videos.views}
          time={videos.time}
          verified={videos.verified}
          id = {videos.id}
          deleteVideo={deleteVideo} 
          editVideo={editVideo}>
  
          <PlayButton 
            onPlay={()=> console.log("playing",videos.title) } 
            onPause={()=>console.log(videos.title,"paused")}
            >
              {videos.title}
            </PlayButton>
          </Video>)
          }
          </>
          )
  
}
export default VideoList;