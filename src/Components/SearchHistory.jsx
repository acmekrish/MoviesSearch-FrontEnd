function SearchHistory({ searchHistory, onSearch }) {
  return (
    <div>
      <h3>Recent Searches</h3>
      <ul>
        {searchHistory?.map((query) => (
          <li key={query}>
            <span onClick={() => onSearch(query)}>{query}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchHistory;
