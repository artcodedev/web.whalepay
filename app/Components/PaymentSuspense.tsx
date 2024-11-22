

/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import Card from '@/app/Components/Card';
import WarningSuspense from '@/app/Components/WarningSuspense';

const PaymentSuspens = () => {

    return (
        <>

            <PaymantWrapper>
                
                <Card cardHolderName="use bane" number="0000000000000000" expiration="90/90" />

                <WarningSuspense />

            </PaymantWrapper>

        </>
    );
}

export default PaymentSuspens;