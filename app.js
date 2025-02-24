const generadorDominio = () => {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'small'];
    let noun = ['jogger', 'racoon'];
    for (let p of pronoun)
        for (let a of adj)
            for (let n of noun)

                console.log(p + a + n + `.com`);
}

generadorDominio()