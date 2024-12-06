
/*
*** STYLE
*/
import style from '@/app/Styles/Components/HeaderAmount.module.scss';

/*
*** COMPONENTS
*/
import Timer from '@/app/Components/Timer';

interface Props {
    amount: number
    timeout: number
    amount_symbol: string
}

const HeaderAmount = ({...pr}: Props) => {

    return (
        <>
            <div className={style['HeaderAmount']}>
                <div className={style['HeaderAmount__wrapp']}>
                    <div className={style['HeaderAmount__wrapp__amount']}>

                        <div className={style['HeaderAmount__wrapp__amount__sum']}>

                            <div className={style['HeaderAmount__wrapp__amount__sum__wrapp']}>

                                <div className={style['HeaderAmount__wrapp__amount__sum__wrapp__sum']}>
                                    {pr.amount} <span>{pr.amount_symbol}</span>
                                </div>

                                <div className={style['HeaderAmount__wrapp__amount__sum__wrapp__title']}>
                                    Сумма для оплаты
                                </div>

                            </div>
                        </div>

                        <div className={style['HeaderAmount__wrapp__amount__timer']}>
                            <Timer timer={pr.timeout}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default HeaderAmount;