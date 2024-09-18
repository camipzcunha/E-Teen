import Header from "../../Components/Header";
import HeaderLogin from "../../Components/HeaderLogin";
import Hero from "../../Components/Hero";

export default function HomePage({login}){
    return(
        <>
            {login.logado 
            ?<HeaderLogin/>
            :<Header/>}
            <Hero/>
        </>
    )
}