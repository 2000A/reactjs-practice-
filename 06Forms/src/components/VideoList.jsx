import PlayButton from "./PlayButton";
import Video from "./Video";
function VideoList({videos}){
   
        return(
        <>
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
          </>
          )
  
}
export default VideoList;