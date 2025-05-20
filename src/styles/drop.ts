import React from "react";

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5dc',
  } as React.CSSProperties,
  dropdown: {
    position: 'relative',
  } as React.CSSProperties,
  button: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '1.2rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  } as React.CSSProperties,
  dropdownMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'transparent',
    boxShadow: '0px 4px 8px rgba(19, 18, 18, 0.1)',
    padding: '10px 0',
    minWidth: '200px',
    listStyle: 'none',
    margin: 0,
    borderRadius: '5px',
  } as React.CSSProperties,
  link: {
    textDecoration: 'none',
    color: 'white',
    display: 'block',
    transition: 'background-color 0.3s',
  } as React.CSSProperties,
  
};