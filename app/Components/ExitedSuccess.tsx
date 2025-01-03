

/*
*** STYLE
*/
import style from '@/app/Styles/Components/ExitedSuccess.module.scss';

/*
*** COMPONENTS
*/
import errTimeOut from '@/app/Static/svg/ierror.svg';
import success from '@/app/Static/svg/doublecheck.svg';

const ExitedSuccess = ({ timeout, amount}: { timeout: boolean, amount?: number | null }): JSX.Element => {

    return (
        <>
            <div className={style['ExitedSuccess']}>


                <div className={style['ExitedSuccess__wrapp']}>

                    <div className={style['ExitedSuccess__wrapp__img']}>
        
                        <img src={timeout ? success.src : errTimeOut.src} />

                    </div>

                    <div className={style['ExitedSuccess__wrapp__title']}>
                        <div className={style['ExitedSuccess__wrapp__title__txt']}>
                            {timeout ? 'Оплата найдена' : 'Время сессии вышло'}
                        </div>
                    </div>

                    <div className={style['ExitedSuccess__wrapp__message']}>
                        <div className={style['ExitedSuccess__wrapp__message__txt']}>
                            {timeout ? 
                            <>
                            <div>Счет {amount ? `на сумму ${new Intl.NumberFormat().format(amount)} рублей` : ''} оплачен.</div><div>Спасибо за оплату.</div>
                            </> : <div>Спасибо за использование <span>PAY</span>WHALE.</div>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ExitedSuccess;