"use client"

import Link from 'next/link'
import styles from '@/app/ui/dashboard/sidebara/menuLink/menuLink.module.css'
import { usePathname } from 'next/navigation'


export const MenuLink = ({item}) => {

  const pathname = usePathname()

  console.log(pathname)
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}
