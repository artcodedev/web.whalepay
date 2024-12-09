

'use client'

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import useAsyncEffect from 'use-async-effect';

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
import RequireVerifycation from '@/app/Components/RequireVerifycation';
import ServiceNotWork from '@/app/Components/ServiceNotWork';

import { Console } from '../Utils/Console';

import { redirect } from 'next/navigation'

import { Fetch } from '../Utils/Fetch';

import { useStore } from '../Store/Store';


/*
*** Models
*/

import { VarifySessionResponse, VarifySessionResponsePayment } from '../Models/Session';
import { BanksResponse, BanksResponseData } from '../Models/Banks';
import { CardDetails, CardResponse, PaymentData, checkPayResponse } from '@/app/Models/Payments'


/*
*** Time sleep in miliseconds
*/
const sleep = async (ms: number): Promise<void> => { return new Promise((resolve) => setTimeout(resolve, ms)); }

const Payments = (): JSX.Element => {


  /*
  *** Store
  */
  const { bank_uid_store, setBank } = useStore();

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
  const [paymentSuspens, setPaymentSuspens] = useState<boolean>(false);

  const [cardDetails, setCardDetails] = useState<CardDetails>({});
  const [amount, setAmount] = useState<number | null>(null);
  const [timeout, setTimeoutState] = useState<number>(0);
  const [headerAmount, setHeaderAmount] = useState<boolean>(false);
  const [amountSymbol, setAmountSymbol] = useState<string>('');

  const [cardReceiver, setCardReceiver] = useState<string>('');
  const [cardValidThru, setCardValidThru] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [reqver, setReqVer] = useState<boolean>(false);
  const [serviceNotWork, setServiceNotWork] = useState<boolean>(false);
  /*
  *** GET PARAMS QUERY
  */
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const session_uid: string | null = searchParams.get('session_uid');

  if (!session_uid) { redirect("/") }

  const setSuccessState = async (card_number: string, card_receiever: string, card_valid_thru: string, currency_symbol: string, amount: number, timeout_at: number) => {
    setCardNumber(card_number);
    setCardReceiver(card_receiever);
    setCardValidThru(card_valid_thru);
    setAmount(amount);

    setTimeoutState(timeout_at);

    setAmountSymbol(currency_symbol);
    setLoading(false);
    setPaymentSuspens(true);
    setHeaderAmount(true);

    await checkPay(timeout_at);
  }

  const checkPay = async (timeout: number) => {
    try {

      let wait: boolean = true;

      while (wait) {

        const create_at: number = Date.parse(new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" }));

        if (create_at > timeout) {

          console.log("111111")

          setHeaderAmount(false); setPaymentSuspens(false); setLoading(false); setExited(true); wait = false;

        } else {

          let request: checkPayResponse = await Fetch.request('http://127.0.0.1:3000/api/v1/checkpay', { session_uid: session_uid });


          console.log(request);

          if (request.status) {

            const status: string = request.status;

            if (status === "EXITED") { setHeaderAmount(false); setPaymentSuspens(false); setLoading(false); setExited(true); wait = false; }

            if (status === "SUCCESS") { setHeaderAmount(false); setPaymentSuspens(false); setLoading(false); setSuccess(true); wait = false; }

            if (status === "ERROR") { setHeaderAmount(false); setPaymentSuspens(false); setLoading(false); setError(true); wait = false; }

            if (status === "REQVER") { setHeaderAmount(false); setPaymentSuspens(false); setLoading(false); setReqVer(true); wait = false; }

          }

          await sleep(1500);
        }

      }
    } catch (e) {
      Console.error("[+] Error in check pay wait");
    }
  }

  /*
  *** Request on server wait card
  */
  const getCard = async () => {

    try {

      let wait: boolean = true;

      while (wait) {

        let request: CardResponse = await Fetch.request('http://127.0.0.1:3000/api/v1/getcard', { session_uid: session_uid });

        console.log(request)

        if (request.status == 200) {

          const card_details: CardDetails = request.card_details;

          if (card_details.card_number && card_details.card_receiver && card_details.card_valid_thru) {

            const card: string = card_details.card_number;
            const reciever: string = card_details.card_receiver;
            const valid: string = card_details.card_valid_thru;

            setSuccessState(card, reciever, valid, request.currency_symbol, request.amount, request.timeout);

            wait = false

          }
        }

        if (request.status != 200 && request.status != 444) {
          wait = false
          setLoading(false)
          setError(true)
        }
        await sleep(1500);
      }
    } catch (e) {
      Console.error("[+] Error in get cards wait");
    }
  }

  useAsyncEffect(async () => {

    if (session_uid) {

      const request: VarifySessionResponse = await Fetch.request(`http://127.0.0.1:3000/api/v1/validsession`, { session_uid: session_uid });

      if (request.status == 200) {

        const status: string = request.data.session.status;

        if (status === "PROCESS") {

          // get banks fetch
          const fetch: BanksResponse = await Fetch.request(`http://127.0.0.1:3000/api/v1/banks`, { session_uid: session_uid });

          console.log(fetch)

          if (fetch.status == 200) {
            setLoading(false);

            if (fetch.data.length) { setDataPaymentMethod(fetch.data);  setPaymentMethod(true);
            } else { setServiceNotWork(true); }

          }
        }

        if (status === "PENDING_PAY") {

          if (request.data?.payment) {

            const payment: VarifySessionResponsePayment = request.data.payment;

            if (payment) {

              if (payment.card_details) {

                const card: string = payment.card_details.card_number;
                const reciever: string = payment.card_details.card_reciever;
                const valid: string = payment.card_details.card_valid_thru;

                console.log( payment.timeout)

                setSuccessState(card, reciever, valid, payment.currency_symbol, payment.amount, payment.timeout);

                return
              }

            };

            setLoading(false)
            setError(true)
          }

        }

        if (status === "PENDING_CARD") { setLoading(true); setLoadingTitle(true); getCard(); }

        if (status === "EXITED") { setHeaderAmount(false); setPaymentSuspens(false); setLoading(false); setExited(true); }

        if (status === "SUCCESS") { setHeaderAmount(false); setPaymentSuspens(false); setLoading(false); setSuccess(true); }

        if (status === "ERROR") { setHeaderAmount(false); setPaymentSuspens(false); setLoading(false); setError(true); }

        if (status === "REQVER") { setLoading(false); setReqVer(true); }

      }

      else { setLoading(false); setError(true); }

    } else { setLoading(false); setError(true); }

  }, []);

  /*
  *** Init payment
  */
  const initPaymnent = async (email: string) => {

    const ip: string = '111.111.111.111';

    if (email && session_uid && bank_uid_store) {

      const paymentData: PaymentData = {
        time_opened: Date.now().toString(),
        timezone: (new Date()).getTimezoneOffset() / 60,
        browser_version: navigator.userAgent,
        browser_language: navigator.language,
        ip: ip,
        email: email,
        bank_uid: bank_uid_store,
        session_uid: session_uid
      }

      const response: { status: number } = await Fetch.request('http://127.0.0.1:3000/api/v1//initpayment', paymentData);

      if (response.status == 200) await getCard();

      if (response.status != 200 && response.status != 444) {
        setLoading(false);
        setError(true);
      }

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
  const checkEmail = async () => {

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

      {serviceNotWork ? <ServiceNotWork /> : <></>}

      {reqver ? <RequireVerifycation /> : <></>}

      {headerAmount ? <HeaderAmount amount={amount ? amount : 0} timeout={timeout} amount_symbol={amountSymbol} /> : <></>}

      {paymentSuspens ? <PaymentSuspens cardHolderName={cardReceiver} number={cardNumber} expiration={cardValidThru} /> : <></>}

      {emailW ? <Email checkEmail={checkEmail} onFocus={onFocus} onKeyDown={onKeyDown} placeholder="Ваш E-mail" type="text" error={validEmail} onChange={onChange} /> : <></>}

      {exited ? <Exited /> : <></>}

      {error ? <Errors /> : <></>}

      {success ? <Success amount={amount} /> : <></>}

      {loading ? <ReceivingDetails message={loadingTitle ? 'Минуту! Ожидаю реквизиты.' : ''} /> : <></>}

      {paymentMethod ? <PaymentMethod data={dataPaymentMethod ? dataPaymentMethod : []} onclick={getBankUid} /> : <></>}

      <Footer black={true} />

    </Layout>

  );
}

export default Payments;



