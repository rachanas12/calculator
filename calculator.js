function calculator(){
    let screen=document.querySelector('#display')
    let buttons=document.querySelectorAll('.btn')
    let equal=document.querySelector('.equal')
    let clear=document.querySelector('.clear')
    let del=document.querySelector('.del')

    buttons.forEach(function(button) {
        button.addEventListener('click',(e)=> {
        let number = e.target.dataset.num;
        screen.value += number;
      })  
    })
    clear.addEventListener("click",()=>{
        screen.value="";  
    })

    equal.addEventListener("click",()=>{
        if(screen.value===""){
            screen.value="";
        }else{
          let ans=eval(screen.value)
          screen.value=ans;
        }
    })
    


}calculator()