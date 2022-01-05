export const sortByTotalCount = (a, b) => b.totalCount - a.totalCount;

export const toTitleCase = (text: string): string => text.replace(/\b\S/g, (t) => t.toUpperCase());

export const isString = (test): boolean => typeof test === "string" || test instanceof String;
