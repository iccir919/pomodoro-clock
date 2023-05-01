export default function Clock({ type }) {
    return <>
        <h2 id={`${type}-label`}>{type.toUpperCase()}</h2>
    </>
}