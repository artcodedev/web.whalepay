

import style from '@/app/Styles/Components/CardWrapper.module.scss';

const CardWrapper = ({ children }: { children: React.ReactNode }) => {


    return (
        <>
            <div className={style['CardWrapper']}>
                {children}
            </div>
        </>
    );

}


export default CardWrapper;