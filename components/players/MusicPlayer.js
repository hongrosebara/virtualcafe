import { useEffect } from "react";
import { BsFillPlayCircleFill, BsPauseCircleFill, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useAudio } from "../hooks/AudioHook";

const MusicPlayer = () => {
  const {
    isPlaying,
    duration,
    currentTime,
    audioPlayer,
    progressBar,
    calculateTime,
    togglePlayPause,
    whilePlaying,
    changeRange,
    forwardThirty,
    backThirty,
    setDuration
  } = useAudio();

  // grabbing metadata //
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  return (
    <div className="music-player flex items-center">
      <audio ref={audioPlayer} src="/music/Jazz Cafe.mp3"></audio>
      <button 
        onClick={backThirty}
        className="flex items-center cursor-pointer text-xs hover:text-primary-400">
        <BsArrowLeftShort /> 30
      </button>
      <button
        className="text-3xl text-primary-600 text-center px-2"
        onClick={togglePlayPause}>
        { isPlaying ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
      </button>
      <button 
        onClick={forwardThirty}
        className="flex items-center cursor-pointer text-xs hover:text-primary-400">
        30 <BsArrowRightShort />
      </button>

      <div className="flex items-center">
        {/* current time */}
        <div className="text-xs ml-6">
          {calculateTime(currentTime)}
        </div>

        {/* progess bar */}
        <div>
          <input 
            className="progress-bar" 
            type="range" 
            defaultValue="0" 
            ref={progressBar} 
            onChange={changeRange}/>
        </div>

        {/* duration time */}
        <div className="text-sm">{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
      </div>
    </div>
  )
}
export default MusicPlayer