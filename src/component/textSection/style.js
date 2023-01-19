
import styled from "styled-components"
export const TextStyle = styled.div`

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.text {
    fontWeight: 500;
    fontSize: 1.5rem;
    color:${({ theme }) => theme.colors.helper};
}
.title {
    font-size: 6.4rem;
    // text-align:lef
    color:${({ theme }) => theme.colors.heading};

}
.btn {
    max-width: 16rem;
}
.intro {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
}
.imageContainer {
   display: flex;
   justify-content: center;
   align-items: center;
},
.image {
    max-width: 80%
    text-align: center;
    // height:auto;
}

`