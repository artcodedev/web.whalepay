


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
import PaymantWrapper from "@/app/Components/PaymentWrapper";
import Loading from '../Components/Loading';
import Errors from '@/app/Components/Errors';


export default function Home() {
  return (

    <Layout>

      <Header />

      <HeaderAmount />

      <PaymentSuspens />

      <Exited />

      <Errors />

      <Success />

      <PaymantWrapper>
        <Loading message='Получение реквизитов'/>
      </PaymantWrapper>


      <PaymentMethod />

      <Footer />

    </Layout>

  );
}
