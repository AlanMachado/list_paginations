/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
var myLists = document.getElementsByTagName('ul');
var items = Array.prototype.slice.call(myLists[0].children);
var qtdPages = Math.ceil(items.length/10);

function showPage(e) {
    var page = parseInt(e.currentTarget.innerHTML);
    var showTo = 10 * page;
    var showFrom = showTo - 10;
    items.forEach((item, index) => {
        if(index == showFrom && showFrom < showTo) {
            item.style.display = 'block';
            showFrom++;
        } else {
            item.style.display = 'none';
        }
    });
    if(document.getElementsByClassName('active').length > 0) {
        document.getElementsByClassName('active')[0].classList.remove('active');
    } 
    e.currentTarget.classList.add('active');
}

function appendPageLinks() {
    var div = document.createElement('div');
    div.className = 'pagination';
    var ul = document.createElement('ul');
    var li;
    var link;

    for (let index = 0; index < qtdPages; index++) {
        li = document.createElement('li');
        link = document.createElement('a');
        link.href = '#';
        link.addEventListener('click', showPage);
        link.text = index + 1;
        if (index == 0) {
            link.click();
        }
        li.appendChild(link);
        ul.appendChild(li);
    }
    div.appendChild(ul);
    document.getElementsByClassName('page')[0].appendChild(div);
}

window.onload = appendPageLinks();



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.