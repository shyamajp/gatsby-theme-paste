export type PageContext<K extends PropertyKey, V> = {
  pageContext: {
    [key in K]: V;
  };
};

type AllMdxData<T> = {
  data: {
    allMdx: T;
  };
};

export type PostData<T> = AllMdxData<{
  edges: {
    node: T;
  }[];
  totalCount: number;
}>;

export type PostGroup = {
  fieldValue: string;
  totalCount: string;
};

export type PostGroupData = AllMdxData<{
  group: PostGroup[];
}>;
