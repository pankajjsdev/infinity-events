import Image from "next/image";
import Section from "../common/Section";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const feedbacks = [
    {
        comment: "This product has significantly improved our team's productivity and collaboration.",
        name: "Jane Smith",
        image: "/assets/images/feedback/client1.png",
        designation: "Project Manager",
        company: "Tech Solutions Inc.",
    },
    {
        comment: "Excellent customer service and a user-friendly platform. Highly recommended!",
        name: "John Doe",
        image: "/assets/images/feedback/client2.png",
        designation: "CEO",
        company: "Innovatech Ltd.",
    },
    {
        comment: "The features are intuitive and the support team is always responsive.",
        name: "Emily Johnson",
        image: "/assets/images/feedback/client3.png",
        designation: "Marketing Director",
        company: "Creative Works",
    },
    {
        comment: "A game-changer for our business. The integration process was seamless.",
        name: "Michael Brown",
        image: "/assets/images/feedback/client1.png",
        designation: "IT Manager",
        company: "Global Enterprises",
    },
    {
        comment: "Reliable and efficient. Our team loves using this tool daily.",
        name: "Sarah Davis",
        image: "/assets/images/feedback/client3.png",
        designation: "Operations Head",
        company: "NextGen Solutions",
    },
];

function Feedback() {
    return (
        <Section title="Notable Mentions" subContainerStyle="bg-white">
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {feedbacks.map((feedback, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 h-[450px]">
                            <div className="p-1">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="bg-neutral-grey0 group p-4 rounded-md overflow-hidden transition-all duration-1000 ease-in-out">
                                        <p className="line-clamp-4 group-hover:line-clamp-none max-h-[4.5rem] group-hover:max-h-[20rem] text-[12px] transition-all duration-1000 ease-in-out ">
                                            {feedback.comment}
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere accusamus a, deleniti dolores enim quae quo est. Doloribus, sequi! Distinctio perferendis veritatis provident error omnis ut expedita molestiae nobis?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis voluptatem nostrum numquam ea ad labore quo earum laboriosam. Ex nihil tempora vitae repellat facilis ut laboriosam sed perspiciatis eos.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae optio ipsam non odio ex error sint voluptas voluptate incidunt accusamus neque nisi, a omnis ullam sapiente enim illum. Praesentium.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti fuga, corporis neque, facere quia expedita ea ducimus dicta deleniti odit architecto nihil doloribus libero labore tempora fugit, soluta ex sunt!
                                        </p>
                                       
                                    </div>
                                    <div className="mt-5 flex flex-col items-center relative">
                                    <div className="triangle absolute -top-6"></div>
                                        <Image
                                            src={feedback.image}
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                        />
                                        <h1 className="text-[24px] font-semibold mt-2">{feedback.name}</h1>
                                        <p className="text-sm text-center">
                                            {feedback.designation}, {feedback.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="top-10 hidden md:block lg:block" />
                <CarouselNext className="top-10 hidden md:block lg:block"  />
            </Carousel>
        </Section>
    );
}

export default Feedback;
