import styles from './signIn.module.scss';
import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";
import LogoComponent from "@/components/LogoComponent";
import mediaLink from "@/data/mediaLinks";
import PasswordModal from '../components/password';
export default function SignIn(){
    return(
    <>
        <div className="row">
            <div className="d-none d-lg-flex col-lg-5 bg-primary justify-content-around align-content-center p-5">
                <Image src="/signin-img.svg" alt="signin image" width={400} height={600} className='w-100'/>
            </div>
            <div className="col-xs-12 col-lg-7 p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5">
                <Link href="/" >
                    <LogoComponent  className="float-end my-5 me-md-5 me-4"/>
                </Link>
                <div className="p-5">
                    <div className="text-start mb-5">
                        <p className="h2 my-3 mb-4"><b>Welcome Back</b></p>
                        <p className="h6">Don&apos;t have an account? <Link href={routes.auth.signup} className={styles.link}>Sign up</Link></p>
                    </div>
                    <form action="submit" method="get">
                        <div>
                            <div className="d-none d-md-flex row mb-4">
                                <div className="col-md-5">
                                    <Link href={`${mediaLink.googleLink}`} className={`btn ${styles.btn} ${styles.btnGoogle} btn-light border-dark mb-5`}>Sign in with Google</Link>
                                    <hr />
                                </div>
                                <div className={`d-flex justify-content-center align-items-end col-md-2`}>
                                    <p>Or</p>
                                </div>
                                <div className="col-md-5">
                                    <Link href={`${mediaLink.facebookLink}`} className={`btn ${styles.btn} ${styles.btnFacebook} text-white mb-5`}>Sign in with Facebook</Link>
                                    <hr />
                                </div>
                            </div>
                            <div className="mb-4 mb-md-0">
                                    <label htmlFor="Email" className="d-block">Email address</label>
                                    <div className="input-group mb-4 border-primary">
                                        <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25`} id="basic-addon1">
                                            <Image src="/emailIcon.svg" width={30} height={30} alt="password Icon"/>
                                        </span>
                                        <input type="email" className={`${styles.input} form-control border-primary text-lg-center`} id="Email" name="Email" placeholder="johnkentacad@gmail.com" aria-label="Email address" required/>
                                    </div>
                                    <label htmlFor="Password" className="d-block">Password</label>
                                    <div className="input-group mb-4">
                                        <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                            <Image src="/passwordIcon.svg" width={30} height={30} alt="password Icon"/>
                                        </span>
                                        <input type="password" className={`${styles.input} form-control border-primary text-lg-center`} id="Password" placeholder="*******************" aria-label="Password" required/>
                                    </div>   
                                    <PasswordModal/>
                                    <div className="">
                                        <button type="submit" className={`btn btn-primary ${styles.btn}`}>Sign in</button>
                                    </div>
                            </div>
                            <div className="d-flex d-md-none row">
                                <div className="col-5">
                                    <hr className="mb-5" />
                                    <Link href={`${mediaLink.googleLink}`} className={`btn ${styles.btn} ${styles.btnGoogle} btn-light border-dark`}>Sign in with Google</Link>
                                </div>
                                <div className="col-2 d-flex justify-content-center">
                                    <p>Or</p>
                                </div>
                                <div className="col-5">
                                    <hr className="mb-5" />
                                    <Link href={`${mediaLink.facebookLink}`} className={`btn ${styles.btn} ${styles.btnFacebook} text-white`}>Sign in with Facebook</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}