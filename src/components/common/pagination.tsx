import React from "react";
import { navigate } from "gatsby";

import { Pagination as PastePagination, PaginationItems, PaginationEllipsis, PaginationArrow, PaginationNumbers, PaginationNumber } from "@twilio-paste/pagination";

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
  link?: {
    first: string;
    pagePrefix: string;
  };
};

// https://paste.twilio.design/components/pagination/#using-paginationellipsis
const filterPages = (currentPage: number, totalPages: number): Array<number | null> => {
  // show all
  if (totalPages <= 7) {
    return [...Array(totalPages).keys()].map((x) => x + 1);
  }
  // first
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, null, totalPages];
  }
  // last
  if (currentPage >= totalPages - 3) {
    return [1, null, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  // middle
  return [1, null, currentPage - 1, currentPage, currentPage + 1, null, totalPages];
};

export const Pagination = ({ totalPages, currentPage, totalPosts, postsPerPage, link = { first: "/", pagePrefix: "/blog" } }: PaginationProps) => {
  const start = (currentPage - 1) * postsPerPage + 1;
  const end = totalPosts - currentPage * postsPerPage > 0 ? currentPage * postsPerPage : totalPosts;
  const results = `${start}-${end} of ${totalPosts}`;

  const goToNextPage = () => navigate(`${link.pagePrefix}/${currentPage + 1}`);
  const goToPreviousPage = () => navigate(`${link.pagePrefix}/${currentPage - 1}`);
  const goToPage = (page: number) => {
    navigate(page === 1 ? link.first : `${link.pagePrefix}/${page}`);
  };

  if (totalPages <= 1) {
    return <></>;
  }

  return (
    <PastePagination label="paged pagination navigation">
      <PaginationItems>
        <PaginationArrow label="Go to previous page" variant="back" onClick={goToPreviousPage} disabled={currentPage === 1} />
        <PaginationNumbers pageLabel={results}>
          {filterPages(currentPage, totalPages).map((page) => {
            return page ? (
              <PaginationNumber key={page} label={`Go to page ${page}`} isCurrent={page === currentPage} onClick={() => goToPage(page)}>
                {page}
              </PaginationNumber>
            ) : (
              <PaginationEllipsis label="Collapsed pages" />
            );
          })}
        </PaginationNumbers>
        <PaginationArrow label="Go to next page" variant="forward" onClick={goToNextPage} disabled={currentPage === totalPages} />
      </PaginationItems>
    </PastePagination>
  );
};
