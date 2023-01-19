import styled from "styled-components";
export const NavbarStyle = styled.div`
.container {
    padding: 0 4.8rem;
    height: 10rem;
    background-color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    max-width: 30%;
    height: auto
}

.navList {
    display: flex;
    gap: 4.8rem;
}

.navbarLink {
    text-decoration: none;
    font-size: 1.8rem;
    text-transform: uppercase;
    transition:  0.3s linear;
    font-family: 'Work Sans,sans-serif';
}
li{
    list-style: none;
}
.navbarLink:hover,:active{
 color:${({ theme }) => theme.colors.helper}; 
}
`