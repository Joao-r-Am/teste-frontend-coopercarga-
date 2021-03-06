import styled from "styled-components";

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: #fff;
    border-radius: 10px;
    border-bottom: 10px solid #1c4b77;
    margin-top: 15px

    @media (max-width: 430px) {
        width: 300px
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const LisOfReposContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Repo = styled.h2`
    width: 100%;
    height: 80px;
    background: #fffe;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
    }
    h3 {
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }

    p {
        font-size: 12px;
        font-weight: 700;
        color: #A01220;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
`