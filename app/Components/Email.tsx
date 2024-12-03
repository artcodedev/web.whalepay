import { KeyboardEvent, ChangeEvent } from "react"
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import UIButton from '@/app/Components/UIKIT/UIButton';
import UIInput from "./UIKIT/UIInput";



interface Props {
    placeholder: string
    type: string
    error: boolean
    onFocus: () => void
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    checkEmail: () => void
}

const Email = ({...pr}: Props) => {

    return (
        <>

            <PaymantWrapper>

                <UIInput onFocus={pr.onFocus} onKeyDown={pr.onKeyDown} onChange={pr.onChange} placeholder="E-mail" type="text" error={pr.error}/>

                <UIButton title='Подтвердить' onClick={pr.checkEmail}/>

            </PaymantWrapper>

        </>
    );
}


export default Email;