import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './alice.css';
import "./../../styles/slider.css"
import {S} from "./Slider_Styles"

const userReview = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        userName: "ivan ivanow"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        userName: "dima dimych"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        userName: "vlad vladov"
    }
]

type SlidePropsType = {
    text: string,
    userName: string
}

const Slide: React.FC<SlidePropsType> = (props) => {
    return <S.Slide>
        <S.Text>{props.text}</S.Text>
        <S.Name>@{props.userName}</S.Name>
    </S.Slide>
}

const items = [
    <Slide text={userReview[0].text} userName={userReview[0].userName}/>,
    <Slide text={userReview[1].text} userName={userReview[1].userName}/>,
    <Slide text={userReview[2].text} userName={userReview[2].userName}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);

