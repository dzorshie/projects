import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROCESS_TITLE_FIELD } from "../process/ProcessTitle";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="status" source="status" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="description" source="description" />
        <ReferenceField label="process" source="process.id" reference="Process">
          <TextField source={PROCESS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
