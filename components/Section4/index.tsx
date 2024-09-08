import styles from "./Section4.module.scss";
import routes from "@/routes";
import Link from "next/link";
import Image from "next/image";
import firstAvatar from "@/img/avatar/img1.png";
import lgFirstAvatar from "@/img/avatar/lg-avatar/img1.png";
import secondAvatar from "@/img/avatar/img2.png";
import lgSecondAvatar from "@/img/avatar/lg-avatar/img2.png";
import thirdAvatar from "@/img/avatar/img3.png";
import lgThirdAvatar from "@/img/avatar/lg-avatar/img3.png";
import fourthAvatar from "@/img/avatar/img4.png";
import lgFourthAvatar from "@/img/avatar/lg-avatar/img4.png";
import fifthAvatar from "@/img/avatar/img5.png";
import lgFifthAvatar from "@/img/avatar/lg-avatar/img5.png";

export default function Section4() {
    const topAvatars = [
        {src: firstAvatar, alt: "first avatar", title: "I can take care of your pitch", width: 70, height: 70, largeSrc: lgFirstAvatar, largeWidth: 300, largeHeight: 110, largeClass: styles.lgfirst},
        {src: secondAvatar, alt: "second avatar", title: "I can help marketing strategy", width: 70, height: 70, largeSrc: lgSecondAvatar, largeWidth: 300, largeHeight: 110, largeClass: styles.lgsecond},
    ];
    
    const bottomAvatars = [
        {src: thirdAvatar, alt: "third avatar", title: "I can design you website", width: 70, height: 70, largeSrc: lgThirdAvatar, largeWidth: 300, largeHeight: 110, largeClass: styles.lgthird},
        {src: fourthAvatar, alt: "fourth avatar", title: "I will define the profile of your users", width: 70, height: 70, largeSrc: lgFourthAvatar, largeWidth: 300, largeHeight: 110, largeClass: styles.lgfourth},
        {src: fifthAvatar, alt: "fifth avatar", title: "I can prototype your app", width: 70, height: 70, largeSrc: lgFifthAvatar, largeWidth: 300, largeHeight: 110, largeClass: styles.lgfifth},
    ];
    
    return (
        <>
            <section className={`p-4 p-sm-5 py-5`}>
                <div className={`${styles.topAvatar} d-flex justify-content-between px-lg-5`}>
                    {topAvatars.map(avatar => (
                        <div key={avatar.alt}>
                            <Image src={avatar.src} alt={avatar.alt} title={avatar.title} className="d-block d-lg-none" width={avatar.width} height={avatar.height}/>
                            <Image src={avatar.largeSrc} alt={avatar.alt} title={avatar.title} className={`${avatar.largeClass} d-none d-lg-block`} width={avatar.largeWidth} height={avatar.largeHeight}/>
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
                <div className={`${styles.bottomAvatar} d-flex justify-content-between`}>
                    {bottomAvatars.map(avatar => (
                        <div key={avatar.title}>
                            <Image src={avatar.src} alt={avatar.alt} title={avatar.title} className="d-block d-lg-none" width={avatar.width} height={avatar.height}/>
                            <Image src={avatar.largeSrc} alt={avatar.alt} title={avatar.title} className={`${avatar.largeClass} d-none d-lg-block`} width={avatar.largeWidth} height={avatar.largeHeight}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}