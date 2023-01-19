import { createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`


*{
    padding:0px;
    margin:'0px;
    box-sizing:border-box
    font-family:'work sans',sans-serif;
    }
    html{
        font-size:62.5%;
        overflow-x:hidden;
    }
    h1{
        color:${({theme})=> theme.colors.heading}
        font-size:6rem;
        font-weight:900;
        white-space:normal;
        text-align:center;
    }
    h3{
        font-size:1.8rem;
        font-weight:400;
    }
    p{
        color:${({theme})=> theme.colors.text};
        opacity:7;
        font-size:1.65rem;
        line-height:1.5rem;
        font-weight:400;
        margin-top:1rem;

    a{
        text-decoration:none;
    }
    li{
        list-style:none;
    }
`
