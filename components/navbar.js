import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <h1>Adu List</h1> */}
                <Image src="/adu-list.png" alt="logo" width={128} height={45} />
            </div>
            <Link href="/"><a >Home</a></Link>
            <Link href="/about"><a >About</a></Link>
            <Link href="/adu/"><a>Adu List</a></Link>            
        </nav>
    );
}
 
export default Navbar;