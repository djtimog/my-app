"use client";
import styles from './signup.module.scss';
import routes from "@/routes";
import Link from "next/link";
import SignupForm from "@/app/auth/components/SignUpForm";
import LogoComponent from "@/components/LogoComponent";

export default function SignUp(){
    return(
    <>
    <div className="row">
        <div className="col-xs-12 col-lg-6 p-1 p-sm-2 p-md-3 p-lg-5">
            <Link href="/" >
                <LogoComponent  className="float-end my-5"/>
            </Link>
            <div className="p-5">
                <div className="text-start mb-5">
                    <p className="h2 my-3 mb-5"><b>Create Your FREE Account</b></p>
                    <p className="h6">Have an account? <Link href={routes.auth.signin} className={styles.dontHaveAcctlink}>Sign in</Link></p>
                </div>
                <div>
                    <div className='mb-5'>
                        <p className="h4"><b>Register as an Ambassador</b></p>
                    </div>
                    <div>
                        <SignupForm/>
                    </div>
                </div>
            </div>
        </div>
        <div className={`d-none d-lg-flex col-lg-6 p-1 p-sm-2 p-md-3 p-lg-5 text-center justify-content-center ${styles.bgImage}`}>
            <div className='d-flex flex-column justify-content-between align-content-center'>
                <div className='mt-5 pt-5'>
                    <p className='fs-1 fw-semibold pt-5'>&quot;The Best way <br /> to Earn is to <br />Learn&quot;</p>
                </div>
                <div className='p-1 p-sm-2 p-md-3 p-lg-4'>
                    <p className='fs-5 pb-5'>Language Acedemy</p>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}