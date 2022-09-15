import "./Card.css"

const Card = () => {
    const hallo = () => {
        alert("Hallo, dit is kaart 1")
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Kaart 1</h2>
            </header>
            <section>
                a
            </section>
        </article>
              
    );
}


export default Card;
