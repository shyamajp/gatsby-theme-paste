import React from "react";

import { Widget, CategoryPill, PostGroupPillGroup } from "./common";
import { sortByTotalCount } from "../utils/queries";
import { PostGroup } from "../types";

type Props = {
  categories: PostGroup[];
};

const Categories = ({ categories }: Props) => {
  return (
    <Widget title="Categories">
      <PostGroupPillGroup aria-label="categories" justifyContent="center">
        {categories.sort(sortByTotalCount).map(({ fieldValue, totalCount }) => (
          <CategoryPill key={fieldValue} to={`/categories/${fieldValue.toLowerCase()}`}>
            {fieldValue} {totalCount}
          </CategoryPill>
        ))}
      </PostGroupPillGroup>
    </Widget>
  );
};

export default Categories;
