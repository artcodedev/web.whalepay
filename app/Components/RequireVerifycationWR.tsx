


import style from '@/app/Styles/Components/RequireVerifycationWR.module.scss';

import gif from '@/app/Static/warning.gif';

const RequireVerifycationWR = (): JSX.Element => {

    return (
        <>
            <div className={style['RequireVerifycationWR']}>

                <div className={style['RequireVerifycationWR__wrapp']}>

                    <div className={style['RequireVerifycationWR__wrapp__img']}>

                        <img src={gif.src} />

                    </div>

                    <div className={style['RequireVerifycationWR__wrapp__title']}>
                        <div className={style['RequireVerifycationWR__wrapp__title__txt']}>
                            Требуеться проверка платежа! 🤔
                        </div>
                    </div>

                    <div className={style['RequireVerifycationWR__wrapp__message']}>
                        <div className={style['RequireVerifycationWR__wrapp__message__txt']}>
                            <div>Средства поступят на счет в ближайщеее время 😁</div>
                            <div>Приносим свои извинения за задержку 🥹</div>
                            <div>Спасибо за использование <span>PAY</span>WHALE.</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default RequireVerifycationWR;