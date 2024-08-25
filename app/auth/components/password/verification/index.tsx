"use client";
import Image from "next/image";
import styles from '../password.module.scss';
import verifyIcon from "@/img/password/verification.svg";

export default function VerifyModal( { onClick }:{onClick:() => void}){
    return(
        <>
            <div className="d-flex justify-content-around align-content-center p-2 p-md-3 p-lg-5">
                <div>
                    <div>
                        <Image src={verifyIcon} alt="Change" width={120} height={70}  className="" />
                    </div>
                    <div>
                        <p className="fs-2">Password Reset</p>
                        <p>Enter your password and click on the link provided<br />or write the code here</p>
                    </div>
                    <div>
                        <div className="input-group mb-5 border-primary">
                            <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                <Image src="/passwordIcon.svg" width={30} height={30} alt="password Icon" />
                            </span>
                            <input type="number" className={`${styles.input} form-control border-primary text-center`} id="pin" name="pin" placeholder="6 digits code" aria-label="pin" required autoFocus />
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