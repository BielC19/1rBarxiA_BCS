//links
const a1 = 'índex'
const a2 = 'aproximació a la solució'
const a3 = 'beneficis'
const a4 = 'col·laboració'
const a5 = 'ganxo'
const a6 = 'necessitat'
const a7 = 'contacte'
const dicA = [0, a1, a2, a3, a4, a5, a6, a7]
const lletres = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const lletres2 = ['r1','r2','r3','r4','r5','r6','r7','r8','r9','r0','r11','r12'];

const noFuncinen = ['r2','r3','r5']

const url = window.parent.location.pathname;
console.log(url)

window.onload = function() {
    for (let i = 6; i >= 1; i--) {
        let elementNul = document.querySelector('ul');
        let nouli = document.createElement('li');
        nouli.setAttribute('id', lletres[i])
        nouli.setAttribute('class', 'licss')
        elementNul.prepend(nouli);
        
        let elementNLi = document.getElementById(lletres[i]);
        let nouA = document.createElement('a');

        nouA.setAttribute('id', lletres2[i])
        nouA.setAttribute('target', '_top');
        nouA.setAttribute('href', dicA[i]);
        nouA.innerHTML = dicA[i];
        if (url === '/1rBarxiA_BCS/BigData/webb/' + dicA[i]) {
            nouA.setAttribute('class', 'actiu')
        }


        elementNLi.prepend(nouA);
    }
        if (url === '/1rBarxiA_BCS/BigData/webb/%C3%ADndex') {
            document.getElementById(noFuncinen[0]).className = 'actiu'
        }
        else if (url === '/1rBarxiA_BCS/BigData/webb/aproximaci%C3%B3%20a%20la%20soluci%C3%B3') {
            document.getElementById(noFuncinen[1]).className = 'actiu'
        }
        else if (url === '/1rBarxiA_BCS/BigData/webb/col%C2%B7laboraci%C3%B3') {
            document.getElementById(noFuncinen[2]).className = 'actiu'
        }
}