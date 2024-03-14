export default function ApartmentLocation() {
    return (
        <div className={"pt-[50px] sm:pt-[100px]"}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.935065434059!2d69.22705557587338!3d41.28851767131251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf09a1c450d%3A0xdd61cb63304d7803!2sZon.uz!5e0!3m2!1suz!2s!4v1710004613337!5m2!1suz!2s"
                allowFullScreen={true} loading="lazy"
                className={"w-full h-[450px]"}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}