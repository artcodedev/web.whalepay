
/*
*** STYLE
*/
import style from '@/app/Styles/Components/HeaderAmount.module.scss';

/*
*** COMPONENTS
*/
import Timer from '@/app/Components/Timer';

const HeaderAmount = () => {

    return (
        <>
            <div className={style['HeaderAmount']}>
                <div className={style['HeaderAmount__wrapp']}>
                    <div className={style['HeaderAmount__wrapp__amount']}>

                        <div className={style['HeaderAmount__wrapp__amount__sum']}>

                            <div className={style['HeaderAmount__wrapp__amount__sum__wrapp']}>

                                <div className={style['HeaderAmount__wrapp__amount__sum__wrapp__sum']}>
                                    999.000,3 <span>₽</span>
                                </div>

                                <div className={style['HeaderAmount__wrapp__amount__sum__wrapp__title']}>
                                    Сумма для оплаты
                                </div>

                            </div>
                        </div>

                        <div className={style['HeaderAmount__wrapp__amount__timer']}>
                            <Timer />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default HeaderAmount;