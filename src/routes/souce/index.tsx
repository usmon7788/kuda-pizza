import { ProductList } from '@/components/product-section/ProductList'
import { products } from '@/data/products'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/souce/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto px-4 md:px-5 max-w-[1440px]'>
      <h1 className='text-3xl text-center py-40 font-bold text-red-600'>Извините, соусы добавим позже.</h1>
    </div>
  )
}
