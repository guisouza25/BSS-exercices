function exibeMultiplosDe3() {
    let i = 0;

    while(i <= 10000) {
        if(i % 3 == 0) {
            console.log(`O numero ${i} é multiplo de 3`);
        }
        i ++;
    }
}

exibeMultiplosDe3()