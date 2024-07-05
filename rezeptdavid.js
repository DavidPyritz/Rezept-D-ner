function pushme() {
    let knockout = document.getElementById('knockout').value;
    let s = 1;
    let together7 = s * knockout;
    let x = 1;
    let together = x * knockout;
    let y = 500;
    let together2 = y * knockout;
    let z = 0.25;
    let together3 = z * knockout;
    let t = 200;
    let together4 = t * knockout;
    let d = 2;
    let together5 = d * knockout;
    let g = 1;
    let together6 = g * knockout;

    document.getElementById('Menge1').innerHTML = `
<table id=Menge1>
<tr>
<td>${together} Fladenbrot(e)</td>
</tr>
<tr>
<td>${together2} gr Rind / Huhn</td>
</tr>
<tr>
<td>${together3} Zwiebel(n)</td>
</tr>
<tr>
<td>${together4} gr Rotkohl</td>
</tr>
<tr>
<td>${together5} El Joghurt</td>
</tr>
<tr>
<td>${together6} Prise(n) Salz</td>
</tr>
</table>
    `;
}