document.querySelectorAll('.topic_button').forEach(button => {
    button.addEventListener('click', () => {
          const food= button.nextElementSibling;            //it will give next element present after button 
          if(!button.classList.contains('.active')){
            button.classList.add('.active');
            food.classList.add('.active2');
          }else{
            button.classList.remove('.active');
            food.classList.remove('.active2');
          }
    });
});