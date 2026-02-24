import { LucidePizza, MapPinIcon, ShoppingCartIcon, UserIcon, Trash2Icon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'
import { useCartStore } from '@/store/useCartStore'

export const Header = () => {
  const items = useCartStore((state) => state.items)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const getTotalItems = useCartStore((state) => state.getTotalItems)

  const totalCount = getTotalItems()
  const totalPrice = items.reduce((sum, i) => sum + Number(i.price) * i.quantity, 0)

  return (
    <div className='bg-white'>
      <div className='border-b border-[#F0F0F0] py-2.5 hidden md:block'>
        <div className='container mx-auto px-5 max-w-[1440px]'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-10 items-center'>
              <div className='flex gap-2 items-center'>
                <MapPinIcon color='#FF7010' />
                <Select>
                  <SelectTrigger className='border-none shadow-none w-[108px]'>
                    <SelectValue placeholder='location' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='Москва'>Москва</SelectItem>
                      <SelectItem value='Uzbekistan'>Uzbekistan</SelectItem>
                      <SelectItem value='U.S.A'>U.S.A</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <p className='text-[#191919] font-normal'>Проверить адрес</p>
              <p className='text-[#191919] font-normal'>
                Среднее время доставки*:<span className='font-bold'>00:24:19</span>
              </p>
            </div>
            <div className='flex gap-10 items-center'>
              <p className='text-[#191919] font-normal'>Время работы: с 11:00 до 23:00</p>
              <p className='flex gap-2 items-center'>
                <UserIcon color='#FF7010' /> Войти в аккаунт
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='border-b border-[#F0F0F0] py-4 bg-white'>
        <div className='container mx-auto px-4 md:px-5 max-w-[1440px]'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='flex gap-3 items-center shrink-0'>
              <LucidePizza color='#FF7010' />
              <span className="font-bold">Куда пицца</span>
            </Link>

            <ul className='hidden lg:flex text-[#191919] items-center gap-8'>
              <li><Link to='/pizza'>Пицца</Link></li>
              <li><Link to='/sushi'>Суши</Link></li>
              <li><Link to='/drink'>Напитки</Link></li>
              <li><Link to='/snack'>Закуски</Link></li>
              <li><Link to='/combo'>Комбо</Link></li>
              <li><Link to='/desert'>Десерты</Link></li>
              <li><Link to='/souce'>Соусы</Link></li>
            </ul>

            <Drawer direction='right'>
              <DrawerTrigger asChild>
                <Button className='bg-[#FF7010] relative'>
                  <ShoppingCartIcon />
                  {totalCount > 0 && (
                    <span className='absolute -top-2 -right-2 bg-white text-[#FF7010] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-[#FF7010]'>
                      {totalCount}
                    </span>
                  )}
                </Button>
              </DrawerTrigger>

              <DrawerContent className='h-full max-w-sm ml-auto flex flex-col'>
                <DrawerHeader>
                  <DrawerTitle>Корзина 🛒</DrawerTitle>
                </DrawerHeader>

                <div className='flex-1 overflow-y-auto px-4 space-y-4'>
                  {items.length === 0 ? (
                    <p className='text-center text-gray-400 mt-10'>Корзина пуста</p>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className='flex items-center gap-3 border-b pb-4'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-16 h-16 object-cover rounded-lg'
                        />
                        <div className='flex-1'>
                          <p className='font-semibold text-sm'>{item.name}</p>
                          <p className='text-[#FF7010] text-sm'>
                            {Number(item.price) * item.quantity} ₽
                          </p>
                          <div className='flex items-center gap-2 mt-1'>
                            <button
                              onClick={() =>
                                item.quantity === 1
                                  ? removeFromCart(item.id)
                                  : updateQuantity(item.id, item.quantity - 1)
                              }
                              className='w-6 h-6 rounded-full bg-[#FF7010] text-white font-bold flex items-center justify-center'
                            >
                              -
                            </button>
                            <span className='text-sm font-bold'>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className='w-6 h-6 rounded-full bg-[#FF7010] text-white font-bold flex items-center justify-center'
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>
                          <Trash2Icon size={18} color='#999' />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <DrawerFooter>
                  <div className='flex justify-between font-bold text-lg mb-2'>
                    <span>Итого:</span>
                    <span className='text-[#FF7010]'>{totalPrice} ₽</span>
                  </div>
                  <Button
                    className='bg-[#FF7010] w-full'
                    disabled={items.length === 0}
                  >
                    Оформить заказ
                  </Button>
                  <DrawerClose asChild>
                    <Button variant='outline' className='w-full'>
                      Продолжить покупки
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}