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
import { Instagram  , Facebook  , Github } from 'lucide-react';
import  logo from '../assets/logo.svg';


export default function Header() {
    return (
        <header className=" lg:container mx-auto flex justify-between items-center bg-backgound">
            <div className="flex items-center gap-10">
              <img src={logo} alt="" className="h-12 ms-2"/>
            <nav className="text-white hidden md:hidden lg:block">
                <a className="text-foreground/60 mx-2">Home</a>
                <a className="text-foreground/60 mx-2">About</a>
                <a className="text-foreground/60 mx-2">Contact</a>
            </nav>
            </div>
            <div className="flex gap-2">
                <Input type="text" placeholder="Search Menu Items" className="" />
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
                                        <nav className="flex flex-col">
                                            <div  className="w-full">
                                            <Button variant="ghost">Home</Button>
                                            </div>
                                            <div className="w-full">
                                            <Button variant="ghost">Home</Button>
                                            </div>
                                            <div className="w-full">
                                            <Button variant="ghost">Home</Button>
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
