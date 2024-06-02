import Image from "next/image";
import Section from "../common/Section";

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
    title: 'Art'
  },
  {
    thumbnail: "/assets/images/category/category2.png",
    path: '',
    title: 'Technology'
  },
  {
    thumbnail: "/assets/images/category/category3.png",
    path: '',
    title: 'Sports'
  },
  {
    thumbnail: "/assets/images/category/category1.png",
    path: '',
    title: 'Education'
  },
  {
    thumbnail: "/assets/images/category/category2.png",
    path: '',
    title: 'Health'
  },
  {
    thumbnail: "/assets/images/category/category3.png",
    path: '',
    title: 'Fashion'
  }
];

function CategorySection() {
  return (
    <Section title="Categories" containerStyle="py-[36px] xl:py-[80px]" subContainerStyle="bg-[#ffffff]">
      <div className="flex flex-row  overflow-x-auto space-x-4  xl:flex-wrap gap-3">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col item-center justify-center group py-3 mx-auto ">
            <Image
              src={category.thumbnail}
              alt={category.title}
              width={100}
              height={100}
              className="rounded-full object-cover w-full h-full"
            />
            <h2  className=" w-[150px] text-center text-secondary-cyanDarkest text-lg font-medium  group-hover:text-accent-darkCyan transition-all duration-500">
              {category.title}
            </h2>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default CategorySection;
