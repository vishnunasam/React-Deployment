function Task(){
    return (
        <>
        <h1>This is MultiMedia Page</h1><br />

      <img src="Photo.jpg"  /><br />
      <div>
        <audio src="audio.mp3" controls></audio>
      </div> <br />
      <div>
        <video src="video.mp4" controls width={"500 px"}></video>
      </div>
        </>
    )   
}
export default Task;