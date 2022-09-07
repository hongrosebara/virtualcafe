import { buildAmbiencePath, buildEffectPath, extractSound } from "./api/getsounds"
import CafePlayer from "@/components/CafePlayer"
import MusicPlayer from "@/components/MusicPlayer"
import SoundEffectPlayer from "@/components/SoundEffectPlayer"
import Cafe from "@/components/Cafe"
import { motion } from "framer-motion"


const HomePage = ({ cafes, effects }) => {

  return (
    <div>
      <motion.h2 animate={ {fontSize: 100, color: 'red'} }>Coffee</motion.h2>
      <section className="section-main grid grid-cols-9 gap-2">
        <div className="col-span-3 text-base">
          <div>
            <h2>Cafes</h2>
            <div className="grid lg:grid-cols-2 gap-2">
              {cafes.map((sound) => (
                <CafePlayer 
                  key={sound.id} 
                  sound={sound} 
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
            <MusicPlayer />
          </div>
        </div>
        <div className="col-span-6">
          {/* <Cafe /> */}
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