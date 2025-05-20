import styled from "styled-components";

// export const WhatsAppButton = styled.button`
//   display: inline-block;
//   padding: 12px 24px;
//   background-color: #25D366;
//   color: white;
//   border-radius: 8px;
//   border: none;
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 16px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1ebe5d;
//     transform: scale(1.05);
//   }
// `;

// export const InstagramButton = styled.a`
//   display: inline-block;
//   padding: 12px 24px;
//   background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
//   color: white;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 16px;
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;


export const Container = styled.div`
  background:rgb(151, 149, 149);
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

export const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: none;
`;

export const Button = styled.button`
  background: #0a84ff;
  color: white;
  padding: 15px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #000000;
    transition: 1.5s;
  }
`;

export const Pensando = styled.img`
  width: 50px;
`;

// caixa roxa //

export const LeftBox = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background-color: #000000;
  border-radius: 15px;
  padding: 40px 30px;
  margin-right: 3px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h2`
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  margin-top: 5px;
`;

export const InfoText = styled.div`
  line-height: 1.4;

  strong {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  a {
    color: white;
    text-decoration: underline;
  }
`;