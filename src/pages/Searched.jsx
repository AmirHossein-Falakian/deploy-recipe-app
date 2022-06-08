import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, GridCard } from "../components/style/StyledHome";

const Searched = () => {
  const [searchedRecipes, setsearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setsearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
    console.log(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <GridCard key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </GridCard>
        );
      })}
    </Grid>
  );
};

export default Searched;
