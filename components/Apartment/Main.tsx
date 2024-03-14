import Apartment from "./Apartment";
import ApartmentInformation from "./ApartmentInformation";
import ApartmentLocation from "@/components/Apartment/ApartmentLocation";

export default function Main() {
    return (
        <div>
            <Apartment/>
            <ApartmentInformation/>
            <ApartmentLocation/>
        </div>
    )
}