import Image from "next/image"
import Section from "../common/Section"


const categories = [
  {
    thumbnail: "/assets/images/category/category1.png",
    path: '',
    title: 'Music'
  },
  {
    thumbnail: "/assets/images/category/category2.png",
    path: '',
    title: 'Travel & Tourism'
  },
  {
    thumbnail: "/assets/images/category/category3.png",
    path: '',
    title: 'Community'
  },
  {
    thumbnail: "/assets/images/category/category1.png",
    path: '',
    title: 'Music'
  },
  {
    thumbnail: "/assets/images/category/category2.png",
    path: '',
    title: 'Music'
  },
  {
    thumbnail: "/assets/images/category/category3.png",
    path: '',
    title: 'Music'
  },
  {
    thumbnail: "/assets/images/category/category1.png",
    path: '',
    title: 'Music'
  },
  {
    thumbnail: "/assets/images/category/category2.png",
    path: '',
    title: 'Music'
  },
  {
    thumbnail: "/assets/images/category/category3.png",
    path: '',
    title: 'Music'
  }
]

function CategorySection() {
  return (
    <Section title="Categories" containerStyle="py-[80px]" subContainerStyle="bg-[#ffffff]">
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-12 xl:gap-8">
        {
          categories.map((category, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center group">
                <Image
                  src={category.thumbnail}
                  alt={""}
                  width={142}
                  height={142}
                  className="rounded-full hover:opacity-70 transition-all duration-500"
                />
                <h2 className="text-secondary-cyanDarkest text-xl font-medium line-clamp-1 group-hover:text-accent-darkCyan transition-all duration-500">{category.title}</h2>
              </div>
            )
          })
        }
      </div>

    </Section>
  )
}

export default CategorySection