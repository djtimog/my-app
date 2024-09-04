import routes from "@/routes";
import Link from "next/link";

export default function Section5(){
    return(
        <>
            <div className="mt-3">
                <div className="mb-5">
                    <h3><b>What do we sell?</b></h3>
                    <p>We promote the learning of INTERNATIONAL LANGUAGES AND INDIGENOUS LANGUAGES</p>
                </div>
                <div className="row mb-5">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <p> <b> INTERNATIONAL LANCUACES: </b> <br /> FRENCH,CERMAN,SPANISH AND CHINESE <br /> -For business,education or leisure purposes</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p> <b> INDICENOUS LANCUACES: VORUBA,ICBO <br /> AND HAUSA </b> <br /> Learning indigenous language helps the learner <br /> to connect to n s or her root</p>
                    </div>
                </div>
                <div className="mb-4">
                    <p><b>OUR VIRTUAL CLASS</b><br/> STUDENTS LEARN FROM THE COMFORT OF THEIR HOMES <br/> Our online education platform is a fully functional learning place,it is simple,unique and interactive. <br/> Our teachers are extremely highly rated</p>
                </div>
                <div>
                    <Link href={routes.auth.signup} className="btn bg-secondary px-5 py-2 shadow">Learn more</Link>
                </div>
            </div>
        </>
    );
}