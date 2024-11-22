
/*
*** STYLE
*/
import style from '@/app/Styles/Components/Timer.module.scss';

const Timer = () => {
    return (
        <>

            <div className={style['Timer']}>
                <div className={style['Timer__wrapp']}>

                    <div className={style['Timer__wrapp__timer']}>
                        12:90
                    </div>

                    <div className={style['Timer__wrapp__title']}>
                        Время на оплату
                    </div>

                </div>
            </div>

        </>
    )
}

export default Timer;