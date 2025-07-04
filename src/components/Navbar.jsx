import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useScroll, motion } from 'motion/react'
import { TextEffect } from './ui/text-effect'

const menuItems = [
    { name: 'Solution', href: '/solution' },
    { name: 'Pricing', href: '/pricing' },
]

const Navbar = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe();
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div
                    className={cn(
                        'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
                        scrolled && 'bg-background/50 backdrop-blur-2xl'
                    )}>
                    <motion.div
                        key={1}
                        className={cn(
                            'relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6',
                            scrolled && 'lg:py-4'
                        )}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link to="/" aria-label="home" className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu
                                    className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X
                                    className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div
                            className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild variant="outline" size="sm">
                                    <Link to="/select">
                                        <span>Try now</span>
                                    </Link>
                                </Button>
                                <Button asChild size="sm">
                                    <Link to="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    );
}

const Logo = ({ className }) => {
    return (
        <div className="flex items-center gap-2">
            <img src="/Frame-1.png" alt="Simplu" className={cn('h-5 w-auto', className)} />
            <TextEffect className="text-2xl font-bold">Simplu</TextEffect>
        </div>
    );
}

export default Navbar 