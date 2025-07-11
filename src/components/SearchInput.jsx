

function SearchInput( {value,onChangeValue} ) {
  return (
    <div className="search-input">
      <i className="fa-solid fa-magnifying-glass"></i>
      {/* <i className="fa-light fa-magnifying-glass"></i> */}
      <label htmlFor="site-search"></label>
      <input
        type="search"
        placeholder="Пошук..."
        className="search"
        onChange={onChangeValue}
      />
      {/* <button className="delete-button">
        <i className="fa-light fa-delete-left"></i>
      </button> */}
    </div>
  );
}

export default SearchInput