'use client';

import Modal from 'react-bootstrap/Modal';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState, useEffect } from 'react';
import styles from "./modal.module.scss";

interface ModalContextType {
    show: boolean;
    handleClose: () => void;
    handleShow: () => void;
    setModalHeader: Dispatch<SetStateAction<ReactNode>>;
    setModalBody: Dispatch<SetStateAction<ReactNode>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const AppModal = ({ children }: { children: ReactNode }) => {
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

    const [show, setShow] = useState(false);
    const [modalHeader, setModalHeader] = useState<ReactNode>(<></>);
    const [modalBody, setModalBody] = useState<ReactNode>(<></>);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <ModalContext.Provider value={{ show, handleClose, handleShow, setModalHeader, setModalBody }}>
            {children}
            <Modal show={show} onHide={handleClose} data-bs-theme={Theme} className={`${styles.content} modal-content`}>
                <Modal.Header closeButton>
                    {modalHeader}
                </Modal.Header>
                <Modal.Body>
                    {modalBody}
                </Modal.Body>
            </Modal>
        </ModalContext.Provider>
    );
};

export default AppModal;

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
