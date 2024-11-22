
/*
*** STYLE
*/
import style from '@/app/Styles/Components/UIKIT/UIButton.module.scss'

interface Props {
    title: string
    onClick?: () => void
}

const UIButton = ({...pr}: Props) => {
    return (
        <>
            <button className={style['UIButton']} onClick={pr.onClick}>
                {pr.title}
            </button>
        </>
    );
}

export default UIButton;