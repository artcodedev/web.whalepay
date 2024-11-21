

import style from '@/app/Styles/Pages/Index.module.scss';

import Header from './Components/Header';
import Card from './Components/Card';
import Wrraper from './Components/Wrapper';
import Footer from './Components/Footer';
import CardWrapper from './Components/CardWrapper';
import Layout from '@/app/Components/Layout';

export default function Home() {
  return (

    <Layout>

      <Header />

      <Wrraper card={true} >
        
        <CardWrapper>
          <Card number='0000000000000000' cardHolderName='some name' expiration='00/00'/>
        </CardWrapper>


        some text
      </Wrraper>

      <Footer />

    </Layout>

  );
}
