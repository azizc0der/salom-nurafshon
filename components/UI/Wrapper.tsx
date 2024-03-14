/**
 * @author Azizkhuja Saidrahmonov
 */

export default function Wrapper({children}: {children: any}) {
    return (
        <div className={"w-[94%] sm:w-[90%] mx-auto"}>
            {children}
        </div>
    )
}