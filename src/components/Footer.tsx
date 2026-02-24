import { MapPinIcon, Phone, Pizza } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-neutral-200 bg-white mt-10">
            <div className="container mx-auto px-4 md:px-5 max-w-[1440px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <Pizza color="#FF7010" />
                            <p className="font-bold text-lg">Куда пицца</p>
                        </div>
                        <p className="text-sm text-neutral-600">
                            © Copyright 2021 — Куда Пицца
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 font-bold uppercase text-neutral-400 text-xs tracking-widest">Куда пицца</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-[#FF7010] transition-colors">О компании</a></li>
                            <li><a href="#" className="hover:text-[#FF7010] transition-colors">Пользовательское соглашение</a></li>
                            <li><a href="#" className="hover:text-[#FF7010] transition-colors">Условия гарантии</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-bold uppercase text-neutral-400 text-xs tracking-widest">Помощь</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-[#FF7010] transition-colors">Ресторан</a></li>
                            <li><a href="#" className="hover:text-[#FF7010] transition-colors">Контакты</a></li>
                            <li><a href="#" className="hover:text-[#FF7010] transition-colors">Поддержка</a></li>
                            <li><a href="#" className="hover:text-[#FF7010] transition-colors">Отследить заказ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-bold uppercase text-neutral-400 text-xs tracking-widest">Контакты</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-[#FF7010] transition-colors"><Phone color="#FF7010" size={18} /> +7 (926) 223-10-11</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-[#FF7010] transition-colors"><MapPinIcon color='#FF7010' size={18} /> Москва, ул. Юных Ленинцев, д.99</a>
                            </li>
                            <li className="flex items-center gap-4 pt-2">
                                <a className="flex items-center gap-2 hover:text-[#FF7010] transition-colors" href="#"><img src="/facebook.svg" alt="" className="w-5" /> Facebook</a>
                                <a className="flex items-center gap-2 hover:text-[#FF7010] transition-colors" href="#"><img src="/instagram.svg" alt="" className="w-5" /> Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
