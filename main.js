
arraynomes=[];

function submit(){
var nome1= document.getElementeById("aluno1").value;
var nome2= document.getElementeById("aluno2").value;
var nome3= document.getElementeById("aluno3").value;
var nome4= document.getElementeById("aluno4").value;

  arraynomes.push(nome1);
  arraynomes.push(nome2);
  arraynomes.push(nome3);
  arraynomes.push(nome4);

  console.log(arraynomes)

document.getElementeById("displayname").innerHTML=arraynomes;
document.getElementeById("submitbutton").style.display="none";
document.getElementeById("sortbutton").style.display="inline-block";
}
function sorting(){
   arraynomes.sort();
   console.log(arraynomes);
   document.getElementeById(displayname).innerHTML=arraynomes;
}