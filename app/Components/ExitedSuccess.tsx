

/*
*** STYLE
*/
import style from '@/app/Styles/Components/ExitedSuccess.module.scss';

/*
*** COMPONENTS
*/
import errTimeOut from '@/app/Static/svg/ierror.svg';
import success from '@/app/Static/svg/doublecheck.svg';

const ExitedSuccess = ({ timeout }: { timeout: boolean }) => {

    let prise: string = '15 000';

    return (
        <>
            <div className={style['ExitedSuccess']}>


                <div className={style['ExitedSuccess__wrapp']}>

                    <div className={style['ExitedSuccess__wrapp__img']}>
        
                        <img src={timeout ? success.src : errTimeOut.src} />

                    </div>

                    <div className={style['ExitedSuccess__wrapp__title']}>
                        <div className={style['ExitedSuccess__wrapp__title__txt']}>
                            {timeout ? 'Оплата найдена' : 'Оплата не найдена'}
                        </div>
                    </div>

                    <div className={style['ExitedSuccess__wrapp__message']}>
                        <div className={style['ExitedSuccess__wrapp__message__txt']}>
                            {timeout ? 
                            <>
                            <div>Счет на сумму {prise} рублей оплачен.</div><div>Спасибо за оплату.</div>
                            </> : <div>Счет на сумму {prise} рублей не оплачен.</div>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ExitedSuccess;