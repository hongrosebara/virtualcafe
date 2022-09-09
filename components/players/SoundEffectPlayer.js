import { useState, useEffect, useRef } from "react";
import { BsFillPlayFill} from "react-icons/bs";
import { BsPauseFill} from "react-icons/bs";
import { motion } from "framer-motion";
import { useAudio } from "../hooks/AudioHook";

export default function Player({sound}) {
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
      background: "#fff",
      border: '5px solid #9c6780'
    },
    inactive: { 
      background: "#9c6780",
      border: '5px solid #9c6780'
    },
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
      <button onClick={togglePlayer}>
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