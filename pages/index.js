import { API_URL } from "@/config/index"
import { useState } from "react"
import { useRouter } from "next/router"
import Player from "@/components/Player"

export default function HomePage({cafeSounds, effects}) {
  const router = useRouter();
  const {v} = router.query;
  return (
    <section className="section-main grid grid-cols-12 gap-2">
      <div className="col-span-3 text-base">
        {cafeSounds.map((sound) => (
          <Player 
            key={sound.id} 
            sound={sound} 
          />
        ))}
      </div>
      <div className="col-span-6">
        <img src="/dreamcafe.png" width={500} alt="" />
      </div>
      <div className="col-span-3 text-base">
        {effects.map((effect) => (
          <Player 
            key={effect.id} 
            sound={effect} 
          />
        ))}
      </div>
    </section>
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