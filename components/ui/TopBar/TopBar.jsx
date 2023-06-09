import { Author, ShareBar } from "@/components/ui";

const TopBar = ({ date, author, readTime}) => {
  return (
    <section className="my-20">
      <Author
        readTime={readTime}
        author={author}
        date={date}
      />
      <ShareBar />
    </section>
  )
}
export default TopBar