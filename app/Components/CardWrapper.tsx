
/*
*** STYLE
*/
import style from '@/app/Styles/Components/CardWrapper.module.scss';

const CardWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {

    return (
        <>
            <div className={style['CardWrapper']}>
                {children}
            </div>
        </>
    );

}

export default CardWrapper;