import { BsFillPlayCircleFill, BsPauseCircleFill, BsFillVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";
import { useAudio } from "../hooks/AudioHook";

export default function CafePlayer({sound}) {
  const {
    isPlaying,
    isActive,
    audioPlayer,
    volume,
    volumeBar,
    changeVolume,
    togglePlayer,
  } = useAudio();

  const variants = {
    active: { 
      border: '5px solid #9c6780'
    },
    inactive: { 
      border: '5px solid #9c6780'
    },
  }

  return (
    <section>
      <div
        className="flex m-3 rounded-sm items-center justify-between bg-primary-50">
          <audio ref={audioPlayer} src={sound.audio}></audio>
          <div className="flex flex-start items-center">
            <button
              className="text-2xl text-primary-600 text-center px-2"
              onClick={togglePlayer}>
              { isPlaying ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
            </button>
            <h3 className="text-tiny text-left">{sound.name}</h3>
          </div>
        <div className="flex m-3 items-center">
        <BsFillVolumeUpFill className="ml-5"/>
        <input
          className="volume-bar"
          type="range"
          ref={volumeBar}
          value={volume}
          min={0.1} max={1}
          step={0.01}
          onChange={changeVolume}
        />
      </div>
      </div>

    </section>
  )
}