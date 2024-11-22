
/*
*** STYLE
*/
import style from '@/app/Styles/Components/Layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <div className={style['Layout']}>
                <div className={style['Layout__wrapp']}>
                    { children }
                </div>
            </div>
        </>
    );
}

export default Layout;