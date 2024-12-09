

/*
*** STYLES
*/
import style from '@/app/Styles/Components/PaymentMethod.module.scss';

/*
*** IMAGE(SVG)
*/
import shevronDown from '@/app/Static/svg/chevron-down.svg';

/*
*** COMPONENTS
*/
import PaymantWrapper from './PaymentWrapper';

interface PropData {
    uid: string
    title: string
    img: string
}

interface Prop {

    data: PropData[] | []
    onclick: (e: React.MouseEvent<HTMLElement>) => void
}

const PaymentMethod = ({...pr}: Prop): JSX.Element => {

    return (
        <>

            <PaymantWrapper>

                <div className={style['PaymentMethod__title']}>
                    Выберите способ оплаты
                </div>

                <div className={style['PaymentMethod__method']}>

                    {pr.data.map((e) => <div className={style['PaymentMethod__method__item']} uid-data={e.uid} title={e.title} onClick={pr.onclick}>

                        <div className={style['PaymentMethod__method__item__title']}>
                            <img src={e.img} className={style['PaymentMethod__method__item__img']} />
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