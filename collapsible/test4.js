document.querySelectorAll('.topic_button').forEach(button => {
    button.addEventListener('click', () => {
          const items= button.nextElementSibling;            //it will give next element present after button 
          button.classList.toggle('topic_button--active');       // if its topic button class it will toggle it to active class and vice-versa
          if(button.classList.contains('topic_button--active')) {   //if its active then it will set the height of the items
            items.style.maxHeight=content.scrollHeight ;   //it will set the height to the actual height of items
          } else{
            items.style.maxHeight=0;
          }
    });
});