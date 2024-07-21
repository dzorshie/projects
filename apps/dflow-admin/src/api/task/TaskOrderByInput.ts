import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  dueDate?: SortOrder;
  description?: SortOrder;
  processId?: SortOrder;
};
