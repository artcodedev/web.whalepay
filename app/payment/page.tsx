


/*
*** COMPONENTS
*/
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import Layout from '@/app/Components/Layout';
import PaymentMethod from '@/app/Components/PaymentMethod';
import HeaderAmount from '@/app/Components/HeaderAmount';
import PaymentSuspens from '@/app/Components/PaymentSuspense';
import Success from '@/app/Components/Success';
import Exited from '../Components/Exited';
import ReceivingDetails from '@/app/Components/ReceivingDetails';
import Errors from '@/app/Components/Errors';

export default function Home() {
  return (

    <Layout>

      <Header color={false}/>

      <HeaderAmount />

      <PaymentSuspens />

      <Exited />

      <Errors />

      <Success />

      <ReceivingDetails />

      <PaymentMethod />

      <Footer black={true} />

    </Layout>

  );
}
