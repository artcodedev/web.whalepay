
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
    card_valid_thru: string
}

export interface VarifySessionResponsePayment {
    payment_type: string
    card_details?: VarifySessionResponsePaymentCardDetails
    currency_symbol: string
    timeout: number
    amount: number
}

export interface VarifySessionResponseData {
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