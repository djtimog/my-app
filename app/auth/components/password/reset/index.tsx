"use client";
import ResetIcon from "@/app/auth/components/ResetIcon";
import Image from "next/image";
import styles from '../password.module.scss';

const ResetModal = ({ onClick }:{onClick:() => void}) => {
    return (
        <>
            <div className="d-flex justify-content-around align-content-center p-2 p-md-3 p-lg-5">
                <div>
                    <div><ResetIcon className="" /></div>
                    <div>
                        <p className="fs-2">Password Reset</p>
                        <p>Enter your Email and click on the link provided<br />or write the code here</p>
                    </div>
                    <div>
                        <div className="input-group mb-5 border-primary">
                            <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                <Image src="/emailIcon.svg" width={30} height={30} alt="password Icon" />
                            </span>
                            <input type="email" className={`${styles.input} form-control border-primary text-lg-center`} id="Email" name="Email" placeholder="johnkentacad@gmail.com" aria-label="Email address" required autoFocus />
                        </div>
                        <div className="">
                            <button className={`btn btn-primary ${styles.btn}`} onClick={onClick}>Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResetModal;