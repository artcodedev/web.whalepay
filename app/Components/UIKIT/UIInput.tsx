import { KeyboardEvent, ChangeEvent } from "react"

/*
*** STYLE
*/
import style from '@/app/Styles/Components/UIKIT/UIInput.module.scss';

interface Props {
    onFocus: () => void
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    type: string
    error: boolean
}

const UIInput = ({ ...pr }: Props) => {

    return (
        <>
            <input
                className={`${style['UIInput']} ${pr.error ? style['UIInput__error'] : ''}`}
                type={pr.type}
                placeholder={pr.placeholder}
                onFocus={pr.onFocus}
                onKeyDown={pr.onKeyDown}
                onChange={pr.onChange}
            />
        </>
    );
}


export default UIInput;