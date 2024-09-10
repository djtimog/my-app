"use client";
import styles from './password.module.scss';
import ResetModal from './reset';
import ChangeModal from './change';
import VerifyModal from './verification';
import  { useModal } from "@/components/Modal";

export default function PasswordModal() {
    const { handleShow, setModalHeader, setModalBody } = useModal();
    type ModalComponentType = ({ onClick }: { onClick: () => void }) => JSX.Element;

    interface PasswordType {
        Name: string;
        Modal: ModalComponentType;
        Open?: () => void;
    }
    const passwordModalFlows:PasswordType[] = [
        {
            Name: "Reset Password",
            Modal: ResetModal,
        },
        {
            Name: "Verification",
            Modal: VerifyModal,
        },
        {
            Name: "Change Password",
            Modal: ChangeModal,
        }
    ];
    passwordModalFlows.map((password, index) => {
        password.Open = () => {
            const nextShow = passwordModalFlows[index + 1]?.Open || (() => {});
            setModalBody(<password.Modal onClick={nextShow} />);
            setModalHeader(
                <div className='text-center'>
                    <h3>{password.Name}</h3>
                </div>
            );
            handleShow();
        };
    })
    return (
        <div className={`${styles.link} mb-3`} onClick={passwordModalFlows[0]?.Open}>
            Forget password?
        </div>
    )
}