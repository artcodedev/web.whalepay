/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import UIButton from '@/app/Components/UIKIT/UIButton';
import  NotFoundErrors from '@/app/Components/NotFoundErrors'; 


const Errors = (): JSX.Element => {
    return (
        <>

            <PaymantWrapper>

                <NotFoundErrors notfound={false} />

                <UIButton title='Вернуться на сайт' href="/"/>

            </PaymantWrapper>

        </>
    );
}

export default Errors;