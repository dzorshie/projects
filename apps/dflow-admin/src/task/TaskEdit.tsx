import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { ProcessTitle } from "../process/ProcessTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="dueDate" source="dueDate" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="process.id" reference="Process" label="process">
          <SelectInput optionText={ProcessTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
