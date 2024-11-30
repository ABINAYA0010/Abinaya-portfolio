import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .heroiene-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img, span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .heroiene-image img{
    margin-top: 2rem;
    width: 75%;
    filter: grayscale(0);
    transition: filter 0.5s;
    &:hover{
      filter: grayscale(0);
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .heroiene-text {
      h1 {
        font-size: 5rem;
      }
    }
    .heroiene-image{
      display: block; /* Ensure image is visible on mobile */
      margin-top: 1rem; /* Optional: Adjust margin as needed */
      img {
        width: 100%;
      }
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  
  @media(max-width: 480px){
    margin-top: 45%;
    .heroiene-image {
      max-width: 100%;
      img {
        width: 100%;
      }
    }
  }
`
