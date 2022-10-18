import { BsFillPlayCircleFill, BsPauseCircleFill, BsFillVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";
import { useAudio } from "../hooks/AudioHook";

export default function Player({sound}) {

  const {
    isPlaying,
    audioPlayer,
    volume,
    volumeBar,
    changeVolume,
    togglePlayer,
  } = useAudio();

  return (
    <div
      className="m-3 col-span-2 lg:col-span-4 flex rounded-sm items-center justify-between bg-secondary-500 dark:bg-secondary-400">
        <audio ref={audioPlayer} src={sound.audio}></audio>
        <div className="my-2 flex flex-start items-center">
          <button
            className="text-2xl text-secondary-900 text-center px-2"
            onClick={togglePlayer}>
            { isPlaying ? <BsPauseCircleFill color="var(--bg-primary-600)" /> : <BsFillPlayCircleFill />}
          </button>
          <h3 className="text-tiny text-left text-secondary-900 dark:text-primary-800">{sound.name}</h3>
        </div>
      <div className="flex m-3 items-center">
        <BsFillVolumeUpFill className="ml-5 text-primary-700"/>
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
  )
}