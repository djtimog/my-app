"use client";
import styles from './password.module.scss';
import { useState, useEffect } from 'react';
import ResetModal from './reset';
import ChangeModal from './change';
import VerifyModal from './verification';
import  { useModal } from "@/components/Modal";

export default function PasswordModal() {

    const [showReset, setShowReset] = useState(false);
    const [showVerify, setShowVerify] = useState(false);
    const [showChange, setShowChange] = useState(false);

    type ModalComponentType = ({ onClick }: { onClick: () => void }) => JSX.Element;

    interface PasswordType {
        Name: string;
        Value: () => boolean;
        Modal: ModalComponentType;
        Open?: () => void; // New property that can be a function or undefined
    }
    const Password:PasswordType[] = [
        {
            Name: "Reset Password",
            Value: ()=> showReset,
            Modal: ResetModal,
        },
        {
            Name: "Verification",
            Value: ()=> showVerify,
            Modal: VerifyModal,
        },
        {
            Name: "Change Password",
            Value: ()=> showChange,
            Modal: ChangeModal,
        }
    ];
    Password.map((password, index) => {
        password.Open = () => {
            const nextShow = Password[index + 1]?.Open || (() => {});
            setModalBody(<password.Modal onClick={nextShow} />);
            setModalHeader(<h3>{password.Name}</h3>);
            handleShow();
        };
    })
    
    const { handleShow, setModalHeader, setModalBody } = useModal();
    
    return (
        <div className={`${styles.link} mb-3`} onClick={Password[0]?.Open}>
            Forget password?
        </div>
    )
}