import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const images = [
    {
        image: '/assets/images/home/hero1.png',
        path: '/abc'
    },
    {
        image: '/assets/images/home/hero1.png',
        path: '/ab2'
    },
    {
        image: '/assets/images/home/hero1.png',
        path: '/2bc'
    },
    {
        image: '/assets/images/home/hero1.png',
        path: '/bc4'
    },
    {
        image: '/assets/images/home/hero1.png',
        path: '/bc9'
    }
]

function HeroSection() {
    return (
        <div className="w-full container my-2">
            <Carousel className="relative">
                <CarouselContent>
                    {
                        images.map((image, index) => {
                            return (
                                <CarouselItem className="w-full h-[50vh] bg-accent-orange flex items-center justify-center" key={index}>
                                    <Image
                                        src={image.image}
                                        width={1250}
                                        height={500}
                                        className="object-cover"
                                        alt="" priority />
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious className="left-10" />
                <CarouselNext className="right-10" />
            </Carousel>

        </div>
    )
}

export default HeroSection
