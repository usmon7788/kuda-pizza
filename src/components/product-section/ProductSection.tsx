import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { ProductList } from './ProductList'
import { ProductListTitle } from './ProductListTitle'

export const ProductSection = () => {
  return (
    <div className="my-10">
      {categories.map((category) => {
        const filteredProducts = products.filter(
          (product) => product.category === category.name
        )

        if (filteredProducts.length === 0) return null

        return (
          <div key={category.name}>
            <ProductListTitle title={category.name} />

            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-6">
              {filteredProducts.map((product) => (
                <ProductList
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}