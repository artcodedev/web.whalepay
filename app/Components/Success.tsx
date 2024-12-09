

/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import UIButton from '@/app/Components/UIKIT/UIButton';
import ExitedSuccess from '@/app/Components/ExitedSuccess';

const Success = ({amount} : {amount: number | null}): JSX.Element => {

    return (
        <>

            <PaymantWrapper>

                <ExitedSuccess timeout={true} amount={amount} />

                <UIButton title='Вернуться на сайт' href="/"/>

            </PaymantWrapper>

        </>
    );
}

export default Success;