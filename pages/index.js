import { buildAmbiencePath, buildEffectPath, extractSound } from "./api/getsounds"
import { API_URL } from "@/config/index"
import { useState } from "react"
import Player from "@/components/Player"
import SoundEffectPlayer from "@/components/SoundEffectPlayer"
import Cafe from "@/components/Cafe"
import { motion } from "framer-motion"


const HomePage = ({ cafes, effects }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, SetVolume] = useState(1);

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
    <div>
      <motion.h2 animate={ {fontSize: 100, color: 'red'} }>Coffee</motion.h2>
      <section className="section-main grid grid-cols-9 gap-2">
        <div className="col-span-3 text-base">
          <div>
            <h2>Cafes</h2>
            <div className="grid lg:grid-cols-2 gap-2">
              {cafes.map((sound) => (
                <Player 
                  key={sound.id} 
                  sound={sound} 
                  isActive={isActive}
                  isPlaying={isPlaying}
                  volume={volume}
                  togglePlayPause={togglePlayPause}
                  changeVolume={changeVolume}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h2>Weather</h2>
            <div className="grid lg:grid-cols-3 gap-2">
              {effects.map((sound) => (
                <SoundEffectPlayer 
                  key={sound.id} 
                  sound={sound} 
                />
              ))}
            </div>
          </div>

          <div>
            Music
          </div>
        </div>
        <div className="col-span-6">
          <Cafe />
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const cafePath = buildAmbiencePath();
  const effectPath = buildEffectPath();
  const cafes = extractSound(cafePath).sounds;
  const effects = extractSound(effectPath).sounds;
  return {
    props: { cafes, effects} 
  }
}

export default HomePage;