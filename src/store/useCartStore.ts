import { create } from 'zustand'

type Product = {
    id: string
    category: string
    filter?: string
    image: string
    name: string
    description: string
    price: string | number
}

type CartItem = Product & {
    quantity: number
}

type CartStore = {
    items: Array<CartItem>
    addToCart: (product: Product) => void
    removeFromCart: (productId: string | number) => void
    updateQuantity: (productId: string | number, quantity: number) => void
    clearCart: () => void
    getTotalItems: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],

    addToCart: (product) => {
        set((state) => {
            const existing = state.items.find((i) => i.id === product.id)
            if (existing) {
                return {
                    items: state.items.map((i) =>
                        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
                    ),
                }
            }
            return { items: [...state.items, { ...product, quantity: 1 }] }
        })
    },

    removeFromCart: (productId) =>
        set((s) => ({ items: s.items.filter((i) => i.id !== productId) })),

    updateQuantity: (productId, quantity) =>
        set((s) => ({
            items: s.items.map((i) => (i.id === productId ? { ...i, quantity } : i)),
        })),

    clearCart: () => set({ items: [] }),

    getTotalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}))
