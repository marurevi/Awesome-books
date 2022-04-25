const listBtn = document.getElementById('list');
const listDisplay = document.getElementById('listsection');
const addNewBtn = document.getElementById('addNew');
const addNewDisplay = document.getElementById('addnewsection');
const contactBtn = document.getElementById('contact');
const contactDisplay = document.getElementById('contactsection');

const hidepages = (event) => {
  switch (event.target.id) {
    case 'list':
      if (!addNewDisplay.classList.contains('hidden')) addNewDisplay.classList.add('hidden');
      if (!contactDisplay.classList.contains('hidden')) contactDisplay.classList.add('hidden');
      if (listDisplay.classList.contains('hidden')) listDisplay.classList.remove('hidden');
      if (!listBtn.classList.contains('rightmenuSelected')) listBtn.classList.add('rightmenuSelected');
      if (addNewBtn.classList.contains('rightmenuSelected')) addNewBtn.classList.remove('rightmenuSelected');
      if (contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.remove('rightmenuSelected');
      break;

    case 'addNew':
      if (!listDisplay.classList.contains('hidden')) listDisplay.classList.add('hidden');
      if (!contactDisplay.classList.contains('hidden')) contactDisplay.classList.add('hidden');
      if (addNewDisplay.classList.contains('hidden')) addNewDisplay.classList.remove('hidden');
      if (!addNewBtn.classList.contains('rightmenuSelected')) addNewBtn.classList.add('rightmenuSelected');
      if (listBtn.classList.contains('rightmenuSelected')) listBtn.classList.remove('rightmenuSelected');
      if (contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.remove('rightmenuSelected');
      break;

    case 'contact':
      if (!listDisplay.classList.contains('hidden')) listDisplay.classList.add('hidden');
      if (!addNewDisplay.classList.contains('hidden')) addNewDisplay.classList.add('hidden');
      if (contactDisplay.classList.contains('hidden')) contactDisplay.classList.remove('hidden');
      if (!contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.add('rightmenuSelected');
      if (listBtn.classList.contains('rightmenuSelected')) listBtn.classList.remove('rightmenuSelected');
      if (addNewBtn.classList.contains('rightmenuSelected')) addNewBtn.classList.remove('rightmenuSelected');
      break;
    default:
      break;
  }
};

export default hidepages;