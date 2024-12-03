
import { Elysia, t } from 'elysia'
import { ip } from "elysia-ip";

/*
*** Models 
*/
import { AnswersError, PaymentData, GetCard  } from '@/app/Models/Models';
import { BanksResponse, BanksResponseData } from '@/app/Models/Banks';
import { VarifySessionRequest} from '../../../Models/Session';

/*
*** Utils
*/
import { Fetch } from '@/app/Utils/Fetch';
import { Console } from '@/app/Utils/Console';

import banksjson from '@/app/Static/banks/banks.json';


const app = new Elysia({ prefix: '/api/v1' })

.use(app => app.derive(({ request }) => ({ ip: app.server?.requestIP(request) })))

    /*
    *** Index page
    */
    .get('/', () => {return {index: "page"}})

    /*
    *** Get ip
    */
    .get("/ip", ({ ip }) => {return {ip: ip}})

    /*
    *** Check validate session
    */
    .post('/validsession', async ({ body }: { body: VarifySessionRequest }): Promise<Fetch> => {

        return await Fetch.request(`${process.env.API_SERVER}/api/session/verify`, { session_uid: body.session_uid });

    })

    /*
    *** Get all banks
    */
    .post("/banks", async (): Promise<BanksResponse> => {

        console.log(process.env.API_SERVER);

        const response: BanksResponse =  await Fetch.request(`${process.env.API_SERVER}/api/banks`);

        const responseBank: BanksResponseData[] = [];

        if (response.status == 200) {

            for (let i of response.data) {

                responseBank.push({title: i.title, uid: i.uid, img: (banksjson as any)[i.uid].img});

            }
        }

        return { status: 200, data: responseBank }

    })

    /*
    *** Init payment session
    */
    .post("/initpayment", async ({body}: {body: PaymentData}) => {

        return await Fetch.request(`${process.env.API_SERVER}/api/payment/init`,  body );

    })

    /*
    *** Get free card
    */
    .post("/getcard", async ({body}: {body: GetCard }) => {

        // Console.warning(body)
        // return false
        return await Fetch.request(`${process.env.API_SERVER}/api/payment/getcard`,  body );

    })

export const GET = app.handle
export const POST = app.handle 