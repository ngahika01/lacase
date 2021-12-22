import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyWord] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          className="form-control"
          type="text"
          name="q"
          onChange={(e) => setKeyWord(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5 "
        />
      </form>

    </>
  );
};

export default SearchBox;
