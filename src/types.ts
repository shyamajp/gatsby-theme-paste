export interface PageContext<K extends PropertyKey, V> {
  pageContext: {
    [key in K]: V;
  };
}

interface Data<T> {
  data: {
    allMdx: T;
  };
}

export interface PostData<T> {
  data: {
    allMdx: {
      edges: {
        node: T;
      }[];
      totalCount: number;
    };
  };
}

export interface PostGroupData {
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
}
