import { buildAmbiencePath, buildEffectPath, buildMusicPath, extractSound } from "./api/getsounds"
import Player from "@/components/players/Player"
import MusicPlayer from "@/components/players/MusicPlayer"
import SpotifyPlayer from "react-spotify-player"

const HomePage = ({ cafes, effects, music }) => {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'
  
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
          
          <div className="m-3 col-span-4">
            <SpotifyPlayer
              uri="spotify:artist:2Kx7MNY7cI1ENniW7vT30N"
              size={size}
              view={view}
              theme={theme}
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-7 flex justify-center">
        <iframe src="https://embed.lottiefiles.com/animation/113349"></iframe>
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