import React from "react";
import { navigate } from "gatsby";

import { Input } from "@twilio-paste/input";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search?search=${search}`);
        setSearch("");
      }}
    >
      <Input id="search" name="search" type="search" placeholder="Search all posts..." insertBefore={<SearchIcon decorative />} value={search} onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
};

export default SearchBar;
