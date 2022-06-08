import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ButtonWrapper,
  DetailWrapper,
  Info,
  StyledButton,
} from "../components/style/StyledHome";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instuctions");
  let params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="img-container">
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <ButtonWrapper>
          <StyledButton
            className={active === "instuctions" ? "active" : null}
            onClick={() => setActive("instuctions")}
          >
            Instructions
          </StyledButton>
          <StyledButton
            className={active === "ingridients" ? "active" : null}
            onClick={() => setActive("ingridients")}
          >
            Ingridients
          </StyledButton>
        </ButtonWrapper>
        {active === "instuctions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instuctions }}></h3>
          </div>
        )}
        {active === "ingridients" && (
          <ul>
            {details.extendedIngredients.map((ingridient) => (
              <li key={details.id}>{ingridient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default Recipe;
<div></div>;
