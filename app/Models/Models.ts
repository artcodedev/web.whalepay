


export interface AnswersError {
    status: number
    message: string
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

export interface GetCard {
    session_uid: string
}
