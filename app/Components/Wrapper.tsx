
import style from '@/app/Styles/Components/Wrapper.module.scss';

interface Props {
    card: boolean
    children: React.ReactNode
}

const Wrraper = ({...pr}: Props) => {

    return (
        <>
            <div className={`${style['Wrapper']} ${style[`Wrapper__${pr.card ? 'card' : 'nocard'}`] }`}>
                <div className=''>
                    {pr.children}
                </div>
            </div>
        </>
    );
}

export default Wrraper;