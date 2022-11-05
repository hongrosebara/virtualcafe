import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://wedreamofcoffee.com/${src}?w=${width}&q=${quality || 75}`
}


export default function NotFoundPage() {
  return (
    <div className="container flex justify-center m-6">
      <Image
        loader={myLoader}
        src="404.svg"
        alt="404"
        width={500}
        height={500}
      />
    </div>
  )
}