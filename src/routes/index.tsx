import { createFileRoute } from '@tanstack/react-router'
import { HeroBannter, HeroLocation, HeroNavigation } from '@/components/home-hero'
import { ProductSection } from '@/components/product-section'
import { DeliveryDesc } from '@/components/delivery'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="bg-gray-50 min-h-[95svh]">
      <div className='py-6 md:py-10'>
        <div className='container mx-auto px-4 md:px-5 max-w-[1440px]'>
          <HeroNavigation />
          <HeroBannter />
          <HeroLocation />
          <ProductSection />
          <DeliveryDesc />
        </div>
      </div>
    </div>
  )
}
