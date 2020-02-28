import React from "react";

export default function SearchForm({ search, handleSearch }) {
 console.log(search, handleSearch);
  return (
    <section className="search-form">
     <form>
       <input
        type="text"
        name="name"
        value={search}
        onChange={handleSearch}
        placeholder="search"
        />
     </form>
    </section>
  );
}
