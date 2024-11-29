

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
import Loading from '../Components/Loading';
import Errors from '@/app/Components/Errors';
import { redirect } from 'next/navigation'

/*
*** Models
*/
import { VarifySessionRequest } from '@/app/Models/Models';

import React, { useState, useEffect} from 'react';
import { Fetch } from '../Utils/Axio';


export default function Payments() {

  /*
  *** ALL STATE
  */
  const [loading, setLoading] = useState<boolean>(true);

  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const session_uid: string | null = searchParams.get('session_uid');


  if (!session_uid) { redirect("/") }

  useEffect(() => {
    if (session_uid) {

      const data: VarifySessionRequest = {  
        session_uid: session_uid
      }

      // const response = await 

      const fetchRes = async () => {
        const fetch = await Fetch.request("http://127.0.0.1:3000/api/v1/validsession", { session_uid: session_uid });

        // console.log(fetch)

        return await fetch.status ? fetch.result : fetch;
      }

      console.log(fetchRes());

      

      // fetch('/api/v1/validsession',
      //   {method: 'POST',
      //     headers: { 'Content-Type': 'application/json'},
      //     body: JSON.stringify(data)
      //   }
      // )

      // .then((res) => res.json())

      // .then((data) => {
      //   console.log(data)
      // })
    }


  });


  
  return (

    <Layout>

      <Header color={false} />

      {/* <HeaderAmount /> */}

      {/* <PaymentSuspens /> */}

      {/* <Exited /> */}

      {/* <Errors /> */}

      {/* <Success /> */}

      {loading ? <ReceivingDetails /> : '  '}

      {/* <PaymentMethod /> */}

      <Footer black={true} />

    </Layout>

  );
}
