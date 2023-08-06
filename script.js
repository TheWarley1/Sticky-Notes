const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modalWrapper = document.getElementById('modalWrapper');
const saveButton = document.getElementById('saveButton');
const textInput = document.getElementById('textInput');
const successModal = document.getElementById('successModal');

openModalButton.addEventListener('click', () => {
  modalWrapper.classList.remove('hidden');
});

closeModalButton.addEventListener('click', () => {
  modalWrapper.classList.add('hidden');
});

saveButton.addEventListener('click', () => {
  const inputText = textInput.value;
  console.log("You entered: ", inputText);

  modalWrapper.classList.add('hidden');
  showSuccessModal();
});

function showSuccessModal() {
  successModal.classList.remove('hidden');

  // Hide the success modal after 2 seconds (adjust as needed)
  setTimeout(() => {
    successModal.classList.add('hidden');
  }, 3000);
}
