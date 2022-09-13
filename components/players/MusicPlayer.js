import { useEffect, useState,  useRef } from "react";
import { BsFillPlayCircleFill, BsPauseCircleFill, BsFillVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { useAudio } from "../hooks/AudioHook";

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
    <section className="section-music-player m-3 p-6 bg-secondary-900 rounded-lg text-secondary-500">
      <h3 className="font-bold text-secondary-500">{songs[currentSongIndex].name}</h3>
      <audio ref={audioPlayer} src={songs[currentSongIndex].audio}></audio>
      
      {/* progess bar */}
      <div className="-m-1">
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
        <div className="flex items-center justify-center text-secondary-500">
          <button 
            className="flex items-center cursor-pointer text-3xl"
            onClick={() => skipSong(false, songs)}>
            <BiSkipPrevious />
          </button>
          <button
            className="text-5xl shadow-sm text-center px-2"
            onClick={togglePlayPause}>
            { isPlaying ? <BsPauseCircleFill color="white"/> : <BsFillPlayCircleFill/>}
          </button>
          <button 
            className="flex items-center cursor-pointer text-3xl"
            onClick={() => skipSong(true, songs)}>
            <BiSkipNext />
          </button>
        </div>

        <div className="flex items-center text-lg space-x-2 text-secondary-500">
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
    </section>
  )
}
export default MusicPlayer;