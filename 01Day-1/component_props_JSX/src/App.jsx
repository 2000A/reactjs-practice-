import Video from "./components/Video";
// import "./App.css"

function App(){
  let channel = "coder dost"
  let obj ={
    title: 'Node JS tutorial',
    view: '999k',
    time: '1 year ago',
    channel: 'Coder dost'
  }
    return(
      <div>
        <div>Videos</div>
        <Video title="React JS tutorial" views={20} time="1 month ago" channel={channel}/>//just like in html when we give class,id these are called as attributes in sll manner Video component whatever is passed are called as props
        {/* <Video title="Node JS tutotrial" views="100k" time="9 month ago" channel={channel}/> */}
        <Video {...obj}/>
        <Video title="Mongo DB tutotrial" views="1M" time="2 month ago" />
       
      </div>
    )
}

export default App;