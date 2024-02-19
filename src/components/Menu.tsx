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



const italianFoodMenu = [
    {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
        price: 9.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Pizza'],
        badges: ['Vegetarian'],
    },
    {
        id: 2,
        name: 'Spaghetti Carbonara',
        description: 'Pasta dish with spaghetti, eggs, cheese, pancetta, and black pepper.',
        price: 12.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Pasta'],
        badges: [],
    },
    {
        id: 3,
        name: 'Lasagna',
        description: 'Layered pasta dish with tomato sauce, ground meat, and cheese.',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Pasta'],
        badges: [],
    },
    {
        id: 4,
        name: 'Risotto ai Funghi',
        description: 'Creamy risotto cooked with mushrooms, onions, white wine, and Parmesan cheese.',
        price: 16.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Risotto'],
        badges: ['Vegetarian'],
    },
    {
        id: 5,
        name: 'Caprese Salad',
        description: 'Fresh salad with tomatoes, mozzarella cheese, basil leaves, olive oil, and balsamic vinegar.',
        price: 8.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Salad'],
        badges: ['Vegetarian'],
    },
    {
        id: 6,
        name: 'Fettuccine Alfredo',
        description: 'Creamy pasta dish made with fettuccine pasta, butter, cream, and Parmesan cheese.',
        price: 15.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Pasta'],
        badges: ['Vegetarian'],
    },
    {
        id: 7,
        name: 'Pizza Quattro Stagioni',
        description: 'Pizza topped with tomatoes, mozzarella, ham, mushrooms, artichokes, olives, and oregano.',
        price: 11.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Pizza'],
        badges: [],
    },
    {
        id: 8,
        name: 'Tiramisu',
        description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
        price: 7.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Dessert'],
        badges: ['Vegetarian'],
    },
    {
        id: 9,
        name: 'Bruschetta',
        description: 'Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.',
        price: 6.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Appetizer'],
        badges: ['Vegetarian'],
    },
    {
        id: 10,
        name: 'Minestrone Soup',
        description: 'Hearty Italian vegetable soup made with tomatoes, beans, pasta, and vegetables.',
        price: 10.99,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['Soup'],
        badges: ['Vegetarian'],
    }
];




export default function Menu() {
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
                                {italianFoodMenu.map((item) => (
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
                                {italianFoodMenu.map((item) => (
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
                                {italianFoodMenu.map((item) => (
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
                                {italianFoodMenu.map((item) => (
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
                       {italianFoodMenu.map((item)=> (
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
