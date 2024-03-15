import ApartmentHome from "./ApartmentHome";
import ApartmentInformation from "./ApartmentInformation";
import ApartmentLocation from "@/components/Apartment/ApartmentLocation";

export default function ApartmentContainer() {
    return (
        <div>
            <ApartmentHome/>
            <ApartmentInformation/>
            <ApartmentLocation/>
        </div>
    )
}