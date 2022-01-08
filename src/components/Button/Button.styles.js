import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid; //block
    place-items: center;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;