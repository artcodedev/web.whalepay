
/*
*** COMPONENTS
*/
import PaymantWrapper from "./PaymentWrapper";
import ServiceNotWorkWR from '@/app/Components/ServiceNotWorkWR';
import UIButton from "./UIKIT/UIButton";

const ServiceNotWork = (): JSX.Element => {

    return (
        <>
            <PaymantWrapper>

                <ServiceNotWorkWR />

                <UIButton title='Вернуться на сайт' href="/" />

            </PaymantWrapper>
        </>
    );
}


export default ServiceNotWork;