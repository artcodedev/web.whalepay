
import { Elysia, t } from 'elysia'

import { VarifySessionRequest } from '@/app/Models/Models';
import { Fetch } from '@/app/Utils/Axio';

import { Console } from '@/app/Utils/Console';

const app = new Elysia({ prefix: '/api/v1' })

    .get('/', () => {return {status: 200}}) 

    .post('/validsession', async ({ body }: { body: VarifySessionRequest }) => {

        const fetch = await Fetch.request("http://localhost:5000/api/session/verify", { session_uid: body.session_uid });

        return fetch.status ? fetch.result : fetch;

    })

export const GET = app.handle
export const POST = app.handle 