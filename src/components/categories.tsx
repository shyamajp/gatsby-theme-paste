import React from "react";

import { DisplayPillGroup } from "@twilio-paste/display-pill-group";

import { Widget, CategoryPill } from "./common";
import { sortByTotalCount } from "../utils/queries";
import { PostGroup } from "../types";

type Props = {
  categories: PostGroup[];
};

const Categories = ({ categories }: Props) => {
  return (
    <Widget title="Categories">
      <DisplayPillGroup aria-label="categories">
        {categories.sort(sortByTotalCount).map(({ fieldValue, totalCount }) => (
          <CategoryPill key={fieldValue} to={`/categories/${fieldValue.toLowerCase()}`}>
            {fieldValue} {totalCount}
          </CategoryPill>
        ))}
      </DisplayPillGroup>
    </Widget>
  );
};

export default Categories;
