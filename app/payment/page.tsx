

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
import Email from '@/app/Components/Email';

import { Console } from '../Utils/Console';


import { redirect } from 'next/navigation'

/*
*** Models
*/
import { AnswersError, PaymentData  } from '@/app/Models/Models';

import React, { useState, useEffect, MouseEventHandler, ChangeEvent, KeyboardEvent } from 'react';
import { Fetch } from '../Utils/Fetch';
import useAsyncEffect from 'use-async-effect';
import { VarifySessionResponse, VarifySessionRequest } from '../Models/Session';
import { BanksResponse, BanksResponseData } from '../Models/Banks';
import { useStore } from '../Store/Store';


export default function Payments() {

  /*
  *** Store
  */
  const { setBank } = useStore();

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
  const [emailW, setEmailW] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [emailPole, setEmailPole] = useState<string>('');

  /*
  *** GET PARAMS QUERY
  */
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const session_uid: string | null = searchParams.get('session_uid');

  if (!session_uid) { redirect("/") }

  const getCard = async () => {


    try{
      let wait: boolean = true;
      while (wait) {
        let request = await Fetch.request('http://127.0.0.1:3000/api/v1/getcard', {session_uid: session_uid});

        console.log(request)

        if (request.status == 200) {
          
        }

        wait = false

        // await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch(e) {
      Console.error("[+] Error in get cards (wait");
    }
  }

  useAsyncEffect(async () => {

    if (session_uid) {

      const request: VarifySessionResponse = await Fetch.request(`http://127.0.0.1:3000/api/v1/validsession`, { session_uid: session_uid });

      console.log(request);

      if (request.status == 200) {

        const status: string = request.data.session.status;

        console.log(status)

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

        if (status === "PENDING_PAY") { }

        if (status === "PENDING_CARD") { 
          setLoading(true); setLoadingTitle(true);

          getCard();
        }

        if (status === "EXITED") { setLoading(false); setSuccess(true); }

        if (status === "SUCCESS") { setLoading(false); }

        if (status === "ERROR") { setLoading(false); setError(true); }

      }
      else { setLoading(false); setError(true); }

    } else { setLoading(false); setError(true); }

  }, []);

  /*
  *** Init payment
  */
  const initPaymnent = async (email: string) => {

    const ip: string = '111.111.111.111';

    if (email && session_uid) {

      const paymentData: PaymentData = {
        time_opened: Date.now().toString(),
        timezone: (new Date()).getTimezoneOffset() / 60,
        browser_version: navigator.userAgent,
        browser_language: navigator.language,
        ip: ip,
        email: email,
        bank_uid: email,
        session_uid: session_uid
      }

      const s = await Fetch.request('http://127.0.0.1:3000/api/v1//initpayment', paymentData);

      console.log(s);

    }
  }

  /*
  *** Payment Method Action
  */
  const getBankUid = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {

    const ta: EventTarget & HTMLElement = e.currentTarget;

    const uid: string | null = ta.attributes[1].textContent;

    if (uid) { setBank(uid); setPaymentMethod(false); setEmailW(true); }

  }

  /*
  *** Email check
  */
  const checkEmail = () => {

    if (emailPole.length) {

      const regExp: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (emailPole.toLowerCase().match(regExp)) {
        setEmailW(false)
        setLoading(true);
        setLoadingTitle(true);
          initPaymnent(emailPole); 
        
      }
    }

    setValidEmail(true);

  }

  const onFocus = () => setValidEmail(false);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') checkEmail();
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setEmailPole(e.currentTarget.value)

  return (

    <Layout>

      <Header color={false} />

      {/* <HeaderAmount /> */}

      {/* <PaymentSuspens /> */}

      {emailW ? <Email checkEmail={checkEmail} onFocus={onFocus} onKeyDown={onKeyDown} placeholder="Ваш Email" type="text" error={validEmail} onChange={onChange} /> : <></>}

      {exited ? <Exited /> : <></>}

      {error ? <Errors /> : <></>}

      {success ? <Success /> : <></>}

      {loading ? <ReceivingDetails message={loadingTitle ? 'Минуту! Ожидаю реквизиты.' : ''} /> : <></>}

      {paymentMethod ? <PaymentMethod data={dataPaymentMethod} onclick={getBankUid} /> : <></>}

      <Footer black={true} />

    </Layout>

  );
}
