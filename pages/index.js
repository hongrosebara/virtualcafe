import { buildAmbiencePath, buildEffectPath, extractSound } from "./api/getsounds"

function HomePage({ ambience }) {

  return (
    <div>
      <section className="section-main grid grid-cols-9 gap-2">
        {ambience.ambience.map(sound => (
          <li key={sound.id}>{sound.name}</li>
        ))}
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const ambiencePath = buildAmbiencePath();
  const ambience = extractSound(ambiencePath);
  return {
    props: {ambience} 
  }
}

export default HomePage;