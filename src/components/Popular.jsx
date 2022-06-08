import React, { useEffect, useState } from "react";
import "./style/StyledHome.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Card, Gradiant, Wrapper } from "./style/StyledHome.js";
import { Link } from "react-router-dom";
const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data);
      setPopular(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
            breakpoints: {
              1700: { perPage: 3 },
              1200: { perPage: 2 },
              850: { perPage: 1, arrows: true },
            },
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <div>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradiant />
                    </div>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
