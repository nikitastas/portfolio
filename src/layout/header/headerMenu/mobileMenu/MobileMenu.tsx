import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={onBurgerBtnClick} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup onClick={() =>{setMenuIsOpen(false)}} isOpen={menuIsOpen}>
                <Menu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

