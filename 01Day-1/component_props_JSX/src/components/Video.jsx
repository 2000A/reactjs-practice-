import './Video.css'
function Video({title, channel="coder dost", views, time}){//agar title , channel ,views,time naam ki koi bhi cheese object props object mein hogi then it will automatically will get assigned to title,views,time etc which then can be used directly (no need to write props.title)
    console.log(title)
    // let topic = "React JS"
    // let bg = "dark"
    return(
        // <div>
        // <img
        // src="https://placebeard.it/290x180"
        // alt="Katherine Johnson"
        // />
        // <div className={bg}>{title}</div>
        // </div>

        <>
        <div className="contianer">
            <div className='pic'>
            <img
                src="https://placebeard.it/290x180"
                alt="Katherine Johnson"
                />
            </div>
            <div className="title">{title}</div>
            <div className="channel">{channel}</div>
            <div className="views">
                {views}K viwes <span>.</span> {time}
            </div>
        </div>
        </>
    )
}


export default Video;

//note: each component should be in separate file
// note*: props are read only example if bgColor is applied on screen then you cannot dinamically change the colour
//with a button click or hover for example.
//As React has the power to make change in UI.