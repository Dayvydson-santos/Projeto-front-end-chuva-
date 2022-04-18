
 
 var divtexto = document.querySelector(".sessao-3");
 var teste2= document.querySelector(".sessao-3-textos");

 divtexto.addEventListener("click",function(){
     if( teste2.style.height<'125px'){   // MUDAR OS NOMES DA VARIAVEIS
        teste2.style.height='300px'
     }else{
        teste2.style.height='120px'
     }
   })

   function clicar(){
      var sessao4 =document.querySelector('.sessao-4-itens')
      var form=document.querySelector('.formularios-container')
      var topico=document.querySelector('.topico-container')
      topico.style.display='none'
      sessao4.style.display='none'
      form.style.display='block'
   }
   function submit(){
      var form=document.querySelector('.formularios-container')
      var topico=document.querySelector('.topico-container')
      form.style.display='none'
      topico.style.display='block'
   }
   document.querySelector('.simbolo-menu').addEventListener("click",function(){
      
    var menuLateral= document.querySelector(".menu-lateral");
      if(menuLateral.style.display='none'){
         menuLateral.style.display='block'
      }else{
         menuLateral.style.display='none'
      }
    


   })


   



