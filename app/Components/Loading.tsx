

/*
*** STYLE
*/
import style from '@/app/Styles/Components/Loading.module.scss';

/*
*** IMAGE
*/
import loading from '@/app/Static/svg/loading.svg';

const Loading = ({ message }: { message?: string }) => {

    return (
        <>

            <div className={style['Loading']}>
                <div className={style['Loading__wrapp']}>

                    <div className={style['Loading__wrapp__loading']}>
                        <img src={loading.src} />
                    </div>

                    <div className={style['Loading__wrapp__text']}>
                        <div className={style['Loading__wrapp__text__txt']}>
                            {message ? message : ''}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Loading;