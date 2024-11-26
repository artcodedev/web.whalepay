

/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import Loading from '../Components/Loading';

const ReceivingDetails = () => {

    return (
        <>
            <PaymantWrapper>
                <Loading message='Получение реквизитов' />
            </PaymantWrapper>
        </>
    );
}

export default ReceivingDetails;