
let ad = document.querySelector("#ad");
let parol = document.querySelector("#pass");
let mail = document.querySelector("#mail");
const btn = document.querySelector("#btn");
const form = document.querySelector("#form");

let obj = {
    ad: "",
    parol: "",
    mail: ""
}


form?.addEventListener("submit",(e)=>{
        e.preventDefault();
})



btn?.addEventListener("click", () => {
        obj.ad = ad.value;
        obj.parol = parol.value;
        obj.mail = mail.value;
        console.log(obj);
        localStorage.setItem("objData",JSON.stringify(obj));
    localStorage.setItem("Istifadecini parolu",parol)
    localStorage.setItem("Istifadecini mailini",mail)
})




let girisAd = document.querySelector("#girisAd");
let girisParol = document.querySelector("#girisPass");
let Girisbtn = document.querySelector("#Girisbtn");

let form1 = document.querySelector("#form1");
let btn5 = document.querySelector(".btn5");


console.log(Girisbtn);
let GirisObj = JSON.parse(localStorage.getItem("objData")) 
console.log(GirisObj);

form1?.addEventListener("submit",(e)=>{
    e.preventDefault();
})

Girisbtn?.addEventListener("click",()=>{
    /* problem yaranir mutleq deyiskene menimsedilmelidi */
    /* girisAd = girisAd.value;
    girisParol = girisParol.value; */

        let yeniAd = girisAd.value;
        let  yeniParol = girisParol.value;
console.log(yeniAd,yeniParol);
    if(yeniAd == GirisObj.ad && yeniParol == GirisObj.parol){
        console.log("Succsess");
        Girisbtn.setAttribute("href","websehifeyegiris.html")
    }else{
        console.log("Parol sehvdir");
        btn5.style.border = "3px solid red"
    }
    
})















