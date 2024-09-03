import styles from "./Section4.module.scss";
import routes from "@/routes";
import Link from "next/link";
import Image from "next/image";
import firstAvatar from "@/img/avatar/img1.png";

export default function Section4(){
    return(
        <>
            <section className={`${styles.Section4} w-100 p-4 p-sm-5`}>
                <div className="m-1 m-sm-2 m-md-5 my-3">
                    <div className="text-center m-1 m-sm-2 m-md-5 p-1 p-sm-2 p-md-5">
                        <h3 className="mb-4"><b>Doubting? Hear from others</b></h3>
                        <p className="mb-5">Do you require some help for your project: Conception workshop,<br/>prototyping, marketing strategy, landing page, UX/UI?</p>
                        <Link href={routes.auth.signup} className="btn btn-primary px-5 py-3"> Register Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}