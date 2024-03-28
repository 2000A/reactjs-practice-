import { useContext } from 'react';
import './Video.css'
import ThemeContext from '../context/ThemeContext';
function Video({title,channel,views,time,id,verified,children,dispatch,editVideo}){//dispatch just a state setter function from App.jsx
    const theme = useContext(ThemeContext)
    return(
        <div className={`container ${theme}`}>  {/* //passing as JS expression the useContext */}

            <button className="close" onClick={()=>dispatch({type: 'DELETE',payload: id})}>X</button>
            <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
            <div className="pic">
            <img src={`https://picsum.photos/id/${id}/400/240`} alt="video" />
            </div>
            <div className="title">{title}</div>
            <div className="channel">{channel} {verified && '✅'}</div>
            <div className="views">
                {views}views <span>.</span> {time}
            </div>
            <div>
                {children}{/* PlayButton  */}        
            </div>
        </div>
    )
}

export default Video;