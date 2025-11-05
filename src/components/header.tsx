import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Menu from '@/assets/hamburger.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet.tsx";
import { Button } from './ui/button';

const Header = () => {
    const [_, setActiveSection] = useState('');

    const navSections = [
        { name: 'hero', displayName: "Home", scrollToOffset: 0, headerScrollDetectionOffset: 0 },
        { name: 'features', displayName: "Features", scrollToOffset: -160, headerScrollDetectionOffset: 0 },
        { name: 'getstarted', displayName: "Get Started", scrollToOffset: -160, headerScrollDetectionOffset: 0 },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY

            for (const section of navSections) {
                const element = document.getElementById(section.name);
                if (element) {
                    const top = element.offsetTop - section.headerScrollDetectionOffset;
                    const bottom = top + element.offsetHeight - 100;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section.name);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navSections]);

    const DesktopHeader = () => {
        return (<div className='p-4 flex w-full justify-between items-center'>
            <div className='flex items-center w-1/3 '>
                <div className='flex items-center gap-3 hover:cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {/* Logo if needed */}
                    {/* <img
                        src={""}
                        alt=""
                        className="border rounded-full w-[7vh]"
                    /> */}
                    <Link to='hero' smooth={true} duration={500} offset={-170}><h2 className='font-bold text-3xl text-black bg-[var(--background)] py-1 px-2 rounded-xl'>Inkly</h2></Link>
                </div>
            </div>
            <div className="flex gap-5">
                {navSections.filter(x => x.name !== 'hero').map(section => {
                    return (
                        <Link
                            key={section.name}
                            to={section.name}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={section.scrollToOffset}
                            className={`font-black hover:scale-103 transition-transform duration-300 text-xl cursor-pointer`}
                        >
                            <div className='whitespace-nowrap'>{section.displayName}</div>
                        </Link>
                    )
                })}
            </div>
            <div className='w-1/3 flex justify-end'><Link to='getstarted' smooth={true}><Button size={'lg'}>Get started free</Button></Link></div>
        </div>);
    }

    const MobileHeader = () => {
        return (
            <div className='p-4 flex w-full justify-between items-center'>
                <div className='flex items-center gap-3 w-[30%]'>
                    {/* Hamburger menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Avatar className='hover:shadow hover:shadow-gray-700 hover:cursor-pointer'>
                                <AvatarImage src={Menu} className='p-1' />
                                <AvatarFallback>Hamburger Menu Icon</AvatarFallback>
                            </Avatar>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Inkly</SheetTitle>
                                <SheetDescription>
                                    Navigate to different sections here!
                                </SheetDescription>
                                <div className="flex flex-col gap-5 py-3">
                                    {navSections.filter(x => x.name !== 'hero').map(section => (
                                        <SheetClose asChild key={section.name}>
                                            <Link
                                                key={section.name}
                                                to={section.name}
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={section.scrollToOffset}
                                                className={`text-lg font-semibold text-black cursor-pointer`}
                                            >
                                                {section.displayName}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className='flex gap-5'>
                    <h2 className='font-bold text-2xl text-black bg-[var(--background)] py-1 px-2 rounded-xl'>Inkly</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="sticky top-0 bg-white z-10">
            <div className="md:hidden">
                <MobileHeader />
            </div>
            <div className="hidden md:flex flex-grow justify-end">
                <DesktopHeader />
            </div>
        </div>
    );
};

export default Header;