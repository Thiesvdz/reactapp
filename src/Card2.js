const Card2 = () => {
    const hallo = () => {
        alert("Hallo, dit is kaart 2")
    }
    return(
        
        <article onClick={hallo}>
            <header>
                <h2>Kaart 2</h2>
            </header>
            <section>
                b
            </section>
        </article>
              
    );
}


export default Card2;
