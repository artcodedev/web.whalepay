

/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import Card from '@/app/Components/Card';
import WarningSuspense from '@/app/Components/WarningSuspense';
import MessageSuspense from '@/app/Components/MessageSuspense';

const PaymentSuspens = () => {

    return (
        <>

            <PaymantWrapper>
                
                <Card cardHolderName="use bane" number="0000000000000000" expiration="90/90" />

                <MessageSuspense />

                <WarningSuspense />

            </PaymantWrapper>

        </>
    );
}

export default PaymentSuspens;