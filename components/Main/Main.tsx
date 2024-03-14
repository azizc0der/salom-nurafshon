/**
 *
 * @author Azizkhuja Saidrahmonov
 */

import Banners from "@/components/Main/Banners";
import Apartments from "@/components/Main/Apartments";
import Consultation from "@/components/Main/Consultation";

export default function Main() {
    return (
        <div>
            <Banners/>
            <Apartments/>
            <Consultation/>
        </div>
    )
}