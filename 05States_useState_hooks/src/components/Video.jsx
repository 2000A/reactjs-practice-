import './Video.css'
function Video({title, id,channel="coder dost", views, time,verified,children}){
    console.log("Video rendered")
    return(
       
        <div className="contianer">
           
            <div className='pic'>
            <img
                src= {`https://picsum.photos/id/${id}/200/300`}
                alt="Katherine Johnson"
                />
            </div>
            <div className="title">{title}</div>
             <div className="channel">{channel} {verified && '✅' }</div>      
            <div className="views">
                {views}K viwes <span>.</span> {time}
            </div>
            <div>
                {children}
            </div>
        </div>
       
    )
}


export default Video;