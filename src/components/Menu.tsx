import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"




interface MyObject{
    id : number;
    name : string;
    price : number;
    description : string;
    imageUrl : string;
    tags : string[];
    badges : string[];
}



 const  Menu : React.FC<{menu : MyObject[]}> = ({menu}) => {
    return (
        <div className="lg:container md:container px-2 mx-auto">
            <div>
                <h1 className="text-5xl">
                    Our Menu
                </h1>
                <div className='w-32 h-2 bg-primary rounded mt-6'></div>
                <div className="mt-6">

                    <Tabs defaultValue="discount deals" className="w-full">
                        <TabsList className=''>
                            <TabsTrigger value="discount deals">Discount Deals</TabsTrigger>
                            <TabsTrigger value="big deals">Big Deals</TabsTrigger>
                            <TabsTrigger value="pizza deals">Pizza Deals</TabsTrigger>
                            <TabsTrigger value="single item">Single Item</TabsTrigger>
                        </TabsList>
                        <TabsContent value="discount deals">
                            <motion.div
                                initial={{ opacity: 0 , scale :0.8}}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="grid lg:grid-cols-3 w-full gap-2">
                                {menu.map((item) => (
                                    <Card>
                                        <CardHeader>
                                            <img src={item.imageUrl} alt="" className="aspect-[4/3] object-cover" />
                                            <CardTitle className="text-primary text-2xl font-bold">{item.name}</CardTitle>
                                            <CardDescription className="text-lg">{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-bold text-primary">${item.price}</p>
                                        </CardContent>
                                        <CardFooter className="flex gap-2">
                                            <Badge>{item.badges}</Badge>
                                            <Badge>{item.tags}</Badge>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </motion.div>

                        </TabsContent>
                        <TabsContent value="big deals">
                            <motion.div
                                initial={{ opacity: 0 , scale :0.8}}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: -0.6 }}
                                className="grid lg:grid-cols-3 w-full gap-2">
                                {menu.map((item) => (
                                    <Card>
                                        <CardHeader>
                                            <img src={item.imageUrl} alt="" className="aspect-[4/3] object-cover" />
                                            <CardTitle className="text-primary text-2xl font-bold">{item.name}</CardTitle>
                                            <CardDescription className="text-lg">{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-bold text-primary">${item.price}</p>
                                        </CardContent>
                                        <CardFooter className="flex gap-2">
                                            <Badge>{item.badges}</Badge>
                                            <Badge>{item.tags}</Badge>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="pizza deals">
                            <motion.div
                                initial={{ opacity: 0 , scale :0.8}}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="grid lg:grid-cols-3 w-full gap-2">
                                {menu.map((item) => (
                                    <Card>
                                        <CardHeader>
                                            <img src={item.imageUrl} alt="" className="aspect-[4/3] object-cover" />
                                            <CardTitle className="text-primary text-2xl font-bold">{item.name}</CardTitle>
                                            <CardDescription className="text-lg">{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-bold text-primary">${item.price}</p>
                                        </CardContent>
                                        <CardFooter className="flex gap-2">
                                            <Badge>{item.badges}</Badge>
                                            <Badge>{item.tags}</Badge>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="single item">
                            <motion.div
                                initial={{ opacity: 0 , scale :0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="grid lg:grid-cols-3 w-full gap-2">
                                {menu.map((item) => (
                                    <Card>
                                        <CardHeader>
                                            <img src={item.imageUrl} alt="" className="aspect-[4/3] object-cover" />
                                            <CardTitle className="text-primary text-2xl font-bold">{item.name}</CardTitle>
                                            <CardDescription className="text-lg">{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-bold text-primary">${item.price}</p>
                                        </CardContent>
                                        <CardFooter className="flex gap-2">
                                            <Badge>{item.badges}</Badge>
                                            <Badge>{item.tags}</Badge>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className='mt-8 h-32 px-10 '>
                <Carousel>
                    <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-4">
                       {menu.map((item)=> (
                         <CarouselItem className="pl-2 md:pl-4 lg:pl-4 lg:basis-1/3 ">
                            <Card>
                                        <CardHeader>
                                            <img src={item.imageUrl} alt="" className="aspect-[4/3] object-cover" />
                                            <CardTitle className="text-primary text-2xl font-bold">{item.name}</CardTitle>
                                            <CardDescription className="text-lg">{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-bold text-primary">${item.price}</p>
                                        </CardContent>
                                        <CardFooter className="flex gap-2">
                                            <Badge>{item.badges}</Badge>
                                            <Badge>{item.tags}</Badge>
                                        </CardFooter>
                                    </Card>
                         </CarouselItem>
                       ))}             

                    </CarouselContent>
                    <CarouselPrevious variant="default" />
                    <CarouselNext  variant="default"/>
                </Carousel>

            </div>
        </div>
    )
}

export default Menu;