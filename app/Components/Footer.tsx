/*
*** COMPONENTS
*/
import style from "../Styles/Components/Footer.module.scss";

/*
*** IMAGE 
*/
import icon_shield from "../Static/svg/shield.svg";
import icon_visa from "../Static/svg/visa.svg";
import icon_mastercard from "../Static/svg/mastercard.svg";
import icon_pci_dss from '../Static/svg/pci-dss.svg';

const Footer = ({black}: {black: boolean}) => {

    return (
        <div className={style["Footer"]}>
            <div className={style["Footer__secure"]}>
                <div
                    className={style["Footer__secure__icon"]}
                    style={{ backgroundImage: `url(${icon_shield.src})` }}
                />
                <div className={style[black ? "Footer__secure__textblack" : "Footer__secure__text"]}>
                    Гарантия безопасной сделки
                </div>
            </div>

            <div className={style["Footer__verification"]}>

                {[icon_visa, icon_mastercard, icon_pci_dss].map((i, id) => (
                    <div
                        className={style["Footer__verification_item"]}
                        key={id}
                        style={{ backgroundImage: `url(${i.src})` }}
                    />
                ))}

            </div>
            <div className={style[black ? "Footer__support__textBlack" : "Footer__support__text"]}>
                Нужна помощь? Напишите нам на <span>support@paywhale.ru</span>
            </div>

            <div className={style["Footer__version__text"]}>
                Prod by: <span>art[code]</span>
            </div>
        </div>
    );
};

export default Footer;