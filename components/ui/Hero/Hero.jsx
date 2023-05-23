import Image from "next/image"

const Hero = () => {
  const imageStyle = {
    borderRadius: '5%',
    border: '1px solid #fff',
  };
  return (
    <div>
      <Image src="/assets/home/desktop/image-hero-coffeepress.jpg" width={1300} height={600} className="rounded-sm" alt="wedreamofcoffee hero image" />
    </div>
  )
}
export default Hero