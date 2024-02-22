import Categories from "@/components/Categories";
import MenuItem from "./MenuItem";
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
                <Categories menu={menu} />                  
                </div>
            </div>
            <div className='mt-8 h-32 px-10 '>
                <Carousel>
                    <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-4">
                       {menu.map((item)=> (
                         <CarouselItem className="pl-2 md:pl-4 lg:pl-4 lg:basis-1/3 ">
                           <MenuItem item={item} />
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