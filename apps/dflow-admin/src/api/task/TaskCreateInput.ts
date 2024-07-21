import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";

export type TaskCreateInput = {
  name?: string | null;
  status?: "Option1" | null;
  dueDate?: Date | null;
  description?: string | null;
  process?: ProcessWhereUniqueInput | null;
};
