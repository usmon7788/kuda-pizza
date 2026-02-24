import { categories } from "@/data/categories"
import { Card, CardContent } from "../ui/card"
import { Link } from "@tanstack/react-router"

export const HeroNavigation = () => {
  return (
    <div className="mb-7.5 px-1 py-5 flex justify-between overflow-x-auto gap-7.5">
      {categories.map((item) => (
        <Link key={item.name} to={item.href} className="hover:scale-105 transition-all duration-300 ease-in">
          <Card className="w-[135px]">
            <CardContent className="flex flex-col items-center gap-2">
              <img
                className="size-8"
                src={item.image}
                alt={item.name}
              />
              <p>{item.name}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
