export type ObjectResponse = {
    error: boolean;
    items: object[] | unknown;
    message: string;
}

export type ResponseApi = {
    data: ObjectResponse    
}

type ResponseManualApi = {
    data: ResponseApi
}