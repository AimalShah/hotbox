import Header from './components/Header'
import { ThemeProvider } from "@/components/theme-provider"
import Hero from './components/Hero'
import Menu from './components/Menu'

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
  },
  
];
function App() {
 

  return (
    <div className='font-body'>  
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="border-b z-10 mx-auto p-2 sticky top-0 bg-background/60 backdrop-blur-md z-index-2">
      <Header menu={italianFoodMenu}/>
    </div>
    <Hero/>
    <Menu menu={italianFoodMenu}/>
     </ThemeProvider>
    </div>
      )
}

export default App
