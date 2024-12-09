

/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import UIButton from '@/app/Components/UIKIT/UIButton';
import ExitedSuccess from '@/app/Components/ExitedSuccess';

const Exited = (): JSX.Element => {

    return (
        <>

            <PaymantWrapper>

                <ExitedSuccess timeout={false} />

                <UIButton title='Вернуться на сайт' href="/"/>

            </PaymantWrapper>

        </>
    );
}

export default Exited;