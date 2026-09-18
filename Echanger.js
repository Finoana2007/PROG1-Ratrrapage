function Echanger(T, i, j) {

    let temporaire = T[i];
    T[i] = T[j];
    T[j] = temporaire;

    return T;
}

