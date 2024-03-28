import './Video.css'
function Video({title, id,channel="coder dost", views, time,verified,children}){
    console.log(title)
    // let topic = "React JS"
    // let bg = "dark"


    // let verifid = false;
    // let channelJsx ;
    // if(verified){
    //     channelJsx = <div className="channel">{channel} ✅</div> 
    // }
    // else{
    //     channelJsx = <div className="channel">{channel} </div> 
    // }
    return(
        // <div>
        // <img
        // src="https://picsum.photos/id/237/200/300"
        // alt="Katherine Johnson"
        // />
        // <div className={bg}>{title}</div>
        // </div>

        <>
        <div className="contianer">
            <div className='pic'>
            <img
                src= {`https://picsum.photos/id/${id}/200/300`}
                alt="Katherine Johnson"
                />
            </div>
            <div className="title">{title}</div>
            {/* {verified ? <div className="channel">{channel} ✅</div> : <div className="channel">{channel} </div> } */}
             {/* <div className="channel">{channel} {verified ? '✅' : null}</div>  */}
             <div className="channel">{channel} {verified && '✅' }</div>      {/*called as short ckt method where if verified is not true then && whill not evaluate the next statement*/}
            <div className="views">
                {views}K viwes <span>.</span> {time}
            </div>
            <div>
                {children}
            </div>
        </div>
        </>
    )
}


export default Video;