import { useState, useEffect, useRef } from "react";
import { BsFillPlayFill} from "react-icons/bs"
import { BsPauseFill} from "react-icons/bs"
import { motion } from "framer-motion"

export default function CafePlayer({sound}) {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, SetVolume] = useState(1);
  const audioPlayer = useRef();
  const volumeBar = useRef();

  const variants = {
    active: { 
      background: "#fff",
      border: '5px solid #C37A2E'
    },
    inactive: { 
      background: "#C37A2E",
    },
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    setIsActive(!isActive)
    if (prevValue) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
  }

  const changeVolume = () => {
    SetVolume(volumeBar.current.value);
    audioPlayer.current.volume = volumeBar.current.value;
  }

  return (
    <motion.div 
      className="m-2 p-2 rounded-md"
      animate={   
        isActive ? "active" : "inactive"
      }
      variants={variants}
      >
      <audio ref={audioPlayer} src={sound.audio}></audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill /> : <BsFillPlayFill /> }
        {sound.name}
      </button>

      <div>
        <input
          type="range"
          ref={volumeBar}
          value={volume}
          min={0.1} max={1}
          step={0.01}
          onChange={changeVolume}
        />
      </div>
    </motion.div>
  )
}