

/*
*** STYLE
*/
import style from '@/app/Styles/Components/Header.module.scss'

const Header = ({color}: {color: boolean}) => {
    return (
        <div className={style["Header"]}>
            <div className={style["Header__title"]}>
                <div className={style[color ? "Header__title__logo" : "Header__title__logo__black"]}>
                    <span>PAY</span>WHALE
                </div>
                <div className={style[color ? "Header__title__text" : "Header__title__text__black"]}>
                    Платежный шлюз
                </div>
            </div>
        </div>
    );
};

export default Header;