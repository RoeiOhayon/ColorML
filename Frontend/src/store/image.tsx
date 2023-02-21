import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ImageState {
  image: string
  setImage: (image: string) => void
}

const useImageStore = create<ImageState>()(
  devtools(
    persist(
      (set) => ({
        image: "",
        setImage: (image: string) => set((state) => ({ image: image })),
      }),
      {
        name: 'image-store',
      }
    )
  )
)

export default useImageStore