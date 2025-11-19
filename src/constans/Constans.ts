export enum FORMAT_DATE {
    GENERAL_EN = "YYYY-MM-DD",
    TIME_STAMP = 'YYYY-MM-DDTHH:mm:ss'
}

export enum STATUS_SERVICE {
    REJECT = -1,
    PENDIENT = 0,
    ACCEPT = 1,
    CANCEL = 2,
    NOPRESENT = 3,
    FINALIZED = 4
}

export const REGEX = {
    ONLY_TEXT: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/ ,
    ONLY_NUMBER: /^\d+$/ ,  
    ONLY_NUMBER_PRICE: /^[+-]?(\d+([.,]\d*)?|[.,]\d+)$/ ,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/ ,
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}

export enum PAYMENT_TYPE {
    FREE = 'Free coupon',
    STRIPE = 'Stripe'
}

export enum PLATFORM_TYPE {
    IOS = 'ios',
    ANDROID = 'android'
}

export enum STATUS_PAYMENT {
    PENDING = 'pending',
    COMPLETED = 'completed'
}