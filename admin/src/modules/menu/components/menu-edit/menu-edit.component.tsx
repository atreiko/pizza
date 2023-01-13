import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source='id' disabled />
      <TextInput source='title' fullWidth />
      <TextInput source='image' fullWidth />
      <TextInput source='ingredients' fullWidth />
      <NumberInput source='price' />
      <NumberInput source='weight' />
    </SimpleForm>
  </Edit>
);