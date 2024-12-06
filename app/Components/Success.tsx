

/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import UIButton from '@/app/Components/UIKIT/UIButton';
import ExitedSuccess from '@/app/Components/ExitedSuccess';

const Success = () => {

    return (
        <>

            <PaymantWrapper>

                <ExitedSuccess timeout={true} />

                <UIButton title='Вернуться на сайт' href="/"/>

            </PaymantWrapper>

        </>
    );
}

export default Success;