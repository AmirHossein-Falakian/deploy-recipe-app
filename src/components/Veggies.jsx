import React from "react";
import "./style/StyledHome.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Card, Gradiant, Wrapper } from "./style/StyledHome.js";
import { Link } from "react-router-dom";

const Veggies = () => {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {
    const check = localStorage.getItem("veggies");

    if (check) {
      setVeggies(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tag=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      console.log(data);
      setVeggies(data.recipes);
    }
  };

  return (
    <div>
      <div>
        <Wrapper>
          <h3>Our Vegetarian Picks</h3>
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
            {veggies.map((recipe) => {
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
    </div>
  );
};

export default Veggies;
