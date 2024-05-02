import React, { useState } from "react";
import styled from "styled-components";

const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
`;

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <StyledSearchInput>
      <StyledInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <StyledButton onClick={handleSearch}>Search</StyledButton>
    </StyledSearchInput>
  );
}

export default SearchInput;
