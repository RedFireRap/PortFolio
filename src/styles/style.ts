import styled, {keyframes} from "styled-components";
import PC from '../assets/pc.jpg'
import Fone from '../assets/fone.jpg'

export const Tela = styled.body`
    margin: 0%;
    padding: 0%;
`;

export const HeroContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url(${PC});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 10px;
`;

// animacao do H1 //

const moveRight = keyframes`
    0% {
        transform: translateX(100px);
    }
    
    50% {
        transform: translateX(-50px);
    }

    100% {
        transform: translateX(100px);
    }
`;

export const H1 = styled.h1`
    font-family: 'Oswald', sans-serif;
    color: #fff;
    font-size: 50px;
    animation: ${moveRight} 10s linear infinite;
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const Nav = styled.nav`
    width: 50%;
`;

export const UL = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 700px;
`;

export const LI = styled.li`
    font-family: 'Oswald', sans-serif;
    font-size: 21px;
    color: #fff;
    cursor: pointer;
`;

export const A = styled.a`
  text-decoration: none;
  color: white;
  font-family: 'Oswald', sans-serif;
  font-size: 21px;
  cursor: pointer;

  &.inicio:hover{
    color: goldenrod;
  }

  &.linkedin:hover{ // color: #0A66C2; /* Azul LinkedIn */
    color: #0A66C2;
  }
`; 

// animacao

const arrowAnim = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(10px);
    opacity: 0.6;
  }
`;

export const Arrows = styled.svg`
    width: 60px;
    height: 172px;
    bottom: 20px;
    position: absolute;

    path{
        stroke: #fff;
        fill: transparent;
        stroke-width: 1px;
        animation: ${arrowAnim} 2s infinite;
    }

    path.a1 {
        animation-delay: -0s;
    }
    path.a2 {
        animation-delay: -2s;
    }
    path.a3 {
        animation-delay: -0s;
    }
`;

// animacao

export const ProfileContainer = styled.div`
    height: 100%;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Fone});
    background-size: cover;
`;

export const ProfileContent = styled.div`
    width: 30%;
`;

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
`;

export const ProfileImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #d21617;
    transition: 1.0s;
    background-size: cover;
    background-position: center;
    transition: 1s;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
  }
`;

export const NomeText = styled.span`
    font-family: 'Oswald', sans-serif;
    font-size: 21px;
    margin-top: 15px;
`;

export const ProfileText = styled.span`
    font-family: 'Oswald', sans-serif;
    font-size: 17px;
    text-align: center;
    width: 80%;
    margin-top: 10px;
`;

export const ContentContainer = styled.div`
    height: 100vh;
    background-color: #333;
`;

export const ProfileButton = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 15px;
    border: none;
    background-color: #d21617;
    color: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 35px;
    cursor: pointer;
    transform: 1.5s;

    &:hover{
        background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
        color: black;
        font-size: 18px;
        transition: 1.5s;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
`;

export const Divider = styled.div`
    width: 100%;
    border-top: .5px solid #bfbfbf;
    margin: 20px 0;
`;

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 5px;
`;

export const IconItem = styled.img`
    width: 80px;
    height: auto;
`;

export const ProfileSinopse = styled.p`
    width: 430px;
    font-family: 'Oswald', sans-serif;
    color: #fff;
    font-size: 17px;
`;

export const DropButton = styled.button`
    width: 100px;
    height: 30px;
    font-family: 'Oswald', sans-serif;
    color: white;
    background-color: transparent;
    font-size: 17px;
`;

// media query



