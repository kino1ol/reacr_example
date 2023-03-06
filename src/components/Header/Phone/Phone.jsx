export default function Phone({ tel }) {
    const numberPhone = '+375291234567'
    const href = tel + numberPhone

    return (
        <a href={href}>{numberPhone}</a>
    )
}