export interface CardDetails {
    card_number?: string
    card_receiver?: string
    card_valid_thru?: string
}

export interface CardResponse {
    status: number
    card_details: CardDetails
    timeout: number
    amount: number,
    currency_symbol: string
}

export interface PaymentData {
    time_opened: string,
    timezone: number,
    browser_version: string,
    browser_language: string,
    ip: string,
    email: string,
    bank_uid: string,
    session_uid: string
}

export interface checkPayResponse {
    status: string
}