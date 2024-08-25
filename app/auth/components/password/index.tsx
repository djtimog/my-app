"use client";
import styles from './password.module.scss';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ResetModal from './reset';
import ChangeModal from './change';
import VerifyModal from './verification';

export default function PasswordModal() {

    const [showReset, setShowReset] = useState(false);
    const handleCloseReset = () => setShowReset(false);
    const handleShowReset = () => setShowReset(true);
    const [showVerify, setShowVerify] = useState(false);
    const handleCloseVerify = () => setShowVerify(false);
    const handleShowVerify = () => setShowVerify(true);
    const [showChange, setShowChange] = useState(false);
    const handleCloseChange = () => setShowChange(false);
    const handleShowChange = () => setShowChange(true);

    const handleShow1 =()=>{
        handleShowReset();
        handleCloseVerify();
        handleCloseChange();
    }
    const handleShow2 =()=>{
        handleCloseReset();
        handleShowVerify();
        handleCloseChange();
    }
    const handleShow3 =()=>{
        handleCloseReset();
        handleCloseVerify();
        handleShowChange();
    }
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
            <div className={`${styles.link} mb-3`} onClick={handleShow1}>
                Forget password?
            </div>

            <Modal show={showReset} onHide={handleCloseReset} data-bs-theme={Theme} className="text-center">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <ResetModal onClick={handleShow2}/>
                </Modal.Body>
            </Modal>
            <Modal show={showVerify} onHide={handleCloseVerify} data-bs-theme={Theme} className="text-center">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <VerifyModal onClick={handleShow3}/>
                </Modal.Body>
            </Modal>
            <Modal show={showChange} onHide={handleCloseChange} data-bs-theme={Theme} className="text-center">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <ChangeModal />
                </Modal.Body>
            </Modal>

        </>
    )
}
