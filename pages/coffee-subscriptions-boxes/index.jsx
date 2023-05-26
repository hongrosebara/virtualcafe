import {
  markdownWithMeta,
  buildPathsForPosts,
  extractFolder,
} from "@/components/utils/getData";
import { Layout } from "@/components/common";
import matter from "gray-matter";
import { Box } from "@/components/coffee";
import { getListOfCoffeeSubscriptionBoxPhotos } from "@/lib/coffee-roaster";

export async function getStaticProps() {
  // Get photos from Unsplash
  const photos = await getListOfCoffeeSubscriptionBoxPhotos();

  // Generate markdown posts
  const postPath = buildPathsForPosts("coffee-subscription-boxes");
  const posts = extractFolder(postPath).map((post, index) => {
    const slug = post.replace(".md", "");
    const content = markdownWithMeta(postPath, post);
    const { data: frontmatter } = matter(content);

    return {
      slug,
      frontmatter,
      imgUrl: photos.length > 0 ? photos[index] : null,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const CoffeeSubscriptionBoxes = ({ posts }) => {
  console.log(posts)
  return (
    <section className="content-wrapper">
      <h1 className="primary-heading">Coffee Subscription Boxes</h1>
      <div className="my-3 text-center">
        Elevate your coffee experience with our selection of carefully curated
        coffee subscription boxes.
      </div>
      <div className="my-20 flex flex-col items-start justify-start gap-4">
        {posts &&
          posts.map((post) => (
            <Box
              imgUrl={post.imgUrl}
              box={post.frontmatter} />
          ))}
      </div>
    </section>
  );
};
export default CoffeeSubscriptionBoxes;

CoffeeSubscriptionBoxes.Layout = Layout;
