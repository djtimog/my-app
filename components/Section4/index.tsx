import styles from "./Section4.module.scss";
import routes from "@/routes";
import Link from "next/link";
import Image from "next/image";

const topAvatars = [
    {src: "/img/avatar/img1.png", alt: "avatar", title: "I can take care of your pitch", width: 70, height: 70, largeSrc: "/img/avatar/lg-avatar/img1.png", largeWidth: 300, largeHeight: 110, largeClass: styles.lgFirst},
    {src: "/img/avatar/img2.png", alt: "avatar", title: "I can help marketing strategy", width: 70, height: 70, largeSrc: "/img/avatar/lg-avatar/img2.png", largeWidth: 300, largeHeight: 110, largeClass: styles.lgSecond},
];

const bottomAvatars = [
    {src: "/img/avatar/img3.png", alt: "avatar", title: "I can design you website", width: 70, height: 70, largeSrc: "/img/avatar/lg-avatar/img3.png", largeWidth: 300, largeHeight: 110, largeClass: styles.lgThird},
    {src: "/img/avatar/img4.png", alt: "avatar", title: "I will define the profile of your users", width: 70, height: 70, largeSrc: "/img/avatar/lg-avatar/img4.png", largeWidth: 300, largeHeight: 110, largeClass: styles.lgFourth},
    {src: "/img/avatar/img5.png", alt: "avatar", title: "I can prototype your app", width: 70, height: 70, largeSrc: "/img/avatar/lg-avatar/img5.png", largeWidth: 300, largeHeight: 110, largeClass: styles.lgFifth},
];

export default function Section4() {
    return (
        <>
            <section className={`p-4 p-sm-5 py-5`}>
                <div className={`${styles.topAvatar} d-flex justify-content-between px-lg-5`}>
                    {topAvatars.map(avatar => (
                        <div key={avatar.src}>
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
                        <div key={avatar.src}>
                            <Image src={avatar.src} alt={avatar.alt} title={avatar.title} className="d-block d-lg-none" width={avatar.width} height={avatar.height}/>
                            <Image src={avatar.largeSrc} alt={avatar.alt} title={avatar.title} className={`${avatar.largeClass} d-none d-lg-block`} width={avatar.largeWidth} height={avatar.largeHeight}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}