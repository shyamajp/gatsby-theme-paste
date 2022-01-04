import React from "react";
import { navigate } from "gatsby";

import { Pagination as PastePagination, PaginationItems, PaginationArrow, PaginationNumbers, PaginationNumber } from "@twilio-paste/pagination";

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
          {Array.from(Array(totalPages), (_, i) => {
            const page = i + 1;
            return (
              <PaginationNumber key={page} label={`Go to page ${page}`} isCurrent={page === currentPage} onClick={() => goToPage(page)}>
                {page}
              </PaginationNumber>
            );
          })}
        </PaginationNumbers>
        <PaginationArrow label="Go to next page" variant="forward" onClick={goToNextPage} disabled={currentPage === totalPages} />
      </PaginationItems>
    </PastePagination>
  );
};
