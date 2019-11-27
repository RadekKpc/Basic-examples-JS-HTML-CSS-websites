
//poczatkowe przepisy
function initialReceipts(){
    chlebDesc = "Zakwas na chleb to nic innego, jak proste połączenie mąki i wody. Przeczytaj, jak krok po kroku, w domowej kuchni wyhodować prosty zakwas na chleb.";
    bulkiDesc = "Proste bułeczki maślane, łatwe i szybkie w pzryogtowaniu. Tradycyjny pyszny polski wypiek.";
    pierogiDesc = "Piergoi są klasyką polskiej kuchni. Nasz przepis przekazywany z pokolenia na pokolenie dodahe temu daniu unikalności.";

    addReceipt("Chleb","img/chleb.jpg",'Składniki: <ul> <li>500g mąki</li> <li>woda</li> <li>ciasto drożdrzowe</li></ul>' + chlebDesc,false);
    addReceipt("Bułki","img/bulki.jpg",'Składniki: <ul> <li>450g mąki przennej</li> <li>woda</li> <li>1 łyżeczka cukru</li><li>masło</li></ul>' + bulkiDesc,false);
    addReceipt("Pierogi","img/pierogi.jpg",'Składniki: <ul> <li>1kg mąki</li> <li>woda</li> <li>ziemniaki</li><li> Dobre chęci :)</li></ul>' + pierogiDesc,false);
}

//ustawia przepisy w szereg
function repiarReceipts(){

    let l =document.querySelectorAll(".przepisy");
    for(let i =0;i<l.length;i++){

            l[i].className = 'przepisy przepis'+ (i%3 + 1);
            console.log(l[i].className = 'przepisy przepis'+ (i%3 + 1));
    }
}

function addReceipt(logo,imageSrc,desc,addButton){

    //heml przepisu
    let i1 = document.createElement('img');
    i1.className ="img_small";
    i1.src =imageSrc;
    let d1 = document.createElement('div');
    d1.appendChild(i1);
    let p1 = document.createElement('div');
    p1.className="head_p";
    let b2 = document.createElement('button');
    b2.className='btn-delete';
    b2.innerHTML="X";
    p1.innerHTML = logo;
    if(addButton){
    p1.appendChild(b2);
    }

    let p2 = document.createElement('div');
    p2.className = "skladniki";
    p2.innerHTML = desc;
    let d2 = document.createElement('div');
    d2.appendChild(p1);
    d2.appendChild(d1);
    d2.appendChild(p2);
    d2.style = "box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);"
    let b = document.createElement('button');
    b.innerHTML= "Więcej";
    b.className = "desc-btn";
    let d3 = document.createElement('div');
    d3.className='przepisy przepis1';
    d3.appendChild(d2);
    d3.appendChild(b);

    d3.childNodes[1].addEventListener("click", () => {
        console.log(d3.childNodes);

        document.querySelectorAll(".przepisy").forEach((rec) => {
            rec.childNodes[0].childNodes[1].childNodes[0].classList.remove("imgAnimation");
            rec.childNodes[0].childNodes[2].classList.remove("descAnimation");
            rec.childNodes[0].childNodes[1].classList.remove("backDescAnimation");
            });

        d3.childNodes[0].childNodes[1].childNodes[0].classList.toggle("imgAnimation");
        d3.childNodes[0].childNodes[2].classList.toggle("descAnimation");
        d3.childNodes[0].childNodes[1].classList.toggle("backDescAnimation");

    });

    b2.addEventListener("click", () => {
        deleteReceipt(d3);
    });

    document.getElementById('a3div').appendChild(d3);

}

function deleteReceipt(node){
    document.getElementById('a3div').removeChild(node);
    repiarReceipts();
}

function formRceipt(){

src=document.getElementById('fzdjecie').value;
desc=document.getElementById('fskladniki').value;
logo=document.getElementById('fnaglowek').value;
let v = validateProps(src,desc,logo);
if(v== 0){
    addReceipt(logo,src,desc,true);
    repiarReceipts();

    document.getElementById('alterForm').style = 'color: green;';
    document.getElementById('alterForm').innerHTML ="Dodano pomyślnie";

    document.getElementById('fzdjecie').value="";
    document.getElementById('fskladniki').value="";
    document.getElementById('fnaglowek').value="";
}
else{
    if(v == 1){
    document.getElementById('alterForm').style = 'color: red;';
    document.getElementById('alterForm').innerHTML ="Wypełnij wszystkei pola";
    }
    if(v == 2){
        document.getElementById('alterForm').style = 'color: red;';
         document.getElementById('alterForm').innerHTML ="Nie porpawny link do zdjęcia";
        document.getElementById('fzdjecie').value="";
    }

}

}

function validateProps(src,desc,logo){
    if(src == '' || desc =='' || logo =='')
    {
        return 1;
    }
    if(!urlIsCorrect(src)){
        return 2;
    }

    return 0;
    //mozna tu dodac lepszą walidacje dodałem tak przykładowo
}
function urlIsCorrect(url) {
    if(url.match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png|jpeg).*/g) === null) return false;
    return true;
}

initialReceipts();
repiarReceipts();


