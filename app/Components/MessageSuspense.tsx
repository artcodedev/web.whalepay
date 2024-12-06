

/*
*** STYLE
*/
import style from '@/app/Styles/Components/MessageSuspense.module.scss';


import svg from '@/app/Static/svg/time_pay.svg'

const MessageSuspense = () => {

    return (
        <>
            <div className={style['MessageSuspense']}>

                <div className={style['MessageSuspense__wrapp']}>


                    {/* <div className={style['WarningSuspense__wrapp__icon']}>
                        <img src={warning.src} />
                    </div> */}


                    <div className={style['MessageSuspense__wrapp__message']}>
                        <img src={svg.src} />
                        Переведите указаную сумму в течении 14 минут по следующим реквизитам
                    </div>


                </div>
            </div>
        </>
    );


}

export default MessageSuspense;