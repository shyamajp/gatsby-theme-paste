import React from "react";

import { PostGroup } from "../types";

import { Widget, CategoryPill, PostGroupPillGroup } from "./common";

type Props = {
  categories: PostGroup[];
};

const Categories = ({ categories }: Props) => {
  return (
    <Widget title="Categories">
      <PostGroupPillGroup aria-label="categories" justifyContent="center">
        {categories.map(({ fieldValue, totalCount }) => (
          <CategoryPill key={fieldValue} to={`/categories/${fieldValue.toLowerCase()}`}>
            {fieldValue} {totalCount}
          </CategoryPill>
        ))}
      </PostGroupPillGroup>
    </Widget>
  );
};

export default Categories;
