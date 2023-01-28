let p1 = {
    tekst: 'Koliko članova je imala družina prstena?',
    odgovori: [7, 8, 9, 10],
    index: 2
};

let p2 = {
    tekst: 'Koliko je bilo prstenova moći?',
    odgovori: [10, 20, 18, 9],
    index: 1
};

let p3 = {
    tekst: 'Koliko je bilo Nazgula?',
    odgovori: [7, 9, 10, 11],
    index: 1
};

let p4 = {
    tekst: 'Kako se zvala kula u Mordoru?',
    odgovori: ['Ozgilijat', 'Ortank', 'Erebor', 'Barad-Dur'],
    index: 3
};

let p5 = {
    tekst: 'Koji je čarobnjak bio Gandalf?',
    odgovori: ['sivi', 'braon', 'beli', 'plavi'],
    index: 0
};

let p6 = {
    tekst: 'Ko je odsekao prsten sa ruke Sauronu?',
    odgovori: ['Elendil', 'Elrond', 'Izildur', 'Aragorn'],
    index: 2
};

let p7 = {
    tekst: 'Kako se zvao Boromirov otac?',
    odgovori: ['Faramir', 'Teoden', 'Aratorn' ,'Denetor'],
    index: 3
};

let p8 = {
    tekst: 'Koliko puta se u filmu Gospodar prstenova pojavljuju orlovi?',
    odgovori: [1, 2, 3, 4],
    index: 1
};

let p9 = {
    tekst: 'Ko je ubio vešca kralja od Angmara?',
    odgovori: ['Eoven', 'Meri', 'Gandalf', 'Legolas'],
    index: 0
};

let p10 = {
    tekst: 'Kako se zove krčma u kojoj je Frodo trebao da se nadje sa Gandalfom?',
    odgovori: ['Zeleni zmaj', 'Bri', 'Propinjući poni', 'Magična bundeva'],
    index: 2
};

let p11 = {
    tekst: 'Protiv koga se Gandalf borio na mostu Kazad-duma?',
    odgovori: ['Gotmoga', 'Balroga', 'Nazgula', 'Selob'],
    index: 1
};

let p12 = {
    tekst: 'Kako se zvao Aragornov mač koji mu je Elrond iskovao?',
    odgovori: ['Narsil', 'Silmaril', 'Anduin', 'Anduril'],
    index: 3
};

let pitanja = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];


let permutiraj = (nizPitanja) => {
    let n = nizPitanja.length;
    for(let i = n - 1; i  > 0; i--){

        let r = Math.floor(Math.random() * (i + 1));

        let t = nizPitanja[i];
        nizPitanja[i] = nizPitanja[r];
        nizPitanja[r] = t;
    }

}

permutiraj(pitanja);

let divForma = document.createElement('div');
document.body.appendChild(divForma);
divForma.classList.add('pozicioniranje');

let kreirajFormuPitanja = (pitanja) => {
    let forma = document.createElement('form');
    divForma.appendChild(forma);


    for(let i = 1; i <= 5; i++){

        let divKartica = document.createElement('div');
        forma.appendChild(divKartica);
        divKartica.classList.add('kartica')

        let pitanje = document.createElement('p');
        divKartica.appendChild(pitanje);
        pitanje.classList.add('pitanje')
            

        pitanje.innerHTML += `${[i]}. ${pitanja[i].tekst}`;

        let divOdgovori = document.createElement('div');
        divKartica.appendChild(divOdgovori);

        let listaOdgovori = document.createElement('ul');
        divOdgovori.appendChild(listaOdgovori);

        let nizOdgovora = pitanja[i].odgovori;

        let prviRadio = true;
        
        nizOdgovora.forEach((odgovor, index) =>{
            let elListeOdgovor = document.createElement('li');
            listaOdgovori.appendChild(elListeOdgovor);

            let inputRadio = document.createElement('input');
            inputRadio.type = 'radio';
            inputRadio.name = 'odgovori' + i;
            inputRadio.value = index;
            inputRadio.style.accentColor = 'orange'

            let spanOdgovor = document.createElement('span');

            spanOdgovor.innerHTML = odgovor; 

            elListeOdgovor.appendChild(inputRadio);
            elListeOdgovor.appendChild(spanOdgovor);

            if(prviRadio){
                inputRadio.checked = true;
                prviRadio = false;
            }

        })
            
    }

    return forma;
};

let forma = kreirajFormuPitanja(pitanja);

let divDugmici = document.createElement('div')
document.body.appendChild(divDugmici);
divDugmici.classList.add('dugmici')

let kreirajDugmePosalji = () => {
    let btnPosalji = document.createElement('input');
    btnPosalji.type = 'button'
    btnPosalji.value = 'Pošalji';
    divDugmici.appendChild(btnPosalji);

    btnPosalji.classList.add('posalji')

    return btnPosalji;
}

let btnPosalji = kreirajDugmePosalji(forma);

let kreirajDugmeNovaPitanja = () => {
    let btnNovaPitanja = document.createElement('input');
    btnNovaPitanja.type = 'button';
    btnNovaPitanja.value = 'Nova pitanja'
    divDugmici.appendChild(btnNovaPitanja);

    btnNovaPitanja.classList.add('novaPitanja')

    return btnNovaPitanja;
}

let btnNovaPitanja = kreirajDugmeNovaPitanja(forma);



let divResenja = document.createElement('div');
document.body.appendChild(divResenja);
divResenja.classList.add('resenja')

btnPosalji.addEventListener('click', () => {
    divResenja.innerHTML = '';
    for(let i = 1; i <= 5; i++){
        let odgovori = document.querySelectorAll(`input[name = "odgovori${i}"]`);

        odgovori.forEach(odgovor => {
            odgovor.disabled = true;
            if(odgovor.checked){
                let paragrafResenja = document.createElement('p');
                divResenja.appendChild(paragrafResenja);

                if(odgovor.value == pitanja[i].index){
                    paragrafResenja.innerHTML = `Tačno ste odgovorili na ${i}. pitanje`;
                    paragrafResenja.style.color = 'orange';
                    //promenila sam boje u odnosu na tekst zadatka, vise mi se uklapa u stil
                }
                else{
                    paragrafResenja.innerHTML = `Niste tačno odgovorili na ${i}. pitanje`;
                    paragrafResenja.style.color = 'white';
                }
            }
        })
        
    }
})

btnNovaPitanja.addEventListener('click', () => {
    permutiraj(pitanja);
    let novaForma = kreirajFormuPitanja(pitanja);
    divForma.replaceChild(novaForma, forma);
    forma = novaForma;

    divResenja.innerHTML = '';
})


    

    
    



