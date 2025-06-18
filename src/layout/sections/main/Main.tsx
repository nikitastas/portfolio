import React from 'react';
import photo from "../../../assets/images/my photo/my-photo-min.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Nikita Stasiulevich</span></S.Name>
                        <S.MainTitle>
                            <p>A Front-End Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Frontend Developer', 'A Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 60
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

