import PaymantWrapper from "./PaymentWrapper";
import UIButton from "./UIKIT/UIButton";
import RequireVerifycationWR from '@/app/Components/RequireVerifycationWR';



const RequireVerifycation = (): JSX.Element => {

    return (
        <>
            <PaymantWrapper>

                <RequireVerifycationWR />

                <UIButton title='Вернуться на сайт' href="/" />

            </PaymantWrapper>
        </>
    );
}

export default RequireVerifycation;