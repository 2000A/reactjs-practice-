import './Video.css'
function Video({title, id,channel="coder dost", views, time,verified,children,deleteVideo,editVideo}){
    console.log("Video rendered")
    return(
       
        <div className="contianer">
            <button className='close' onClick={()=>deleteVideo(id)}>X</button> {/* //delete video button given id to delete that particular video */}
            <button className='edit' onClick={()=>editVideo(id)}>Edit Video</button> {/* //id of that component will be passed to that editVideo() function */}
           
            <div className='pic'>
            <img
                src= {`https://picsum.photos/id/${id}/200/300`}
                alt="Katherine Johnson"
                />
            </div>
            <div className="title">{title}</div>
             <div className="channel">{channel} {verified && '✅' }</div>      
            <div className="views">
                {views} viwes <span>.</span> {time}
            </div>
            <div>
                {children}
            </div>
        </div>
       
    )
}


export default Video;