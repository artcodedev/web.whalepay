
/*
*** STYLE
*/
import style from '@/app/Styles/Components/NotFoundErrors.module.scss';

/*
*** IMAGE(SVG)
*/
import error from '@/app/Static/svg/error.svg';
import notfoundicon from '@/app/Static/svg/error.gif';

const NotFoundErrors = ({notfound} : {notfound: boolean}): JSX.Element => {

    return (
        <>
            <div className={style['NotFount']}>


                <div className={style['NotFount__wrapp']}>

                    <div className={style['NotFount__wrapp__title']}>
                        <div className={style['NotFount__wrapp__title__img']} style={notfound ? {height: '100%'} : {}}>
                             <img src={notfound ? notfoundicon.src : error.src} style={notfound ? {width: '20%'} : {} }/>
                        </div>
                    </div>

                    <div className={style['NotFount__wrapp__title']}>
                        <div className={style['NotFount__wrapp__title__txt']}>
                            {notfound ? 'Страница не найдена!': 'Произошла ошибка!😔'}
                        </div>
                    </div>

                    <div className={style['NotFount__wrapp__message']}>
                        <div className={style['NotFount__wrapp__message__txt']}>
                            {notfound ? 'Похоже такой страницы не существует 😐' : 'Что-то пошло не так 😟'}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default NotFoundErrors;