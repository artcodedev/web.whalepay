
import style from '@/app/Styles/Components/RequireVerifycationWR.module.scss';


import gif from '@/app/Static/notwork.gif';

const ServiceNotWorkWR = (): JSX.Element => {

    return (
        <>
            <div className={style['RequireVerifycationWR']}>

                <div className={style['RequireVerifycationWR__wrapp']}>

                    <div className={style['RequireVerifycationWR__wrapp__img']}>

                        <img src={gif.src} />

                    </div>

                    <div className={style['RequireVerifycationWR__wrapp__title']}>
                        <div className={style['RequireVerifycationWR__wrapp__title__txt']}>
                            Сервис временно не доступен! 😭
                        </div>
                    </div>

                    <div className={style['RequireVerifycationWR__wrapp__message']}>
                        <div className={style['RequireVerifycationWR__wrapp__message__txt']}>
                            <div>Мы уже работает на этим 🥵</div>
                            <div>Скоро все починим 😎</div>
                            <div>Спасибо за использование <span>PAY</span>WHALE.</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ServiceNotWorkWR;