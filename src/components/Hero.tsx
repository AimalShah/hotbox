import { motion } from 'framer-motion';
import { Button } from './ui/button';


export default function Hero() {
  return (
    <div className="lg:container mx-auto mt-12 grid lg:grid-cols-2 gap-4 font-sans px-2 lg:" >
      <motion.div 
      initial={{x:"-100%" , opacity : 0}}
      animate={{x:"0%" , opacity : 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col justify-center'
      >
        <h1 className="lg:text-5xl text-3xl font-bold"> Who We Are</h1>
        <div className='lg:w-32 lg:h-2 w-24 h-1 bg-primary rounded lg:mt-6 mt-4'></div>
        <div className='w-full'>
            <h3 className='text-lg w-full lg:text-xl font-bold my-6'>
            Delicious pizza, burger, shawarma, fried chicken.
            </h3>
        <p className='lg:text-xl  text-foreground/90 w-full lg:text-justify pr-8 lg:leading-8 lrading-6'>
        Located in posh and middle class area of Swat, restaurant has seen 25 years of serving food especially to Saidu visitors and families. 
        </p>
        <p className='lg:text-xl  text-foreground/90 w-full text-justify pr-8 lg:leading-8 lrading-6'>
          We specialize in Pizza, Fried Chicken, Burgers, Shawarma, Fries, Chicken Fried Rice and Biryani etc. For Free Delivery Call at 03149740112
        </p>
        <Button size="lg" className='mt-6'>Download Menu</Button>
        </div>
      </motion.div>
      <motion.div
      initial={{x:"100%" , opacity : 0}}
      animate={{x:"0%" , opacity : 1 }}
      transition={{ duration: 1 }}
      className='w-full'>
      <img src="https://foodbank.pk/images/pizza-delivery.png" alt="" />
      </motion.div>
    </div>
  )
}
