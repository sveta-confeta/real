//сайтбар на мобильном устройстве


const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon=document.querySelector('.menu-icon');
const sidebar=document.querySelector('.sidebar');



//клик по кнопке для скрытия/показа фильтра
sidebarToggleBtn.onclick =function(){

    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar_mobile-active');
};

//показать еще 3 карточки
const showMore=document.querySelector('.show_more');   //кнопка "показать еще"
const hiddenCards=document.querySelectorAll('.hidden_cards');
//клик по кнопке и показ трех скрытых карточек:

showMore.addEventListener('click',function(){   //перебираем карточки с добавленным к ним классом 
    // hidden_cards
hiddenCards.forEach(function(card){
    card.classList.remove('hidden_cards');
})
});

//реализуем сворачивание списков в сайтбаре

const widgets=document.querySelectorAll('.widget');

//находим все виджеты на странице
widgets.forEach(function(widget){

    //слушаем клик внутри виджета
    widget.addEventListener('click',function(event){

        //если клик по заголовку скрываем/показываем теле виджета
        if(event.target.classList.contains('widget_title')){
            event.target.classList.toggle('widget_title-active');
            event.target.nextElementSibling.classList.toggle('widget_body-hidden');
        }
    });
});   

/* кнопка Любая */

const checkBoxAny=document.querySelector('#location-05');
const topLocationCheckboxes=document.querySelectorAll('[data-location-param]');


//Выбор кнопки любая и отключение других чекбоксов
checkBoxAny.addEventListener('change',function(){ //change-как только кнопка будет изменять свое событие,что то должно происходить
   if(checkBoxAny.checked){
   topLocationCheckboxes.forEach(function(elem){
       elem.checked=false;
   });
   
   }
})
//клик по другим кнопкам в location ,отключаем кнопку любая при выборе других параметоров
topLocationCheckboxes.forEach(function(elem){
    elem.addEventListener('change',function(){
     if(checkBoxAny.checked){
        checkBoxAny.checked=false;
     }
    })
});

//показать еще 3 дополнительные опции в фильтре

const showMoreOptions=document.querySelector('.widget_show-hidden');
const checkboxHidden=document.querySelectorAll('.checkbox_hidden');


showMoreOptions.onclick=function(){
    checkboxHidden.forEach(function(item){
        item.classList.remove('checkbox_hidden'); //по клику удаляем класс checkbox_hidden с дисплей нон и дополнительные элементы становятся видимыми
    })
    showMoreOptions.remove(); //а саму кнопку .показать еще. скрываем за ненадобностью
}