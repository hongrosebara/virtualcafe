import Image from "next/image";
import { marked } from "marked";
import s from "./RecipePageDetail.module.scss";

const RecipePage = ({ imgUrl, excerpt, content }) => {
  return (
    <div className={s["recipe-content"]}>
      <div className="col-span-1 lg:col-span-2">
        <Image
          src={imgUrl}
          alt={`${excerpt.slice(0, 20)}-recipe`}
          width={800}
          height={400}
          className="rounded-md"
        />
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <div className="col-span-1">
        <h3>Ingredients</h3>
        <ul>
          <li>2 tablespoons of coarsely ground Vietnamese coffee</li>
          <li>2 tablespoons of sweetened condensed milk</li>
          <li>Ice cubes</li>
          <li>Hot water</li>
        </ul>
      </div>
    </div>
  );
};

export default RecipePage;
