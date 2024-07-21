import { TaskCreateNestedManyWithoutProcessesInput } from "./TaskCreateNestedManyWithoutProcessesInput";

export type ProcessCreateInput = {
  description?: string | null;
  name?: string | null;
  tasks?: TaskCreateNestedManyWithoutProcessesInput;
};
