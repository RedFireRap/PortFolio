import React from 'react';
import { HeroContainer, Nav, UL, LI, Tela, Header, A, H1} from "../styles/style"
import { Link } from 'react-router-dom';
import { Button, TextArea, Input, Form, Container 
    ,LeftBox, Title, InfoGroup, IconWrapper, InfoText, Pensando 
} from '../styles/contato';
import Dropdown from '../components/dropdown';

function Contato(){
  return (
    <Tela>        
        <HeroContainer>
            <Nav>
                <UL>
                    <A>
                        <Link style={{textDecoration:'none', color:'white'}}
                        to="/home">Home</Link>
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
                        <Link style={{textDecoration:"none", color:"white"}} to="/Linguagens">Tecnologias</Link>
                    </A>
                    <A>
                        <Link to="/contato" style={{ textDecoration: 'none', color: 'white' }}>
                            Contato
                        </Link>
                    </A>
                </UL>
            </Nav>
            <HeroContainer style={{justifyContent:'space-evenly'}}>
                <H1>Procurando um desenvolvedor FullStack?</H1>
                <Container>
                    <LeftBox>
                        <Title>
                            <Pensando src="data:image/png;base64,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" alt="logo" />
                                Vamos conversar
                        </Title>

                        <InfoGroup>
                            <IconWrapper></IconWrapper>
                            <InfoText>
                            <strong> Minha Localização</strong>
                            Conjunto Sitio Conceição 89
                            </InfoText>
                        </InfoGroup>

                        <InfoGroup>
                            <IconWrapper></IconWrapper>
                            <InfoText>
                            <strong>Endereço de email</strong>
                            <a href="paulobrotherzika@gmail.com">paulobrotherzika@gmail.com</a>
                            </InfoText>
                        </InfoGroup>

                        <InfoGroup>
                            <IconWrapper></IconWrapper>
                            <InfoText>
                            <strong>Telefone</strong>
                            +551945901307
                            </InfoText>
                        </InfoGroup>
                    </LeftBox>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input type="text" placeholder="Nome" required />
                        <Input type="email" placeholder="Email" required />
                        <Input type="tel" placeholder="Telefone" />
                        <TextArea rows={5} placeholder="Me conte como gostaria que eu criasse seu site?" required />
                        <Button type="submit">Enviar</Button>
                    </Form>
                </Container>
            </HeroContainer>
        </HeroContainer>
    </Tela>
  );
}

export default Contato;