"use client";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CountrySelect from "@/app/auth/components/CountrySelect";
import mediaLink from "@/data/mediaLinks";
import Image from "next/image";
import Link from "next/link";
import routes from "@/routes";
import styles from '@/app/auth/signup/signup.module.scss';

const SignupForm = () => {
  // Form validation schema
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState: { errors }, watch } = useForm(formOptions);

  const onSubmit = (data:any) => {
    console.log(data);
  };

  const password = watch('password');
  const alertMessage:any =()=>{
    if (password !== watch('confirmPassword')) {
        alert('Passwords do not match');
  }}
  return (
    <form action="submit" method="get" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
            <label htmlFor="FullName" className="d-block">Full Name</label>
            <div className="input-group mb-3 border-primary">
                <input type="text" className={`${styles.input} form-control border-primary`} id="FullName" name="FullName" placeholder="" aria-label="Full Name" required/>
            </div>
            <label htmlFor="Email" className="d-block">Email address</label>
            <div className="input-group mb-3 border-primary">
                <input type="email" className={`${styles.input} form-control border-primary`} id="Email" name="Email" placeholder="" aria-label="Email address" required/>
            </div>
            <label htmlFor="EnterPassword" className="d-block">Enter Password</label>
            <div className="input-group mb-3">
                <input type="password" className={`${styles.input} form-control border-primary`} id="EnterPassword" placeholder="" aria-label="Enter Password" {...register('password')} required onFocus={handleSubmit(onSubmit)}/>
            </div>   
                <div className='text-primary'>{errors.password && <p>{errors.password.message}</p>}</div>
            <label htmlFor="confirmPassword" className="d-block">Confirm Password</label>
            <div className="input-group mb-3">
                <input type="password" className={`${styles.input} form-control border-primary`} id="confirmPassword" placeholder="" aria-label="Confirm Password"{...register('confirmPassword')} onBlur={alertMessage} required/>
            </div>
                <div className='text-primary'>{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}</div>
            <div className='row'>
                <div className='col-6'>
                    <label htmlFor="dateOfBirth" className="d-block">Date of Birth</label>
                    <div className="input-group mb-3">
                        <input type="date" className={`${styles.input} form-control border-primary`} id="dateOfBirth" aria-label="date of birth"/>
                    </div>
                </div>
                <div className='col-6'>
                    <label htmlFor="sex" className="d-block">Sex</label>
                    <div className="input-group mb-3">
                        <select className={`${styles.input} form-control border-primary`} id="sex">
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label htmlFor="phoneNumber" className="d-block">Phone Number</label>
                    <div className="input-group mb-3">
                        <input type="number" className={`${styles.input} form-control border-primary`} id="phoneNumber" aria-label="phone number"/>
                    </div>
                </div>
                <div className='col-6'>
                    <label htmlFor="country" className="d-block">Country</label>
                    <div className="input-group mb-3">
                        <CountrySelect/>
                    </div>
                </div>
            </div>
            <div className='mb-3 d-flex align-items-center'>
                <input type="checkbox" name="agreement" id="agreement" className='align-self-start m-3' required/>
                <label htmlFor="agreement">I agree to Language Academy <Link href={routes.support.agreement.terms} className="text-primary">Terms</Link> and <Link href={routes.support.agreement.conditions} className="text-primary">Conditions</Link></label>
            </div>
            <div>
                <button type="submit" className={`btn btn-primary ${styles.btn}`}>Sign Up</button>
            </div>
        </div>
        <div className="d-flex row">
            <div className="col-5">
                <hr className="mb-5" />
                <Link href={`${mediaLink.googleLink}`} className={`d-flex justify-content-around ${styles.btn}`}><Image src="/google.svg" alt="google image" width={50} height={50} className='p-2'/></Link>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <p>Or</p>
            </div>
            <div className="col-5">
                <hr className="mb-5" />
                <Link href={`${mediaLink.facebookLink}`} className={`d-flex justify-content-around ${styles.btn}`}> <Image src="/facebook.svg" alt="facebook image" style={{ color: 'blue', fontSize: '24px' }} width={50} height={50} className={`${styles.bgWhite} ${styles.br50} p-2`}/></Link>
            </div>
        </div>
    </form>
  );
};

export default SignupForm;
