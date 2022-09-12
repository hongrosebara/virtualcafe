import { buildAmbiencePath, buildEffectPath, buildMusicPath, extractSound } from "./api/getsounds"
import CafePlayer from "@/components/players/CafePlayer";
import MusicPlayer from "@/components/players/MusicPlayer";
import SoundEffectPlayer from "@/components/players/SoundEffectPlayer";
import Cafe from "@/components/Cafe";
import { motion } from "framer-motion";

const HomePage = ({ cafes, effects, music }) => {

  return (
    <div>
      <motion.h2 animate={ {fontSize: 100, color: 'red'} }>Coffee</motion.h2>
      <section className="section-main grid grid-cols-9 gap-2">
        <div className="col-span-2 text-base">
          <div>
            <div className="m-3">
              {cafes.map((sound) => (
                <CafePlayer 
                  key={sound.id} 
                  sound={sound} 
                />
              ))}
            </div>
          </div>
          
          <div>
            <div className="m-3">
              {effects.map((sound) => (
                <SoundEffectPlayer 
                  key={sound.id} 
                  sound={sound} 
                />
              ))}
            </div>
          </div>

          <div className="m-3">
            <MusicPlayer music={music} />
          </div>
        </div>
        <div className="col-span-7">
          <Cafe />
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const cafePath = buildAmbiencePath();
  const effectPath = buildEffectPath();
  const musicPath = buildMusicPath();
  const cafes = extractSound(cafePath).sounds;
  const effects = extractSound(effectPath).sounds;
  const music = extractSound(musicPath).sounds;
  return {
    props: { cafes, effects, music} 
  }
}

export default HomePage;