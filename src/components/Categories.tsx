import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuItem from './MenuItem';

interface MENU{
    name : string;
    price : number;
    description : string;
    imageUrl : string;
    tags : string[];
    badges : string[];

}

const Categories : React.FC<{menu : MENU[]}> = ({menu}) => {

    return (
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
                                   <MenuItem item={item} />
                                ))}
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="big deals">
                            <motion.div
                                initial={{ opacity: 0 , scale :0.8}}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="grid lg:grid-cols-3 w-full gap-2">
                                {menu.map((item) => (
                                    <MenuItem item={item} />
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
                                    <MenuItem item={item} />
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
                                    <MenuItem item={item} />
                                ))}
                            </motion.div>
                        </TabsContent>
                    </Tabs>
    )
}

export default Categories;