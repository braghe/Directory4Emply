import React from "react";

function SearchForm(props){
  return(
    <div class="card">
    <div class="card-body">
    <div>
      <label for="site-search">Search For Employee:</label>
      <input type="search" id="site-search" name="q"
      aria-label="Search through site content"/>

      <button>Search</button>
    </div>
    </div>
</div>
  );
}
    
export default SearchForm;