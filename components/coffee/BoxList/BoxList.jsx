import { Box } from "@/components/coffee";

const BoxList = ({ boxes }) => {
  return (
    <div className="my-10 md:my-20 flex flex-col items-start justify-start gap-10">
      {boxes &&
        boxes.map((box, index) => (
          <Box
            key={index}
            index={index + 1}
            imgUrl={box.imgUrl}
            box={box.frontmatter}
          />
        ))}
    </div>
  );
};

export default BoxList;
