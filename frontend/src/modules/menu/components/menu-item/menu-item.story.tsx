import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component'

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});
View.args = {
  image: '/assets/pizza/manhattan.jpeg',
  weight: 555,
  title: 'Піца Мангеттен',
  ingredients: '(подвійна порція грибів), Гриби, Моцарела, Папероні, Соус Альфредо',
  price: 215
}