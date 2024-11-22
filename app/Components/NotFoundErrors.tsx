
/*
*** STYLE
*/
import style from '@/app/Styles/Components/NotFoundErrors.module.scss';

/*
*** IMAGE(SVG)
*/
import error from '@/app/Static/svg/error.svg';
import notfoundicon from '@/app/Static/svg/404_icon.svg'; 

const NotFoundErrors = ({notfound} : {notfound: boolean}) => {

    return (
        <>
            <div className={style['NotFount']}>


                <div className={style['NotFount__wrapp']}>

                    <div className={style['NotFount__wrapp__title']}>

                        <div className={style['NotFount__wrapp__title__img']}>
                             <img src={notfound ? error.src : notfoundicon.src} />
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