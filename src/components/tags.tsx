import React from "react";

import { Widget, TagPill, PostGroupPillGroup } from "./common";
import { sortByTotalCount } from "../utils/queries";
import { PostGroup } from "../types";

type Props = {
  tags: PostGroup[];
};

const Tags = ({ tags }: Props) => {
  return (
    <Widget title="Tags">
      <PostGroupPillGroup aria-label="categories" justifyContent="center">
        {tags.sort(sortByTotalCount).map(({ fieldValue, totalCount }) => (
          <TagPill key={fieldValue} to={`/tags/${fieldValue.toLowerCase()}`}>
            {fieldValue} {totalCount}
          </TagPill>
        ))}
      </PostGroupPillGroup>
    </Widget>
  );
};

export default Tags;
