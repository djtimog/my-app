"use client";
import ChangeIcon from "@/app/auth/components/ChangeIcon";
import Image from "next/image";
import styles from '../password.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function ChangeModal(){
    const validationSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters')
          .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
          .matches(/[0-9]/, 'Password must contain at least one number')
          .matches(/[.@$!%*?&#]/, 'Password must contain at least one special character'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password')], 'Passwords must match'),
      });
    
      const formOptions = { resolver: yupResolver(validationSchema) };
      const { register, handleSubmit, formState: { errors }, watch } = useForm(formOptions);
    
      const onSubmit = (data:any) => {
        console.log(data);
      };
    
    const [checkError , setCheckError] = useState(true);
    const checkErrorCheck = ()=>{
        if(errors.password?.message == undefined && errors.confirmPassword?.message == undefined){
            setCheckError(false);
        }else{
            setCheckError(true);
        }
    }
    return(
        <>
            <div className="d-flex justify-content-around align-content-center p-2 p-md-3 p-lg-5">
                <div>
                    <div><ChangeIcon className=""/></div>
                    <div>
                        <p className="fs-2">Password Change</p>
                        <p>Enter new password and re-type it</p>
                    </div>
                    <div>
                        <form action="submit" method="get" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-group">
                                <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                    <Image src="/passwordIcon.svg" width={30} height={30} alt="password Icon"/>
                                </span>
                                <input type="password" className={`${styles.input} form-control border-primary`} id="EnterPassword" placeholder="" aria-label="Enter Password" {...register('password')} required onFocus={handleSubmit(onSubmit)} autoFocus/>
                            </div>   
                            <div className='text-danger mb-3'>{errors.password && <p>{errors.password.message}</p>}</div>
                            <div className="input-group">
                                <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                    <Image src="/passwordIcon.svg" width={30} height={30} alt="password Icon"/>
                                </span>
                                <input type="password" className={`${styles.input} form-control border-primary`} id="confirmPassword" placeholder="" aria-label="Confirm Password"{...register('confirmPassword')} onFocus={checkErrorCheck} required/>
                            </div>
                            <div className='text-danger mb-3'>{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}</div>
                            <div>
                                <button disabled={checkError} type="submit" className={`btn btn-primary ${styles.btn}`}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
