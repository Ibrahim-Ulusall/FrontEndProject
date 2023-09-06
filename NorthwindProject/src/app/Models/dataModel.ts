import { ResponseModel } from "./responseModel";

export interface DataModel<T> extends ResponseModel{
    data: T;
}