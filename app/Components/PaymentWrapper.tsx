
/*
*** STYLE
*/
import style from '@/app/Styles/Components/PaymantWrapper.module.scss'

const PaymantWrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <div className={style['PaymentWrapper']}>
                <div className={style['PaymentWrapper__wrapp']}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default PaymantWrapper;