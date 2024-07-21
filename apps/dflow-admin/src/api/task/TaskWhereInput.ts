import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
  dueDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  process?: ProcessWhereUniqueInput;
};
