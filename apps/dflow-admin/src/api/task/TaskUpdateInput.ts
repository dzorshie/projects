import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";

export type TaskUpdateInput = {
  name?: string | null;
  status?: "Option1" | null;
  dueDate?: Date | null;
  description?: string | null;
  process?: ProcessWhereUniqueInput | null;
};
