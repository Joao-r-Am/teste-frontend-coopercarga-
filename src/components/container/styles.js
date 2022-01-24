import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: linear-gradient(120deg, #444, #444);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    a{
        font: bold 14px;
        text-decoration: none;
        font-weight: 700;
        background-color: #FF7A00;
        color: #333333;
        padding: 2px 6px 2px 6px;
        border-bottom: 1px solid #333333;
    }
`