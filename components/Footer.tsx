import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <main className=' gap-3 p-2 items-center'>
            <footer className='footer'>
                <div className='flex gap-8 justify-center items-center '>
                    <Link href={"/"}>
                        <p>About Us</p>
                    </Link>
                    <Link href={"/subscriptons"}>
                        <p>Pricing</p>
                    </Link>
                    {/* contact us page */}
                    {/* <Link href={"/contact-us"}>
                        <p>Contact Us</p>
                    </Link> */}

                    <Link href={"https://x.com/shrivastava815"}>
                        <div className='flex gap-1'>
                            <p>Twitter</p>
                            <Image src="/icons/link.png" alt='link' width={20} height={20} />
                        </div>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/shrivastava-jayesh/"}>
                        <div className='flex gap-1'>
                            <p>LinkedIn</p>
                            <Image src="/icons/link.png" alt='link' width={20} height={20} />
                        </div>
                    </Link>
                </div>
            </footer>
            <div className='flex justify-between'>
                <p>© 2025 ConversoAI. All rights reserved.</p>
                {/* <p>Terms and Conditions</p> */}
            </div>
        </main>
    )
}

export default Footer