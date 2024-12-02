
interface VarifySessionResponseSession {
    status: string
    currency?: string
    amount?: number
    timeout?: number
    email?: string
}

interface VarifySessionResponsePaymentCardDetails {
    card_reciever: string
    card_number: string
}

interface VarifySessionResponsePayment {
    payment_type: string
    card_details?: VarifySessionResponsePaymentCardDetails
    payment_id?: number
}

interface VarifySessionResponseData {
    session: VarifySessionResponseSession
    payment?: VarifySessionResponsePayment
    domain?: string
}

export interface VarifySessionResponse {
    status: number
    message?: string
    data: VarifySessionResponseData
}

export interface VarifySessionRequest {
    session_uid: string
}