import React, {useState} from "react";
import { HeroContainer, H1, Nav, UL, LI, Tela, Header, A
    ,Arrows, ProfileContainer, ProfileContent, ProfileCard, ProfileImg, NomeText, ProfileText,
    ProfileButton, ContentContainer, Divider, IconsContainer, IconItem, ProfileSinopse,
} from "../styles/style";
import styled from "styled-components";
 // fotos //
import Eu from '../assets/euNovamente.jpg'
import Js from '../assets/js.png'
import R from '../assets/react.png'
import Type from '../assets/Typescript.png'
import { Link, Links } from "react-router-dom";
import Dropdown from "../components/dropdown";

// fotos //

export default function Portfolio() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <Tela>
        <HeroContainer>
            <Header>
                <Nav>
                    <UL>
                        <A className="inicio">
                            <Link style={{textDecoration:"none", color:"white"}} to="/home">Início</Link> 
                        </A>
                        <A>
                            <A className="linkedin"
                                href="https://www.linkedin.com/in/paulohenriquerodrigodearaujo/"
                                target="_blank"
                            >
                                Linkedin
                            </A>
                        </A>
                        <A className="Drop">                           
                            <Dropdown />                            
                        </A>
                        <A >
                            <Link style={{textDecoration:"none", color:"white"}} to="/Linguagens">Tecnologias</Link>
                        </A>
                        <A>
                            <Link to="/contato" style={{ textDecoration: 'none', color: 'white' }}>
                                Contato
                            </Link>
                        </A>
                    </UL>
                </Nav>
            </Header>
            <H1>Procurando um desenvolvedor FullStack?</H1>
            <Arrows>
                <path className="a1" d="M0 0 L30 32 L60 0" />
                <path className="a2" d="M0 20 L30 52 L60 20" />
                <path className="a3" d="M0 40 L30 72 L60 40" />
            </Arrows>
        </HeroContainer>
        <ContentContainer>
                <ProfileContainer>
                    <ProfileContent >
                        <ProfileCard>
                            <ProfileImg src={Eu}/>
                            <NomeText>Paulo Henrique</NomeText>
                            <ProfileText>
                                Foco, disciplina e consistência.
                                Vamos revolucionar o mercado de tecnologia juntos?
                            </ProfileText>
                            <A
                                href="https://www.instagram.com/redfirerap/"
                                target="_blank"
                            >
                                <ProfileButton>
                                    Conhecer insta!
                                </ProfileButton>
                            </A>

                            <Divider/>

                            <IconsContainer>
                                <IconItem src={Js} />
                                <IconItem src={Type} /> 
                                <IconItem src={R} />
                            </IconsContainer>
                        </ProfileCard>
                    </ProfileContent>
                    
                    <div>
                        {/* Texto longo aqui... */}
                        <ProfileSinopse>
                            Paulo Henrique, sempre engajado na transformação e evolução tecnológica. 
                            Atuo focado no ecossistema Javascript com React, React-native e Node.js, Tendo participado do desenvolvimento
                            de diversas aplicações Web e Mobile, com alta relevância no mercado, como um aplicativo Mobile em React-Native 
                            para uma grande agência de turismo e viagens corporativas, a aplicação tem o objetivo de facilitar a visualização, 
                            filtragem e envio dos dados necessários, sendo o cliente corporativo ou não, outro aplicativo desenvolvido com React-native 
                            é o 'app', um aplicativo para praticantes de paraquedismo que faz o controle e recebe o feedback de saltos de inúmeras categorias, 
                            além de lidar com dados meteorológicos do local escolhido em todo o Brasil ,para uma melhor experiência do usuário. Disponível na AppStore e PlayStore.
                            Em relação ao supracitado, um desafio no ambiente web que encarei foi na participação da refatoração de uma interface da plataforma mapa inversiones, 
                            do governo da Colômbia, onde são demonstradas diversas páginas contendo elementos como gráficos,relatórios, infográficos, documentos e dados abertos 
                            relacionados ao investimento público do governo colombiano.
                        </ProfileSinopse>
                            
                    </div>
                </ProfileContainer>
            </ContentContainer>
    </Tela>
  );
}