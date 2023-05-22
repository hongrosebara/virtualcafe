import famousRoasters from "@/data/roasters/famous.json";
import Roaster from "@/components/roasters/Roaster";

export async function getStaticProps() {
  return {
    props: {
      roasters: famousRoasters,
    },
  };
}

const FamousRoasterDirectory = (props) => {
  const roasters = props.roasters;
  return (
    <>
      Famous Roaster Directory
      <div className="flex items-center justify-between space-x-4">
        {roasters.length > 0 &&
          roasters.map((roaster) => (
            <Roaster 
              directory="famous"
              key={roaster.id} 
              roaster={roaster} />
          ))}
      </div>
    </>
  );
};
export default FamousRoasterDirectory;
