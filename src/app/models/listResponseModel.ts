import { ResponseModel } from "./responseModel";

export interface ListResponseModel<G> extends ResponseModel{
    data:G[];
}