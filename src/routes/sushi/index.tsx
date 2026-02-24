import { ProductList } from '@/components/product-section/ProductList'
import { products } from '@/data/products'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/sushi/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto px-4 md:px-5 max-w-[1440px] my-10'>
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products
          .filter((item) => item.category === 'Суши')
          .map((item) => (
            <ProductList product={item} />
          ))}
      </div>
    </div>
  )
}
