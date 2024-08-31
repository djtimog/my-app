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
        Close: () => void;
        Modal: ModalComponentType;
        Show: () => void;
        Open?: () => void; // New property that can be a function or undefined
    }
    const Password:PasswordType[] = [
        {
            Name: "Reset Password",
            Value: ()=> showReset,
            Close: () => setShowReset(false),
            Modal: ResetModal,
            Show: () => {
                setShowReset(true);
                setShowVerify(false);
                setShowChange(false);
            },
        },
        {
            Name: "Verification",
            Value: ()=> showVerify,
            Close: () => setShowVerify(false),
            Modal: VerifyModal,
            Show: () => {
                setShowReset(false);
                setShowVerify(true);
                setShowChange(false);
            },
        },
        {
            Name: "Change Password",
            Value: ()=> showChange,
            Close: () => setShowChange(false),
            Modal: ChangeModal,
            Show: () => {
                setShowReset(false);
                setShowVerify(false);
                setShowChange(true);
            },
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