

/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import Loading from '../Components/Loading';

const ReceivingDetails = ({ message }: { message?: string }) => {

    return (
        <>
            <PaymantWrapper>
                    
                <Loading message={message} />

            </PaymantWrapper>
        </>
    );
}

export default ReceivingDetails;