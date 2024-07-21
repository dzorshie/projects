import { TaskUpdateManyWithoutProcessesInput } from "./TaskUpdateManyWithoutProcessesInput";

export type ProcessUpdateInput = {
  description?: string | null;
  name?: string | null;
  tasks?: TaskUpdateManyWithoutProcessesInput;
};
