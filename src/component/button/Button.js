import styled from "styled-components"
export const Button = styled.button`
background-color:blue;
color:white;
border-radius:8px;
padding:1rem 2rem;
text-align:center;
border:none;
cursor:pointer;
transition:all 0.3s ease-in-out;
-webkit-transition:all 0.3s ease-in-out;
-moz-transition:all 0.3s ease-in-out;
-o-transition:all 0.3s ease-in-out;

&:hover{
    box-shadow:0 2rem 2rem 0 rgba(132,144,255 / 30%)
    
    transform:scale(0.94);
}
a{
    text-decoration:none;
    font-size:1.8rem;
    color:white
}
`

