import Image from "next/image"
import Link from "next/link"
import { CustomButton } from "."


const Navbar = () => {
  return (
    <header className="absolute w-full z-10">
    <nav className="padding-x padding-y max-w-[1440px] mx-auto flex items-center justify-between">
<Link href='/'>
  <Image className="object-contain"  height= {18} width={118} src='/logo.svg' alt="logo"/>
</Link>
<CustomButton title= 'Sign In' btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"/>
    </nav>
    </header>
  )
}

export default Navbar