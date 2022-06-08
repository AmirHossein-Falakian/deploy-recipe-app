import { React } from "react";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiCroissant } from "react-icons/gi";
import { List, StyledLink } from "./style/StyledHome";

const Category = () => {
  return (
    <List>
      <StyledLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/French"}>
        <GiCroissant />
        <h4>French</h4>
      </StyledLink>
    </List>
  );
};

export default Category;
