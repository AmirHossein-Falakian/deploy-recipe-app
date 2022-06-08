import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "./style/StyledHome";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <div>
      <StyledForm onSubmit={(e) => submitHandler(e)}>
        <div>
          <FaSearch></FaSearch>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
      </StyledForm>
    </div>
  );
};

export default Search;
