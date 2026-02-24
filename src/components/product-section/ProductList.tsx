// ProductList.tsx
import { useCartStore } from '@/store/useCartStore'
import { Button } from '../ui/button'
import { ButtonGroup } from '../ui/button-group'
import { Card, CardContent } from '../ui/card'

interface Props {
    id: string
    category: string
    filter?: string
    image: string
    name: string
    description: string
    price: string | number
}

export const ProductList = ({ product }: { product: Props }) => {
    const { items, addToCart, updateQuantity } = useCartStore()
    const cartItem = items.find(i => i.id === product.id)
    const count = cartItem?.quantity ?? 0

    const handleChange = (newCount: number) => {
        updateQuantity(product.id, newCount)
    }

    return (
        <Card>
            <CardContent className="space-y-4">
                <img src={product.image} alt={product.name} />

                <div className="flex flex-col justify-between gap-4">
                    <h4 className='font-semibold text-[18px]'>{product.name}</h4>
                    <p>{product.description}</p>

                    <div className="flex items-center justify-between gap-4">
                        {count > 0 ? (
                            <ButtonGroup>
                                <Button variant={'destructive'} className='bg-[#FF7010]' onClick={() => handleChange(count - 1)}>-</Button>
                                <Button variant={'destructive'} className='bg-[#FF7010]'>{count}</Button>
                                <Button variant={'destructive'} className='bg-[#FF7010]' onClick={() => handleChange(count + 1)}>+</Button>
                            </ButtonGroup>
                        ) : (
                            <Button onClick={() => addToCart(product)} variant={'destructive'} className='bg-[#FF7010]'>Выбрать</Button>
                        )}
                        <p className='text-[#FF7010] font-semibold'>от {product.price} ₽</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}