export const HeroBannter = () => {
  return (
    <div className="flex overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7.5 no-scrollbar">
      <div className="min-w-[2300x] md:min-w-0 bg-[#FF7010] rounded-2xl flex-shrink-0">
        <img src="/pizza.svg" alt="" className="rounded-2xl w-full" />
        <div className="p-5 text-white">
          <h2 className="font-bold text-[18px] md:text-[20px]">3 средние пиццы от 999 рублей</h2>
        </div>
      </div>
      <div className="min-w-[280px] md:min-w-0 bg-[#E23535] rounded-2xl flex-shrink-0">
        <img src="/pizza1.svg" alt="" className="rounded-2xl py-[30px] md:py-[59px]" />
        <div className="p-5 text-white">
          <h2 className="font-bold text-[18px] md:text-[20px]">Кэшбек 10% на самовывоз (доставка)</h2>
        </div>
      </div>
      <div className="min-w-[300px] md:min-w-0 bg-[#FF7010] rounded-2xl flex-shrink-0">
        <img src="/pizza.svg" alt="" className="rounded-2xl w-full" />
        <div className="p-5 text-white">
          <h2 className="font-bold text-[18px] md:text-[20px]">3 средние пиццы от 999 рублей</h2>
        </div>
      </div>
      <div className="min-w-[300px] md:min-w-0 bg-[#E23535] rounded-2xl flex-shrink-0">
        <img src="/pizza1.svg" alt="" className="rounded-2xl md:py-[59px]" />
        <div className="p-5 text-white">
          <h2 className="font-bold text-[18px] md:text-[20px]">Кэшбек 10% на самовывоз (доставка)</h2>
        </div>
      </div>
    </div>
  )
}
