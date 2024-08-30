let listaCumparaturi = ["cocos", "avocado", "oua", "castraveti", "morcov"];

// part 1
const sorteazaAlfabetic = () => {
  console.log(listaCumparaturi.sort());
  return listaCumparaturi;
};
sorteazaAlfabetic();

// // part 2

const cautaProdus = (produs) => {
  const index = listaCumparaturi.indexOf(produs);
  if (index !== -1) {
    console.log(`Produsul ${produs} se afla la indicele ${index}`);
  } else {
    console.log(`Produsul ${produs} nu a fost gasit!`);
  }
};
cautaProdus("peste");

// // part 3

const adaugaProdus = (produs) => {
  if (!listaCumparaturi.includes(produs)) {
    listaCumparaturi.push(produs);
    console.log(`Produsul ${produs} a fost adaugat in lista.`);
  } else {
    console.log(`Produsul ${produs} este deja in lista`);
  }
};

adaugaProdus("mazare");
console.log(listaCumparaturi);

// part 4, elimina produs
const eliminaProdus = (produs) => {
  const index = listaCumparaturi.indexOf(produs);
  if (index !== -1) {
    listaCumparaturi.splice(index, 1);
    console.log(`Produsul: ${produs} a fost eliminat din lista.`);
  } else {
    console.log(`Produsul: ${produs} nu a fost gasit in lista.`);
  }
};

eliminaProdus("oua");
console.log(listaCumparaturi);

console.log(
  `Lista finala a sirului este: ${listaCumparaturi}, si are lungimea de ${listaCumparaturi.length}.`
);
