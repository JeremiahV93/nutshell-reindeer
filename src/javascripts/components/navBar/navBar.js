import auth from '../auth/auth';

import dinoList from '../dinoList/dinoList';

const editDeleteEventListeners = () => {
  $('.editCard').click();
  $('.deleteCard').click();
};

const showEditDelete = () => {
  $('.editCard').removeClass('hide');
  $('.deleteCard').removeClass('hide');
};

const hideEditDelete = () => {
  $('.editCard').addClass('hide');
  $('.deleteCard').addClass('hide');
};

const navBarEventListeners = () => {
  $('.navbar-nav a').click((event) => {
    $('.navbar-nav .active').removeClass('active');
    $(event.target).addClass('active');
  });

  $('#dinosaurs').click(() => {
    dinoList.displayDinos().then(() => {
      const user = auth.getUser();
      if (user !== null) {
        showEditDelete();
        editDeleteEventListeners();
      } else {
        hideEditDelete();
      }
    });
  });
};

export default { navBarEventListeners, showEditDelete, hideEditDelete };