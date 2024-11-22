
/*
*** COMPONENTS
*/
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import Layout from '@/app/Components/Layout';
import NotFound from '@/app/Components/NotFound';

export default function NotFoundPage() {
    return (

        <>
            <Layout>

                <Header />

                <NotFound />

                <Footer />

            </Layout>
        </>

    );
}