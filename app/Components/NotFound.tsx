
/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import UIButton from '@/app/Components/UIKIT/UIButton';
import  NotFoundErrors from '@/app/Components/NotFoundErrors'; 

const NotFound = (): JSX.Element => {
    return (
        <>

            <PaymantWrapper>

                <NotFoundErrors notfound={true} />

                <UIButton title='Вернуться на сайт' href="/" />

            </PaymantWrapper>

        </>
    );
}

export default NotFound;