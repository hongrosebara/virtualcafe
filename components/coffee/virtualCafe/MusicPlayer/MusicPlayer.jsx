import { useEffect, useState,  useRef } from "react";
import { BsFillPlayCircleFill, BsPauseCircleFill, BsFillVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { useAudio } from "../../../hooks/AudioHook";

const MusicPlayer = ( music ) => {
  const [songs] = useState(music.music);

  const {
    audioPlayer,
    isPlaying,
    currentTime,
    volume,
    volumeBar,
    togglePlayPause,
    calculateTime,
    progressBar,
    changeRange,
    duration,
    skipSong,
    whilePlaying,
    setDuration,
    changeVolume,
    currentSongIndex,
    timeTravel
  } = useAudio();


  useEffect(() => {
    if (!isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
  }, [currentSongIndex])

  // grabbing metadata //
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  return (
    <div className="section-music-player my-6 p-6 rounded-lg bg-secondary text-beige text-base">
      <h3>{songs[currentSongIndex].name}</h3>
      <audio ref={audioPlayer} src={songs[currentSongIndex].audio}></audio>
      
      {/* progess bar */}
      <div>
        <input 
          className="progress-bar" 
          type="range" 
          defaultValue="0" 
          ref={progressBar} 
          onChange={changeRange}/>
      </div>

      <div className="flex justify-between text-xs">
        {/* current time */}
        <div>
          {calculateTime(currentTime)}
        </div>

        {/* duration time */}
         <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center justify-between -ml-3">
          <button 
            className="flex items-center cursor-pointer text-2xl"
            onClick={() => skipSong(false, songs)}>
            <BiSkipPrevious />
          </button>
          <button
            className="text-2xl shadow-sm text-center px-2"
            onClick={togglePlayPause}>
            { isPlaying ? <BsPauseCircleFill /> : <BsFillPlayCircleFill/>}
          </button>
          <button 
            className="flex items-center cursor-pointer text-2xl"
            onClick={() => skipSong(true, songs)}>
            <BiSkipNext />
          </button>
        </div>

        <div className="flex items-center text-lg space-x-2">
          <BsFillVolumeDownFill />
          <input
            className="volume-bar"
            type="range"
            ref={volumeBar}
            value={volume}
            min={0.1} max={1}
            step={0.01}
            onChange={changeVolume}
          />
          <BsFillVolumeUpFill />
        </div>
      </div>
    </div>
  )
}
export default MusicPlayer;