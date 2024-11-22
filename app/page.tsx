


/*
*** IMAGE STYLE
*/
import style from '@/app/Styles/Pages/Index.module.scss';

/*
*** COMPONENTS
*/
import Header from './Components/Header';
import Card from './Components/Card';
import Wrraper from './Components/Wrapper';
import Footer from './Components/Footer';
import Layout from '@/app/Components/Layout';

/*
*** IMAGE SVG
*/
import sberbank from '@/app/Static/svg/logo/logo_sberbank.svg';
import tinkiff from '@/app/Static/svg/logo/logo_tinkoff.svg';
import alfabank from '@/app/Static/svg/logo/logo_alfa.svg';

export default function Home() {
  return (

    <Layout>

      <Header />

      <Wrraper card={false} >

        <div className={style['Index']}>

          <div className={style['Index__card']}>
            <Card number='0000000000000000' expiration='00/00' cardHolderName='john doe' />
          </div>

          <div className={style['Index__title']}>
            <h1>Платежный сервис для любых целей</h1>
          </div>

          <div className={style['Index__icons']}>
            <div className={style['Index__icons__items']}>

              {[sberbank, tinkiff, alfabank].map((e) => <img className={style['Index__icons__items__img']} src={e.src} style={{ backgroundImage: `url(${e.src})` }}></img>)}

            </div>
          </div>
        </div>

      </Wrraper>

      <Footer />

    </Layout>

  );
}
