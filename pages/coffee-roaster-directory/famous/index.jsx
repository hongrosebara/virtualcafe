import { Roaster } from "@/components/coffee";
import { Layout } from "@/components/common";
import { buildPaths, extractFile } from "@/components/utils/getData";

export async function getStaticProps() {
  const roasterPath = buildPaths('roasters.json');
  const roasters = extractFile(roasterPath).data;

  return {
    props: {
      roasters,
      revalidate: 1,
    },
  };
}

const FamousRoasterDirectory = ({ roasters }) => {
  return (
    <div className="wrapper">
      Famous Roaster Directory
      <div className="flex items-center justify-between space-x-4">
        {roasters.length > 0 &&
          roasters.map((roaster) => (
            <Roaster directory="famous" key={roaster.id} roaster={roaster} />
          ))}
      </div>
    </div>
  );
};

export default FamousRoasterDirectory;

FamousRoasterDirectory.Layout = Layout;
