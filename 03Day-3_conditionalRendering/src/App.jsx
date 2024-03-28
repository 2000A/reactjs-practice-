import { useState } from 'react'
import Video from './components/Video'
import './App.css'
import videos from './data/data'

function App() {
  let channel = "coder dost"
  
    return(
      <div>
        <div>Videos</div>
        {
          videos.map(videos => <Video 
            key= {videos.id} 
            title={videos.title}
            views= {videos.views}
            time={videos.time}
            verified={videos.verified}
            id = {videos.id} />)
        }
        
        {/*in verified if we will pass 0 and 1 then we can get different output in conditional rendering  */}
       
      </div>
    )
}

export default App

//point* : <Video/> component is getting reused any number of data be there we don't have to write it as we 
// are using map method for iteration 

// in this lecture i have done refactoring where data is kept separte and imported form file to keep code clean 