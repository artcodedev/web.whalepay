
/*
*** STYLE
*/
import style from '@/app/Styles/Components/WarningSuspense.module.scss';

/*
*** COMPONENTS
*/
import warning from '@/app/Static/svg/warning.svg';

const WarningSuspense = (): JSX.Element => {

    return (
        <>

            <div className={style['WarningSuspense']}>

                <div className={style['WarningSuspense__wrapp']}>


                    <div className={style['WarningSuspense__wrapp__icon']}>
                        <img src={warning.src} />
                    </div>


                    <div className={style['WarningSuspense__wrapp__message']}>
                        Переводите точную сумму, иначе средства не поступят!
                    </div>

                    
                </div>
            </div>
        </>
    );
}


export default WarningSuspense;