import { useState, useEffect, useRef } from "react";
import { BsFillPlayCircleFill, BsPauseCircleFill, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const MusicPlayer = () => {
  /* references */
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  /* state */
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs/60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  } 

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current)
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  } 

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  } 

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
        <div className="text-xs ml-6">{calculateTime(currentTime)}</div>

        {/* progess bar */}
        <div>
          <input 
            className="progress-bar" 
            type="range" 
            ref={progressBar}
            defaultValue={0} 
            onChange={changeRange}/>
        </div>

        {/* duration time */}
        <div className="text-sm">{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
      </div>
    </div>
  )
}
export default MusicPlayer