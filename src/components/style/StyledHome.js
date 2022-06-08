import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export const Wrapper = styled.div `
  margin: 4rem 0;
  width:100%; 
`;
export const Card = styled.div `
  min-height: 220px;
  min-width: 230px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 32px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 80%;
    text-align:center;
    font-weight:600;
    font-size: 12px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 auto;
  }
`;

export const Gradiant = styled.div `
  z-index: 3;
  position: absolute;
  border-radius: 32px;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;


export const List = styled.div `
  display:flex;
  justify-content:center;
  margin:32px 0;
  @media(max-width:411px){
  flex-wrap: wrap;
}

  
`

export const Grid = styled(motion.div)
`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
grid-gap:3rem;
justify-content:center;
`

export const GridCard = styled.div `

img{
  width:100%;
  border-radius:2rem;
}

a{
  text-decoration:none;

}

h4{
  text-align:center;
  padding:1rem;
}

`

export const Nav = styled.div `
    padding: 4rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Lobster Two", cursive;
`


export const StyledLink = styled(NavLink)
`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg,#494949,#313131);
height:6rem;
width:6rem;
cursor:pointer;
transform:scale(0.8);


h4{
  color:white;
  font-size:12px;
  margin-top:2px;
  margin-bottom:2px;

}

svg{
  color:white;
  font-size:24px;
}

&.active {
  background:linear-gradient(to right,#f27121,#e94057);
  svg{
    color:white;
  }
  h4{
    color:white;
  }
}


@media(max-width:768px){
  margin-right:1rem;

  svg{
  font-size:20px;
}

  }
  @media(max-width:520px){
    margin-right:0;
  svg{
  font-size:18px;
}
  }
  @media(max-width:480px){
    margin-right:0.5;
  svg{
  font-size:18px;
}

`

export const StyledForm = styled.form `
    margin: 0 80px;

  @media(max-width:768px){
    margin:0;
  }


div{
  max-width:100%;
  position:relative;

}

input{
  border:none;
  background:linear-gradient(35deg,#494949,#313131);
  font-size:1.5rem;
  padding:1rem 3rem;
  border-radius:1rem;
  outline:none;
  width:100%;
  color:white;
  }
  

svg{
  position:absolute;
  top:50%;
  left:0;
  transform:translate(100%,-50%);
  color:white;

}
`

export const DetailWrapper = styled.div `
display:flex;
justify-content:center;
width:100%;
margin-top:10rem;
margin-bottom:5rem;

@media (max-width:1120px){
  flex-direction:column;
  width:100%;

  .img-container{
  
    
    img{
      display:block;
      margin:0 auto;
      max-width:100%;
    }
    h2{
      display:block;
      text-align:center;
}
  }
}

h2{
  margin-bottom:2rem;
}

.active{
  background:linear-gradient(35deg,#494949,#313131);
  color:white;
}

{
  li{
    font-size:1.2rem;
    line-height:2.5rem;

  }
  ul{
    margin-top:2rem;

  }
}

`

export const StyledButton = styled.button `
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
@media (max-width:450px){
  padding:0.5rem 1rem;
  font-weight:600;
  font-size:0.7rem;
}

`

export const Info = styled.div `
margin-left:10rem;

@media (max-width:1120px){
  margin-top:5rem;
  margin-left:0;
}
h3{
  font-size:1rem;
  line-height: 1.7rem;
  padding: 2rem 0;
}

`

export const ButtonWrapper = styled.div `
display:flex;


`

export const Logo = styled(Link)
`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:"Lobster Two",cursive;
  text-align:center;

`