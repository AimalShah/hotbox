import { useState } from "react";
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { AlignRight} from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Instagram  , Facebook  , Github } from 'lucide-react';
import  logo from '../assets/logo.svg';

interface MenuItem {
    id : number;
    name : string;
    price : number;
    description : string;
    imageUrl : string;
    tags : string[];
    badges : string[];
}

interface Props {
    menu : MenuItem[];
}


const Header : React.FC<Props> = ({menu}) =>  {
    const [searchTerm , setSearchTerm] = useState<string>('');
    const [serachResult , setSearchResult] = useState<MenuItem[]>([]);

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);

        const results = menu.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));

        setSearchResult(results);
    }        
    return (
        <header className=" lg:container mx-auto flex justify-between items-center bg-backgound">
            <div className="flex items-center gap-10">
             <a href="">
                 <img src={logo} alt="" className="h-20 ms-2"/>
                </a>
            <nav className="text-white hidden md:hidden lg:block">
                <a className="text-foreground/60 mx-2">Home</a>
                <a className="text-foreground/60 mx-2">About</a>
                <a className="text-foreground/60 mx-2">Contact</a>
            </nav>
            </div>
            <div className="flex gap-2">
                <Input 
                type="text" 
                placeholder="Search Menu Items" 
                value={searchTerm}
                onChange={handelChange}
                className="hidden lg:block" />
                <ModeToggle />
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Button size="icon" variant="ghost">
                                <AlignRight />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="flex flex-col items-start justify-between"> 
                                <div>
                                <SheetHeader className="">
                                    <SheetTitle className="text-xl mb-6">MENU</SheetTitle>
                                    <SheetDescription> 
                                            <div>
                                            <Input 
                                            type="text" 
                                            placeholder="Search Menu Items" 
                                            value={searchTerm}
                                            onChange={handelChange}
                                            className="lg:block" />
                                            </div>
                                        <nav className="flex flex-col">
                                            <div  className="w-full flex flex-col justify-center ">
                                            {
                                              searchTerm === '' ? <p className="mt-6">Empty Here</p> :  
                                            serachResult.map((item) => (
                                                <div className="flex gap-2 items-center justify-between mt-8">
                                                    <div className="flex items-center gap-2">
                                                    <img src={item.imageUrl} alt="" className="h-12" />
                                                    <div className="text-lg">
                                                    {item.name}
                                                    </div>
                                                    </div>
                                                    <div className=" text-lg p-2">
                                                        <Button>

                                                        {'$'+item.price}
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                            </div>
                                        </nav>
                                    </SheetDescription>
                                </SheetHeader>
                                </div>
                                <div>
                                <SheetFooter >
                                    <ul className="flex gap-4">
                                        <li>
                                            <Button size="icon">
                                            <Facebook/>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button size="icon">

                                            <Instagram/>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button size="icon">
                                            <Github/>
                                            </Button>
                                        </li>
                                    </ul>
                                </SheetFooter>
                                </div>
                        </SheetContent>
                    </Sheet>
                </div>
               
            </div>
        </header>
    )
}

export default Header;