import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='footer mt-auto py-8 border-t'>
            <div className='flex gap-8 justify-center items-center mb-4'>
                <Link href={"/"}>
                    <p>About Us</p>
                </Link>
                <Link href={"/subscriptions"}>
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
            <div className='flex justify-center'>
                <p>© 2025 ConversoAI. All rights reserved.</p>
                {/* <p>Terms and Conditions</p> */}
            </div>
        </footer>
    )
}

export default Footer