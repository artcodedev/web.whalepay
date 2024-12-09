

/*
*** COMPONENTS
*/
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import Card from '@/app/Components/Card';
import WarningSuspense from '@/app/Components/WarningSuspense';
import MessageSuspense from '@/app/Components/MessageSuspense';

interface Props {
    number: string
    cardHolderName: string
    expiration: string
}

const PaymentSuspens = ({...pr}: Props): JSX.Element => {

    return (
        <>

            <PaymantWrapper>
                
                <Card cardHolderName={pr.cardHolderName} number={pr.number} expiration={pr.expiration} />

                <MessageSuspense />

                <WarningSuspense />

            </PaymantWrapper>

        </>
    );
}

export default PaymentSuspens;