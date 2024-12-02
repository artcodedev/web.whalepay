

'use client'

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'

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
import { redirect } from 'next/navigation'

/*
*** Models
*/
import { AnswersError } from '@/app/Models/Models';

import React, { useState, useEffect, MouseEventHandler } from 'react';
import { Fetch } from '../Utils/Fetch';
import useAsyncEffect from 'use-async-effect';
import { VarifySessionResponse, VarifySessionRequest} from '../Models/Session';
import { BanksResponse, BanksResponseData } from '../Models/Banks';

export default function Payments() {

  /*
  *** ALL STATE
  */
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingTitle, setLoadingTitle] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [exited, setExited] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);
  const [dataPaymentMethod, setDataPaymentMethod] = useState<BanksResponseData[]>([]);

  /*
  *** GET PARAMS QUERY
  */
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const session_uid: string | null = searchParams.get('session_uid');

  if (!session_uid) { redirect("/") }

  useAsyncEffect(async () => {

    if (session_uid) {

      const request: VarifySessionResponse = await Fetch.request(`http://127.0.0.1:3000/api/v1/validsession`, { session_uid: session_uid });

      if (request.status == 200) {

        const status: string = request.data.session.status;

        if (status === "PROCESS") {

          // get banks fetch
          const fetch: BanksResponse = await Fetch.request(`http://127.0.0.1:3000/api/v1/banks`);

          if (fetch.status == 200) {
            if (fetch.data.length) {
              setDataPaymentMethod(fetch.data); setLoading(false); setPaymentMethod(true); 
            } else {
              setLoading(false); setError(true); 
            }
            
          }
        }

        if (status === "PENDING") { }

        if (status === "EXITED") { setLoading(false); setSuccess(true); }

        if (status === "SUCCESS") { setLoading(false); }

        if (status === "ERROR") { setLoading(false); setError(true); }

      }
      else { setLoading(false); setError(true); }

    } else { setLoading(false); setError(true); }




  }, []);


  const PaymentMethodAction = (e: React.MouseEvent<HTMLElement>): void => {

    const ta: EventTarget & HTMLElement = e.currentTarget;

    const uid: string | null = ta.attributes[1].textContent;

    if (uid) {
      setPaymentMethod(false);
      setLoading(true);
      setLoadingTitle(true);
    }
  }

  return (

    <Layout>

      <Header color={false} />

      {/* <HeaderAmount /> */}

      {/* <PaymentSuspens /> */}

      {exited ? <Exited /> : <></>}

      {error ? <Errors /> : <></>}

      {success ? <Success /> : <></>}

      {loading ? <ReceivingDetails message={loadingTitle ? 'Минуту! Ожидаю реквизиты.': ''}/> : <></>}

      {paymentMethod ? <PaymentMethod data={dataPaymentMethod} onclick={PaymentMethodAction}/> : <></>}

      <Footer black={true} />

    </Layout>

  );
}
