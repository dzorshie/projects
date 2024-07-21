import { Task } from "../task/Task";

export type Process = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  tasks?: Array<Task>;
};
