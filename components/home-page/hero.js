import Image from "next/image";

import classes from './hero.module.css';

function Hero() {

    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/elon-musk.jpg' alt='Elon here' width={300} height={300} />
            </div>
            <h1>Hi, I`m Mask</h1>
            <p>
                This blog about all my Big F**king Rockets<br/>
                and something else...
            </p>
        </section>
    )
}

export default Hero