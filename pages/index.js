import { API_URL } from "@/config/index"
import { useState } from "react"
import { useRouter } from "next/router"
import Player from "@/components/Player"
import Cafe from "@/components/Cafe"
import { motion } from "framer-motion"

export default function HomePage({cafeSounds, effects}) {
  const router = useRouter();
  const {v} = router.query;
  return (
    <div>
      <motion.h2 animate={ {fontSize: 100, color: 'red'} }>Coffee</motion.h2>
      <section className="section-main grid grid-cols-12 gap-2">
      <div className="col-span-3 text-base">
        <div>
          {cafeSounds.map((sound) => (
            <Player 
              key={sound.id} 
              sound={sound} 
            />
          ))}
        </div>
        
        <div>
          {effects.map((effect) => (
            <Player 
              key={effect.id} 
              sound={effect} 
            />
          ))}
        </div>
      </div>
      <div className="col-span-9">
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