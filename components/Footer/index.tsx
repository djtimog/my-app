import Link from 'next/link'
import Image from 'next/image'
import routes from '@/routes'
import styles from './styles.module.scss'
import logo from '@/img/logo-white.png'
import facebook from '@/img/facebook.svg'
import instagram from '@/img/instagram.svg'
import twitter from '@/img/twitter.svg'


export default function Footer() {
    return <>
        <footer className={`bg-secondary p-2vh p-7vw w-100 d-flex flex-wrap ${styles.footer} `}>
            <div className='d-flex col-6 col-md-auto order-1 order-md-0 pt-3 pb-2 pt-md-2 justify-content-center'>
                <Link href={routes.home} className='p-2'>
                    <Image src={logo} alt="logo" width={120} height={45} />
                </Link>
            </div>
            <div className='col-6 col-md-auto'>
                <ul className={`d-flex flex-column list-unstyled text-center pt-2 pb-2`}>
                    <li className='p-2'> <Link href={routes.home}>About Us</Link></li>
                    <li className='p-2'> <Link href={routes.home}>Responsibilities</Link></li>
                    <li className='p-2'> <Link href={routes.home}>Our Services</Link></li>
                    <li className='p-2'> <Link href={routes.home}>Contact</Link></li>
                </ul>
            </div>
            <div className='col-6 col-md-auto'>
                <ul className={`d-flex flex-column list-unstyled text-center pt-2 pb-2`}>
                    <li className='p-2'> <Link href={routes.home}>Testimonials</Link></li>
                    <li className='p-2'> <Link href={routes.home}>Terms of Service</Link></li>
                    <li className='p-2'> <Link href={routes.home}>Disclaimer</Link></li>
                    <li className='p-2'> <Link href={routes.home}>Privacy Policy</Link></li>
                </ul>
            </div>
            <div className={`col-6 col-md-auto d-flex order-1 justify-content-center order-md-0 align-self-center align-self-md-end pb-2`}>
                <ul className={`d-flex gap-2 list-unstyled `}>
                    <li className='p-2'> <Link href={routes.home}><Image src={facebook} alt="facebook" width={20} height={20} /></Link></li>
                    <li className='p-2'> <Link href={routes.home}><Image src={twitter} alt="twitter" width={20} height={20} /></Link></li>
                    <li className='p-2'> <Link href={routes.home}><Image src={instagram} alt="instagram" width={20} height={20} /></Link></li>
                </ul>
            </div>
        </footer>
    </>
}