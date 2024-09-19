"use client";
import ResetIcon from "@/app/auth/components/ResetIcon";
import Image from "next/image";
import styles from '../password.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ResetModal = ({ onClick }:{onClick:() => void}) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email('Invalid Email address')
        .required('Email address is required')
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Email address is invalid'
        ),
      });
    
      const formOptions = { resolver: yupResolver(validationSchema) };
      const { register, handleSubmit, formState: { errors }, watch } = useForm(formOptions);
    
      const onSubmit = (data:any) => {
        console.log(data);
      };
    return (
        <>
            <div className="d-flex justify-content-around align-content-center">
                <div>
                    <div><ResetIcon className="" /></div>
                    <div>
                        <p className="fs-2">Password Reset</p>
                        <p>Enter your Email</p>
                    </div>
                    <div>
                        <div className="input-group border-primary">
                            <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                <Image src="/emailIcon.svg" width={30} height={30} alt="password Icon" />
                            </span>
                            <input type="email" className={`${styles.input} form-control border-primary text-lg-center`} id="Email" {...register('email')} placeholder="Enter Email Address" aria-label="Email address" onFocus={handleSubmit(onSubmit)} autoFocus />
                        </div>
                        <div className='text-danger mb-5'>{errors.email && <p>{errors.email.message}</p>}</div>
                        <div className="">
                            <button disabled={!!errors.email} className={`btn btn-primary ${styles.btn}`} onClick={onClick}>Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResetModal;