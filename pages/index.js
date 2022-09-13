import { buildAmbiencePath, buildEffectPath, buildMusicPath, extractSound } from "./api/getsounds"
import Player from "@/components/players/Player";
import MusicPlayer from "@/components/players/MusicPlayer";
import Cafe from "@/components/Cafe";

const HomePage = ({ cafes, effects, music }) => {
  return (
    <div>
      <section className="section-main grid lg:grid-cols-10 gap-2">
        <div className="col-span-5 lg:col-span-3 text-base">
          <div>
            <div className="m-3">
              {cafes.map((sound) => (
                <Player 
                  key={sound.id} 
                  sound={sound} 
                />
              ))}
            </div>
          </div>
          
          <div>
            <div className="m-3">
              {effects.map((sound) => (
                <Player 
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
        <div className="lg:col-span-7">
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