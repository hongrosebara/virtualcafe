import { API_URL } from "@/config/index"
import { useState } from "react"
import Player from "@/components/Player"
import SoundEffectPlayer from "@/components/SoundEffectPlayer"
import Cafe from "@/components/Cafe"
import { motion } from "framer-motion"
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";

export default function HomePage({cafeSounds, effects}) {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, SetVolume] = useState(1);

  // const particlesInit = useCallback(async (engine) => {
  //   console.log(engine);
  //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

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
            {cafeSounds.map((sound) => (
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
            {effects.map((effect) => (
              <SoundEffectPlayer 
                key={effect.id} 
                sound={effect} 
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
  const res = await fetch(`${API_URL}/api/ambience`)
  const cafeSounds = await res.json()

  const res2 = await fetch(`${API_URL}/api/effects`)
  const effects = await res2.json()

  return {
    props: { cafeSounds, effects },
    revalidate: 1 
  }
}