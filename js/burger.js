(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-burger-open]'),
    closeModalBtn: document.querySelector('[data-burger-close]'),
    hideModal: document.querySelector('[data-burger-hide]'),
    modal: document.querySelector('[data-order-burger-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.hideModal.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  console.log("test")
})();