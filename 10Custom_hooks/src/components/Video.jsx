import { useContext } from 'react'; //no use now
import './Video.css'
import ThemeContext from '../context/ThemeContext';
// import VideoDispatchContext from '../context/VideoDispatchContext'; no use now
import useVideoDispatch from '../hooks/VideoDispatch';//imported our custom hook
function Video({ title, channel, views, time, id, verified, children, editVideo }) {//removing dispatch here as well cause it can be directly used
    const theme = useContext(ThemeContext)
    //custom hooks part: below dispatch we will breate a custom hook in which we don't have to write useContext(VideoDispatchContext) and import it as well
    // const dispatch = useContext(VideoDispatchContext)//variable is now globally declared condition is to use is you need to hook useContext() where you pass that context name which will hold a value which we pass during Provider remember
    const dispatch = useVideoDispatch();


    return (
        <div className={`container ${theme}`}>  {/* //passing as JS expression the useContext because theme is a variable */}

            <button className="close" onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
            <button className="edit" onClick={() => editVideo(id)}>Edit</button>
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