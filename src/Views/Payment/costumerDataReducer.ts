import { Reducer } from "react";
import { CostumerPayType } from "types/CostumerPayType";

export const costumerDataReducer: Reducer<
  CostumerPayType,
  { type: keyof CostumerPayType | "clear"; payload: string | CostumerPayType }
> = (state, { type, payload }) => {
  return {
    ...state,
    [type]: payload
  };
};

export const initialCustomerData: CostumerPayType = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  locality: "",
  email: "",
  number: ""
};
