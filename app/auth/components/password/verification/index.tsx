"use client";
import Image from "next/image";
import styles from '../password.module.scss';
import verifyIcon from "@/img/password/verification.svg";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function VerifyModal( { onClick }:{onClick:() => void}){
    const validationSchema = Yup.object().shape({
        pin: Yup.string()
        .required('PIN is required')
        .min(6, 'PIN must be 6 digits')
        .matches(/^\d{6}$/, 'PIN must be exactly 6 digits'),
      });
    
      const formOptions = { resolver: yupResolver(validationSchema) };
      const { register, handleSubmit, formState: { errors }, watch } = useForm(formOptions);
    
      const onSubmit = (data:any) => {
        console.log(data);
      };
    
    const [checkError , setCheckError] = useState(true);
    const checkErrorMessage = ()=>{
        if(errors.pin?.message == undefined){
            setCheckError(false);
        }else{
            setCheckError(true);
        }
    }
    console.log(errors.pin?.message);
    return(
        <>
            <div className="d-flex justify-content-around align-content-center p-2 p-md-3 p-lg-5">
                <div>
                    <div>
                        <Image src={verifyIcon} alt="Change" width={120} height={70}  className="" />
                    </div>
                    <div>
                        <p className="fs-2">Code Verification</p>
                        <p>Enter your password and click on the link provided<br />or write the code here</p>
                    </div>
                    <div>
                        <div className="input-group border-primary">
                            <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                <Image src="/passwordIcon.svg" width={30} height={30} alt="password Icon" />
                            </span>
                            <input type="text" className={`${styles.input} form-control border-primary text-center`} id="pin" placeholder="6 digits code" aria-label="pin" {...register('pin')} onBlur={checkErrorMessage} onFocus={handleSubmit(onSubmit)} autoFocus />
                        </div>
                        <div className='text-danger mb-5'>{errors.pin && <p>{errors.pin.message}</p>}</div>
                        <div className="">
                            <div className={`${styles.link} text-secondary`} onFocus={checkErrorMessage} onBlur={checkErrorMessage} >click here to validate code</div>
                            <button disabled={checkError} className={`btn btn-primary ${styles.btn}`} onClick={onClick}>Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}