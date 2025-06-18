import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan id={"skills"}>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Our  life  is  what  our  thoughts  make  it</SectionTitle>
                    {/*<Button>Hire me</Button>*/}
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};
const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: rgba(32, 55, 50, 0.46);
`
