

/*
*** STYLE
*/
import style from '@/app/Styles/Components/Header.module.scss'

const Header = () => {
    return (
        <div className={style["Header"]}>
            <div className={style["Header__title"]}>
                <div className={style["Header__title__logo"]}>
                    <span>PAY</span>WHALE
                </div>
                <div className={style["Header__title__text"]}>
                    Платежный шлюз
                </div>
            </div>
        </div>
    );
};

export default Header;