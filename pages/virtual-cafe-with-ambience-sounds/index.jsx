import {
  buildPaths,
  extractFile,
} from "@/components/utils/getData";
import Player from "@/components/coffee/virtualCafe/Player/Player";
import MusicPlayer from "@/components/coffee/virtualCafe/MusicPlayer/MusicPlayer";
import SpotifyPlayer from "react-spotify-player";
import Image from "next/image";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { Layout } from "@/components/coffee/VirtualCafe";

export async function getStaticProps() {
  const cafePath = buildPaths('cafes.json');
  const effectPath = buildPaths('effects.json');
  const musicPath = buildPaths('music.json');
  const cafes = extractFile(cafePath).data;
  const effects = extractFile(effectPath).data;
  const music = extractFile(musicPath).data;
  return {
    props: { cafes, effects, music },
  };
}

const VirtualCafe = ({ cafes, effects, music }) => {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: "100%",
    height: 200,
  };
  const view = "coverart"; // or 'coverart'
  const theme = "white"; // or 'white'

  return (
    <>
      <NextSeo
        title="We Dream Of Coffee"
        description="Boost your productivity and creativity for work and school with ambience sounds at this virtual cafe."
        canonical="https://www.wedreamofcoffee.com/"
        openGraph={{
          url: "https://www.facebook.com/wedreamofcoffee",
          title: "We Dream Of Coffee",
          description:
            "Boost your productivity and creativity for work and school with ambience sounds at this virtual cafe.",
          images: [
            {
              url: "https://www.wedreamofcoffee.com/seo/Open Graph.png",
              width: 1200,
              height: 627,
              alt: "facebook opengraph",
              type: "image/png",
            },
            {
              url: "https://www.wedreamofcoffee.com/seo/Twitter Card.png",
              width: 800,
              height: 418,
              alt: "twitter card",
              type: "image/png",
            },
            { url: "https://www.wedreamofcoffee.com/logo.png" },
            { url: "https://www.wedreamofcoffee.com/coffeeshop.svg" },
          ],
          siteName: "We Dream Of Coffee",
        }}
        twitter={{
          handle: "@wedreamofcoffee",
          site: "@wedreamofcoffee ",
          cardType: "summary_large_image",
        }}
      />

      <ArticleJsonLd
        url="https://www.wedreamofcoffee.com"
        title="Virtual Cafe Progressive Web App"
        images={[
          "https://www.wedreamofcoffee.com/logo.png",
          "https://www.wedreamofcoffee.com/coffeeshop.svg",
        ]}
        datePublished="2022-02-05T08:00:00+08:00"
        dateModified="2022-10-05T09:00:00+08:00"
        authorName={[
          {
            name: "Olivia Gilliand",
            url: "https://www.wedreamofcoffee.com/#oliviagilliand",
          },
        ]}
        publisherName="We Dream Of Coffee"
        publisherLogo="https://www.wedreamofcoffee.com/logo.png"
        description="Boost your productivity and creativity for work and school with ambience sounds at this virtual cafe."
        isAccessibleForFree={true}
      />

      <section className="section-main grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-1 lg:col-span-3 text-xs">
          <div className="m-3">
            {cafes.map((sound) => (
              <Player key={sound.name} sound={sound} />
            ))}

            {effects.map((sound) => (
              <Player key={sound.name} sound={sound} />
            ))}

            <div className="mx-3 col-span-4">
              <MusicPlayer music={music} />
            </div>

            <div className="mx-3 mt-3 rounded-sm">
              <SpotifyPlayer
                className="rounded-sm"
                uri="spotify:artist:2Kx7MNY7cI1ENniW7vT30N"
                size={size}
                view={view}
                theme={theme}
              />
            </div>
          </div>
        </div>

        <div className="section-right col-span-1 lg:col-span-7 m-3">
          <div className="section-right__image-box my-3">
            <Image src="/coffeeshop.svg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VirtualCafe;

VirtualCafe.Layout = Layout;
