interface TermsProps{
    title:string,
    description:string
}

export default function TermsConditions({
    title,
    description
}:TermsProps){
    return(
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        </>
    )
}