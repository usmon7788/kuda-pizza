import { MapPin } from "lucide-react"
import { Button } from "../ui/button"

export const HeroLocation = () => {
  return (
    <div className="bg-white py-4 px-4 md:px-8 my-7.5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
      <h2 className="text-center md:text-left">Проверить адрес доставки</h2>
      <div className="border border-[#F0F0F0] flex items-center gap-2 rounded-xl p-3 w-full md:flex-1 md:max-w-[783px] md:mx-4">
        <MapPin color="#FF7010" className="shrink-0" />
        <input type="text" className="w-full text-[#A5A5A5] outline-none" placeholder="Адрес" />
      </div>
      <Button className="bg-[#FF7010] text-white py-4 px-8 text-[16px] w-full md:w-auto">Проверить</Button>
    </div>
  )
}
