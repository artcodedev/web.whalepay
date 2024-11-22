


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

import Errors from '@/app/Components/Errors';


export default function Home() {
  return (

    <Layout>

      <Header />

      <HeaderAmount />

      {/* <Exited /> */}

      <Errors />

      {/* <Success /> */}

      <PaymentSuspens />

      {/* <PaymentMethod /> */}

      <Footer />

    </Layout>

  );
}
