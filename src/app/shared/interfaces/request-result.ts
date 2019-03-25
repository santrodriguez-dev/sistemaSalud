export interface RequestResult<T> {
    message?: string;
    successful: boolean;
    result?: T;
};
