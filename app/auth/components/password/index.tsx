"use client";
import styles from './password.module.scss';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ResetModal from './reset';
import ChangeModal from './change';
import VerifyModal from './verification';

export default function PasswordModal() {

    const [showReset, setShowReset] = useState(false);
    const [showVerify, setShowVerify] = useState(false);
    const [showChange, setShowChange] = useState(false);
    const Password = [
        {
            Value: ()=> showReset,
            Close: () => setShowReset(false),
            Modal: ResetModal,
            Show: () => {
                setShowReset(true);
                setShowVerify(false);
                setShowChange(false);
            },
            // ShowNext:()=>Password.Verify.Show()
        },
        {
            Value: ()=> showVerify,
            Close: () => setShowVerify(false),
            Modal: VerifyModal,
            Show: () => {
                setShowReset(false);
                setShowVerify(true);
                setShowChange(false);
            },
            // ShowNext:()=>Password.Change.Show()
        },
        {
            Value: ()=> showChange,
            Close: () => setShowChange(false),
            Modal: ChangeModal,
            Show: () => {
                setShowReset(false);
                setShowVerify(false);
                setShowChange(true);
            },
            // ShowNext:()=>Password.Change.Close()
        }
    ];
    
    const [Theme, setTheme] = useState("dark");

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateChange = () => {
            if (darkModeMediaQuery.matches) {
                setTheme("dark");
            } else {
                setTheme("white");
            }
        };

        updateChange(); // Set initial Change based on current preference
        darkModeMediaQuery.addEventListener('change', updateChange); // Listen for changes

        return () => {
            darkModeMediaQuery.removeEventListener('change', updateChange); // Cleanup listener on unmount
        };
    }, []);

    return (
        <>
            <div className={`${styles.link} mb-3`} onClick={Password[0].Show()}>
                Forget password?
            </div>

            {
                Password.map((password , index)=>{
                    <Modal show={password.Value()} onHide={password.Close()} data-bs-theme={Theme} className="text-center" key={index}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <password.Modal onClick={Password[index + 1].Show()}/>
                        </Modal.Body>
                    </Modal>
                })
            }
        </>
    )
}
