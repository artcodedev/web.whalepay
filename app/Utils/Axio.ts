import { stat } from "fs";


export interface FerchResponse {
    status: boolean
    result?: Object
}

export class Fetch {

    public static async request( path: string, json: Object): Promise<FerchResponse> {


        const response = await fetch(`${path}`, {

            method: "POST",
            body: JSON.stringify(json),
            headers: { "Content-Type": "application/json" },

        });

        return response.ok ? {status: true, result: await response.json()} : { status: false };

    } 

}