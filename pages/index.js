import { buildAmbiencePath, buildEffectPath, buildMusicPath, extractSound } from "./api/getsounds"
import Player from "@/components/players/Player";
import MusicPlayer from "@/components/players/MusicPlayer";
import Cafe from "@/components/Cafe";

const HomePage = ({ cafes, effects, music }) => {
  return (
    <div>
      <section className="section-main grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-1 lg:col-span-3 text-base">
          <div className="grid grid-cols-4">
          <div className="m-3 col-span-2 lg:col-span-4">
            {cafes.map((sound) => (
              <Player 
                key={sound.id} 
                sound={sound} 
              />
            ))}

            {effects.map((sound) => (
              <Player 
                key={sound.id} 
                sound={sound} 
              />
            ))}
          </div>

          <div className="m-3 col-span-2 lg:col-span-4">
            <MusicPlayer music={music} />
          </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-7">
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