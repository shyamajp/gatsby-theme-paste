import React from "react";

import { DisplayPillGroup } from "@twilio-paste/display-pill-group";

import { Widget, TagPill } from "./common";
import { sortByTotalCount } from "../utils/queries";
import { PostGroup } from "../types";

type Props = {
  tags: PostGroup[];
};

const Tags = ({ tags }: Props) => {
  return (
    <Widget title="Tags">
      <DisplayPillGroup aria-label="categories">
        {tags.sort(sortByTotalCount).map(({ fieldValue, totalCount }) => (
          <TagPill key={fieldValue} to={`/tags/${fieldValue.toLowerCase()}`}>
            {fieldValue} {totalCount}
          </TagPill>
        ))}
      </DisplayPillGroup>
    </Widget>
  );
};

export default Tags;
