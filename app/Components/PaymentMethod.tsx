

/*
*** STYLES
*/
import style from '@/app/Styles/Components/PaymentMethod.module.scss';

/*
*** IMAGE(SVG)
*/
import shevronDown from '@/app/Static/svg/chevron-down.svg';
import alfa from '@/app/Static/svg/logo/logo_alfa.svg';
import sber from '@/app/Static/svg/logo/logo_sberbank.svg';
import tinkoff from '@/app/Static/svg/logo/logo_tinkoff.svg';

/*
*** COMPONENTS
*/
import PaymantWrapper from './PaymentWrapper';

const PaymentMethod = () => {

    return (
        <>

            <PaymantWrapper>

                <div className={style['PaymentMethod__title']}>
                    Выберите способ оплаты
                </div>

                <div className={style['PaymentMethod__method']}>

                    {[alfa, tinkoff, sber, sber].map((e) => <div className={style['PaymentMethod__method__item']}>

                        <div className={style['PaymentMethod__method__item__title']}>
                            <img src={e.src} className={style['PaymentMethod__method__item__img']} />
                        </div>
                        
                        <div className={style['PaymentMethod__method__item__str']}>
                            <img src={shevronDown.src} />
                        </div>

                    </div>)}

                </div>

            </PaymantWrapper>
        </>
    );
}

export default PaymentMethod;