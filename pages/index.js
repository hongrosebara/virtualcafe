import { buildAmbiencePath, buildEffectPath, buildMusicPath, extractSound } from "./api/getsounds"
import Player from "@/components/players/Player";
import MusicPlayer from "@/components/players/MusicPlayer";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const HomePage = ({ cafes, effects, music }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <section className="section-main grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-1 lg:col-span-3 text-base">
        <div className="m-3 grid grid-cols-4">

          {cafes.map((sound) => (
            <Player 
              key={sound.name} 
              sound={sound} 
            />
          ))}

          {effects.map((sound) => (
            <Player 
              key={sound.name} 
              sound={sound} 
            />
          ))}


          <div className="m-3 col-span-4">
            <MusicPlayer music={music} />
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute'}}>
        <Particles id="tsparticles" url="json/bubble.json" init={particlesInit} loaded={particlesLoaded} />
      </div>
      <div className="col-span-1 lg:col-span-7">
        <img src="/background-01.png" alt="" />
      </div>
    </section>
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