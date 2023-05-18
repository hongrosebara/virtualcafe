import Image from "next/image"
import Link from "next/link"

const Store = ({ shop }) => {
  return (
    <div className="flex flex-col justify-start cursor-pointer">
      <Link href={`coffee-shop-directory/${shop.name}`}>
        <div>
          <Image
            src={
              shop.imgUrl ||
              "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            height={300}
            width={300}
          />
          <h2>{shop.name}</h2>
        </div>
      </Link>
    </div>
  )
}
export default Store
