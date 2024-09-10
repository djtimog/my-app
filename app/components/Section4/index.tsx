import styles from "./Section4.module.scss";
import routes from "@/routes";
import Link from "next/link";
import Image from "next/image";
import firstAvatar from "@/img/avatar/img1.png";
import secondAvatar from "@/img/avatar/img2.png";
import thirdAvatar from "@/img/avatar/img3.png";
import fourthAvatar from "@/img/avatar/img4.png";
import fifthAvatar from "@/img/avatar/img5.png";
import { useEffect, useState } from "react";

export default function Section4() {
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => setDisplay(!display), 5000);
        return () => clearInterval(interval);
    }, [display]);
    const topAvatars = [
        {src: firstAvatar, alt: "first avatar", title: "I can take care of your pitch", className:`${styles.first} ${display === true?"":"d-none"} d-md-block`},
        {src: secondAvatar, alt: "second avatar", title: "I can help marketing strategy", className: `${styles.second} ${display === true?"d-none":""} d-md-block`},
    ];
    
    const bottomAvatars = [
        {src: thirdAvatar, alt: "third avatar", title: "I can design you website", className:`${styles.third} ${display === true?"":"d-none"}`},
        {src: fourthAvatar, alt: "fourth avatar", title: "I will define the profile of your users", className: `${styles.fourth} d-none d-sm-block`},
        {src: fifthAvatar, alt: "fifth avatar", title: "I can prototype your app", className:`${styles.fifth} ${display === true?"d-none":""}`},
    ];
    
    return (
        <>
            <section className={`p-4 p-sm-5 py-5`}>
                <div className={`${styles.topAvatar} d-flex justify-content-center justify-content-md-between px-lg-5`}>
                    {topAvatars.map(avatar => (
                        <div key={avatar.alt}>
                            <Image src={avatar.src} alt={avatar.alt} title={avatar.title} className={`${avatar.className} img-fluid d-lg-block`} />
                        </div>
                    ))}
                </div>
                <div>
                    <div className="text-center m-1 m-sm-2 m-md-5 p-1 p-sm-2 p-md-5">
                        <h3 className="mb-4"><b>Doubting? Hear from others</b></h3>
                        <p className="mb-5">Do you require some help for your project: Conception workshop,<br/>prototyping, marketing strategy, landing page, UX/UI?</p>
                        <Link href={routes.auth.signup} className="btn btn-primary px-5 py-3"> Register Now</Link>
                    </div>
                </div>
                <div className={`${styles.bottomAvatar} d-flex justify-content-center justify-content-md-between px-lg-5`}>
                    {bottomAvatars.map(avatar => (
                        <div key={avatar.title}>
                            <Image src={avatar.src} alt={avatar.alt} title={avatar.title} className={`${avatar.className} img-fluid d-lg-block`}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
