function NombreUn(T) {
    let compteur = 0;

    for (let i = 0; i < T.length; i++) {
        if (T[i] === 1) {
            compteur++;
        }
    }

  return compteur;
}

console.log(NombreUn([1, 0, 1, 1, 0, 1])); 
console.log(NombreUn([0, 0, 0, 0]));
console.log(NombreUn([1, 1, 1, 1, 1]));
console.log(NombreUn([1, 0, 1, 0, 1, 0, 1]));