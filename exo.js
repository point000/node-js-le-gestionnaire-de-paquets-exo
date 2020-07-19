var validator=require('validator');
var tab=new Array("bilao0pipiw","lol0983@gg.com","advoila@bejaia.fr","blablacar07gg");

for(var i=0;i<tab.length;i++){
  if(validator.isEmail(tab[i])) {
      console.log(tab[i]+" :ok");
  }else{
    console.log(tab[i]+" :ko"); 

  }
}