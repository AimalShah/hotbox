import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MENUITEM {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    tags: string[];
    badges: string[];
}

const MenuItem: React.FC<{ item: MENUITEM }> = ({ item }) => {
    return (
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
    )
}

export default MenuItem;