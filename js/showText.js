const $d = document;

export function showText (img,paragraph,text, bold){

    $d.addEventListener('click',(e)=>{

        if(e.target.matches(img)){
            $d.querySelector(img).classList.toggle('card__arrow-active');
            $d.querySelector(bold).classList.toggle('card__bold');
        }
        else{
            $d.querySelector(img).classList.remove('card__arrow-active');
            $d.querySelector(bold).classList.remove('card__bold');
        }

        if(e.target.matches(img)){
            $d.querySelector(paragraph).textContent = text
        }
        else{
            $d.querySelector(paragraph).textContent = null;
        }
        if(!e.target.matches(img)){
            $d.querySelector(paragraph).textContent = null;
        }
    });


}

export function hideText(img,paragraph){
    document.addEventListener('click',(e)=>{
        if(!e.target.matches(img)){
            $d.querySelector(paragraph).textContent = null;
        }
    })
}







