import { BsFillPlayCircleFill, BsPauseCircleFill, BsFillVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";
import { useAudio } from "../../../hooks/AudioHook";

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
      className="m-2 py-2 col-span-2 lg:col-span-4 flex rounded-sm items-center justify-between text-base text-primary">
        <audio ref={audioPlayer} src={sound.audio}></audio>
        <div className="flex flex-start items-center">
          <button
            className="text-2xl text-center px-2"
            onClick={togglePlayer}>
            { isPlaying ? <BsPauseCircleFill color="var(--color-bg-other)" /> : <BsFillPlayCircleFill />}
          </button>
          <h3 className="text-base text-left">{sound.name}</h3>
        </div>
      <div className="flex m-3 items-center">
        <BsFillVolumeUpFill className="ml-5" />
        <input
          className="volume-bar__others"
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