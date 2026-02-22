'use client'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from 'next/link'

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const Navbar = () => {
  return (
    <div className='fixed top-10 py-3 rounded-full bg-[#1b1b1b]  mx-auto inset-x-0  max-w-2xl z-50 flex justify-center'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem >
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Our Cources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href='/cources'>
                  All Cources
                </ListItem>
                <ListItem href='/cources'>
                  Basic Music Theory
                </ListItem>
                <ListItem href='/cources'>
                  Advanced Composition
                </ListItem>
                <ListItem href='/cources'>
                  Songwriting
                </ListItem>
                <ListItem href='/cources'>
                  Music Production
                </ListItem>


              </ul>
              {/* <NavigationMenuLink>All Cources</NavigationMenuLink>
              <NavigationMenuLink>Basic Music Theory</NavigationMenuLink>
              <NavigationMenuLink>Advanced Composition</NavigationMenuLink>
              <NavigationMenuLink>Music Production</NavigationMenuLink>
              <NavigationMenuLink>Advanced Composition</NavigationMenuLink>
              <NavigationMenuLink>Advanced Composition</NavigationMenuLink> */}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/contact">Contact us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar