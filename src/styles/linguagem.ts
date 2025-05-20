import styled from "styled-components";

export const Conteudo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1em;
  padding: 25px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  min-width: 600px; /* força o espaço pra caber 2 colunas */
  margin-top: 100px;
`;

export const Content = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Fotos = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
  border-radius: 8px;
  color: #333;
  background-color: transparent;
  border: 3px solid black ;
`;

export const FotoItem = styled.img`
  width: 100px;
  background-color: transparent;
`;

export const Description = styled.p`
  font-size: 20px;
  color: white;
  margin-right: 10px;
`;