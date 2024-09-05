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

 

export default function Section4(){
    return(
        <>
            <section className={` w-100 p-4 p-sm-5 py-5`}>
                <div className={`${styles.topAvatar} w-100 d-flex justify-content-between px-lg-5`}>
                    <div>
                        <Image src={firstAvatar} alt={`avatar`} title={"I can take care of your pitch"} className="d-block d-lg-none" width={70} height={70}/>
                        <Image src={lgFirstAvatar} alt={`avatar`} className="bigfirst d-none d-lg-block" width={300} height={110}/>
                    </div>
                    <div>
                        <Image src={secondAvatar} alt={`avatar`} title={"I can help marketing strategy"} className="d-block d-lg-none" width={70} height={70}/>
                        <Image src={lgSecondAvatar} alt={`avatar`} className="bigsecond d-none d-lg-block" width={300} height={110}/>
                    </div>
                </div>
                <div>
                    <div className="text-center m-1 m-sm-2 m-md-5 p-1 p-sm-2 p-md-5">
                        <h3 className="mb-4"><b>Doubting? Hear from others</b></h3>
                        <p className="mb-5">Do you require some help for your project: Conception workshop,<br/>prototyping, marketing strategy, landing page, UX/UI?</p>
                        <Link href={routes.auth.signup} className="btn btn-primary px-5 py-3"> Register Now</Link>
                    </div>
                </div>
                <div className={`${styles.bottomAvatar} w-100 d-flex justify-content-between`}>
                    <div>
                        <Image src={thirdAvatar} alt={`avatar`} title={"I can design you website"} className="d-block d-lg-none" width={70} height={70}/>
                        <Image src={lgThirdAvatar} alt={`avatar`} className="bigthird d-none d-lg-block" width={300} height={110}/>
                    </div>
                    <div>
                        <Image src={fourthAvatar} alt={`avatar`} title={"I will define the profile of your users"} className="d-block d-lg-none" width={70} height={70}/>
                        <Image src={lgFourthAvatar} alt={`avatar`} className="bigfourth d-none d-lg-block" width={300} height={110}/>
                    </div>
                    <div>
                        <Image src={fifthAvatar} alt={`avatar`} title={"I can prototype your app"} className="d-block d-lg-none" width={70} height={70}/>
                        <Image src={lgFifthAvatar} alt={`avatar`} className="bigfifth d-none d-lg-block" width={300} height={110}/>
                    </div>
                </div>
            </section>
        </>
    )
}