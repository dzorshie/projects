import { Process } from "../process/Process";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  status?: "Option1" | null;
  dueDate: Date | null;
  description: string | null;
  process?: Process | null;
};
