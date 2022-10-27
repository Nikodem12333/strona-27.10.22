const btnWyslij = document.getElementById('btnWyslij');
const btnReset = document.getElementById('btnReset');
const Tab = [];

function formWWW () {
  console.log("ssdsds")
  let imie = document.getElementById("id-name").value;
  let nazwisko = document.getElementById("id-lastName").value;
  let email = document.getElementById("id-email").value;
  let haslo = document.getElementById("id-password").value;
  let szkola = document.getElementById("id-school").value;
  let komentarz = document.getElementById("id-comments").value;
  let wiek = document.querySelector("input[name='wiek']:checked").value;
  let miejsce = document.getElementsByName("miejsce");
  let TabMiejsce = [];
  for (var i=0; i<miejsce.length;i++){
    if (miejsce[i].checked) {
      TabMiejsce.push(miejsce[i].value);
    }
  }

  const wpis = {
    imie: imie,
    nazwisko: nazwisko,
    email: email,
    haslo: haslo,
    szkola: szkola,
    komentarz: komentarz,
    wiek: wiek,
    miejsce:TabMiejsce
  }
  console.log(wpis);
  Tab.push(wpis);
  console.log(Tab);
  let nowy = document.createElement("div")
  let daneZformularza = document.getElementById('id-info');
  for (var i=0; i<Tab.length; i++){

    daneZformularza.appendChild(nowy);
    nowy.innerHTML = Tab[i].imie+" "+Tab[i].nazwisko+" "+Tab[i].wiek+" "+Tab[i].komentarz;
    }
};


function resetForm () {
  let imie = document.getElementById("id-name").value;
  let nazwisko = document.getElementById("id-lastName").value;
  let email = document.getElementById("id-email").value;
  let haslo = document.getElementById("id-password").value;

  let komentarz = document.getElementById("id-comments").value;

  imie.innerHTML = ""
  nazwisko.innerHTML = ""
  email.innerHTML = ""
  haslo.innerHTML = ""
  komentarz.innerHTML = ""
};

btnWyslij.addEventListener("click", formWWW, false);
btnReset.addEventListener("click", resetForm, false);