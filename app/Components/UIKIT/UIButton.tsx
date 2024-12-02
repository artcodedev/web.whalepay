
/*
*** STYLE
*/
import style from '@/app/Styles/Components/UIKIT/UIButton.module.scss'

interface Props {
    title: string
    onClick?: () => void
    href?: string
}

const UIButton = ({ ...pr }: Props) => {
    return (
        <>

            <a href={pr.href ? pr.href : '#'} onClick={pr.onClick}>
                <button className={style['UIButton']}>
                    {pr.title}
                </button>
            </a>
        </>
    );
}

export default UIButton;