function Echanger(T, i, j) {

    let temporaire = T[i];
    T[i] = T[j];
    T[j] = temporaire;

    return T;
}

console.log(Echanger([1, 2, 3, 4], 1, 3));
console.log(Echanger([5, 6, 7, 8], 0, 2));
console.log(Echanger([9, 10, 11, 12], 2, 3));
console.log(Echanger([13, 14, 15, 16], 0, 1));