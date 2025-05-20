import React from "react";
import { HeroContainer, Nav, UL, LI, Tela, Header, A, H1} from "../styles/style"
import { Content, Conteudo, FotoItem, Fotos, Description } from "../styles/linguagem";
import { Link } from "react-router-dom";
// fotos //
import Mysql from '../assets/MySQL.png'
import ReactLogo from '../assets/react.png';
import Node from '../assets/node.png';
import Type from '../assets/Typescript.png';
import JS from '../assets/js.png'
import Dropdown from "../components/dropdown";


function Linguagens() {
    return(
        <Tela>
            <HeroContainer>
            <Header>
                <Nav>
                    <UL>
                        <A>
                            <Link style={{textDecoration:"none", color:"white"}} to="/home">Home</Link>
                            
                        </A>
                        <A>
                            <A className="linkedin"
                                href="https://www.linkedin.com/in/paulohenriquerodrigodearaujo/"
                                target="_blank"
                            >
                                Linkedin
                            </A>
                        </A>
                        <A>
                            <Dropdown/>
                        </A>
                        <A >
                            <A href="#">Tecnologias</A>
                        </A>
                        <A>
                            <Link to="/contato" style={{ textDecoration: 'none', color: 'white' }}>
                                Contato
                            </Link>
                        </A>
                    </UL>
                </Nav>
            </Header>
            <HeroContainer>
                <Conteudo>
                    <Fotos>
                        <FotoItem src={Type}></FotoItem>
                        <Description>Tipagem estática no JS</Description>
                    </Fotos>
                    <Fotos>
                        <FotoItem src={JS}></FotoItem>
                        <Description>Linguagem base da web</Description>
                    </Fotos>
                    <Fotos>
                        <FotoItem src={Node}></FotoItem>
                        <Description>Backend com JavaScript</Description>
                    </Fotos>
                    <Fotos>
                        <FotoItem src={ReactLogo}></FotoItem>
                        <Description>SPA com componentes</Description>
                    </Fotos>
                    <Fotos>
                        <FotoItem src={Mysql}></FotoItem>
                        <Description>Banco de dados relacional</Description>
                    </Fotos>
                </Conteudo>
            </HeroContainer>
            </HeroContainer>
        </Tela>
    )
};


export default Linguagens;