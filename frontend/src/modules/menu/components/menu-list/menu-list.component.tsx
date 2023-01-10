import { FC } from 'react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component'
import { Pizza } from '../../types/pizza';

interface MenuListProps {
  items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className='flex flex-wrap gap-10'>
      {items.map(({image, ...pizza}) => (
        <MenuItem 
          {...pizza} 
          image={`/assets/pizza/${image}`} 
          key={`pizza-${pizza.id}`} 
        />
      ))}
    </div>
  )
}