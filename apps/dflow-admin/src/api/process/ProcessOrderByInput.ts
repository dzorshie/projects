import { SortOrder } from "../../util/SortOrder";

export type ProcessOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
};
