import Image from "next/image";
import { marked } from "marked";
import s from "./RecipePageDetail.module.scss";
import {
  IngredientList,
  SpecificationList,
} from "@/components/coffee";

const RecipePage = ({
  imgUrl,
  subtitle,
  intro,
  equipments,
  coffee_types,
  ingredients,
  excerpt,
  content,
}) => {
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
          <h2>{subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: marked(intro) }}></div>
          <div className="block lg:hidden">
            <IngredientList ingredients={ingredients} />
          </div>

          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <div className="col-span-1 m-0 p-0">
        <div className="hidden lg:block p-0">
          <IngredientList ingredients={ingredients} />
          <SpecificationList heading="Coffee" lists={coffee_types} />
          <SpecificationList heading="Equipments" lists={equipments} />
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
