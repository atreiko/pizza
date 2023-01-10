import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component'

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});
View.args = {
  imagePath: '/assets/pizza/assorti.jpeg',
  weight: 555,
  title: 'Піца Асорті',
  ingredients: 'Соус томатний, моцарела, салямі, перець, маслини, французькі трави',
  price: 215
}