import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <div className="section-main m-6">
      <Image
        src="/404.svg"
        layout='fill'
        sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
      />
    </div>
  )
}