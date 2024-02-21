import { useState } from "react";
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { AlignRight } from 'lucide-react';
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
import { Instagram, Facebook, Github } from 'lucide-react';
import logo from '../assets/logo.svg';
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area"

interface MenuItem {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    tags: string[];
    badges: string[];
}

interface Props {
    menu: MenuItem[];
}


const Header: React.FC<Props> = ({ menu }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResult, setSearchResult] = useState<MenuItem[]>([]);

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);

        const results = menu.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));

        setSearchResult(results);
    }
    return (
        <header className=" lg:container mx-auto flex justify-between items-center bg-backgound">
            <div className="flex items-center gap-10">
                <a href="">
                    <img src={logo} alt="" className="h-20 ms-2" />
                </a>
            </div>
            <div className="flex gap-2 relative">
                <Input
                    type="text"
                    placeholder="Search Menu Items"
                    value={searchTerm}
                    onChange={handelChange}
                    className="hidden lg:block" />
                    {
                        searchTerm == '' ? <p></p> :
                        <div className="absolute top-10 broder bg-background rounded">
                            <ScrollArea className=" h-72 rounded-md border p-4">
                                {searchResult.map((item) => (
                                    <div className="flex gap-2 items-center border-t border-border  p-2  justify-between">
                                        <div className="flex items-center gap-2">
                                            <img src={item.imageUrl} alt="" className="h-12" />
                                            <div className="text-md">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className=" text-lg p-2">
                                            <Button size="sm" className="font-bold">

                                                {'$' + item.price}
                                            </Button>
                                        </div>
                                    </div>

                                ))}
                            </ScrollArea>
                        </div>

                            
                    }
   
                <ModeToggle />
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Button size="icon" variant="ghost">
                                <AlignRight />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="flex flex-col  items-start justify-between">
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
                                            <div className="w-full flex flex-col justify-center ">
                                                {
                                                    searchTerm === '' ? <p className="mt-6">Empty Here</p> :
                                                    <ScrollArea className=" h-96 rounded-md border p-4 mt-6">
                                                        {searchResult.map((item) => (
                                                            <div className="flex gap-2 items-center  border-t border-border p-2 justify-between mt-2">
                                                                <div className="flex items-center gap-2">
                                                                    <img src={item.imageUrl} alt="" className="h-12" />
                                                                    <div className="text-md">
                                                                        {item.name}
                                                                    </div>
                                                                </div>
                                                                <div className=" text-lg p-2">
                                                                    <Button size="sm" className="font-bold">

                                                                        {'$' + item.price}
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </ScrollArea>
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
                                                <Facebook />
                                            </Button>
                                        </li>
                                        <li>
                                            <Button size="icon">

                                                <Instagram />
                                            </Button>
                                        </li>
                                        <li>
                                            <Button size="icon">
                                                <Github />
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