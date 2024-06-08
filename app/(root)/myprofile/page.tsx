import Section from "@/components/cm_ui/common/Section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"


function page() {
    return (
        <div>
            <div className="w-full bg-[url('/assets/images/eventdetails/eventill.svg')] bg-no-repeat bg-cover">
                <div className="grid grid-cols-3 container">
                    <div className="mt-7">
                        <Image
                            src={"/assets/images/profile/profile.png"}
                            alt=""
                            width={250}
                            height={200}
                        />
                    </div>
                    <div className="shadow-2xl col-span-2 rounded-[36px] px-[28px] py-[36px] mt-7">
                        <h1 className="text-accent-lightOrange text-2xl font-semibold">Dean Dun Kirk</h1>
                        <div className="flex"><span className="text-sm">Date of Birth:</span> <h4 className="text-sm font-semibold">  27th October 1997</h4></div>
                        <div className="flex">                        <span className="text-sm">Gender:</span><h4 className="text-sm font-semibold"> Male</h4></div>
                        <div className="flex"><span className="text-sm">Email:</span><h4 className="text-sm font-semibold"> abc@gmail.com</h4></div>
                        <div className="flex"> <span className="text-sm">Mobile:</span><h4 className="text-sm font-semibold"> +918374759381</h4></div>
                        <div className="flex"> <span className="text-sm">Hobbies:</span><h4 className="text-sm font-semibold"> 27th October 1997</h4></div>
                        <div className="flex"> <span className="text-sm">Medical Condition:</span><h4 className="text-sm font-semibold"> 27th October 1997</h4></div>
                    </div>
                </div>
            </div>
            <div className="container px-16 mt-8">
                <Tabs defaultValue="about" className="w-full">
                    <TabsList>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="mybookings">mybookings</TabsTrigger>
                        <TabsTrigger value="myevents">myevents</TabsTrigger>
                        <TabsTrigger value="myfavourites">myfavourites</TabsTrigger>
                        <TabsTrigger value="mycalendar">mycalendar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="my-3">
                        <Section title="About me">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta perspiciatis repudiandae dolorem alias corporis perferendis necessitatibus aut distinctio illo, mollitia, quas iste, aliquid dolor officiis dolores? Deserunt quidem vel temporibus!
                            </p>
                        </Section>
                    </TabsContent>
                    <TabsContent value="mybookings">
                        <p>mybookings</p>
                    </TabsContent>
                    <TabsContent value="myevents">
                        <p>myevents</p>
                    </TabsContent>
                    <TabsContent value="myfavourites">
                        <p>about</p>
                    </TabsContent>
                    <TabsContent value="mycalendar">
                        <p>mycalendar</p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default page