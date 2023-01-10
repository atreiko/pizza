import pizzaMenu from '@app/mocks/pizza.json'
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component'

export const MenuList = () => {
  return (
    <div className='flex flex-wrap gap-10'>
      {pizzaMenu.map(({imagePath, ...pizza}) => (
        <MenuItem {...pizza} imagePath={`/assets/pizza/${imagePath}`} />
      ))}
    </div>
  )
}
