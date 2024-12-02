
import { Elysia, t } from 'elysia'
import { VarifySessionRequest} from '../../../Models/Session';
import { Fetch } from '@/app/Utils/Fetch';
import { Console } from '@/app/Utils/Console';
import banksjson from '@/app/Static/banks/banks.json';
import { BanksResponse, BanksResponseData } from '@/app/Models/Banks';

const app = new Elysia({ prefix: '/api/v1' })

    .get('/', () => {return {status: 200}}) 

    .post('/validsession', async ({ body }: { body: VarifySessionRequest }): Promise<Fetch> => {

        return await Fetch.request(`${process.env.API_SERVER}/api/session/verify`, { session_uid: body.session_uid });

    })

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

    });

export const GET = app.handle
export const POST = app.handle 