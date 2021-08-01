// Get the Modal
var modal = document.getElementById('simpleModal');

// Get open Modal button
var modalBtn = document.getElementById('modalBtn');

// Get the closeBtn
var closeBtn = document.getElementById('closeBtn');

// Listen for a Click
modalBtn.addEventListener('click', openModal);

// Listen for close btn click
closeBtn.addEventListener('click', closeModal);

// Outside/Window Click to close
window.addEventListener('click', outside);

// Function to open simpleModal
function openModal(){
  modal.style.display = 'block';
}

// When user clicks the closeBtn
function closeModal(){
  modal.style.display = 'none';
}

// When User Cliks Outside the boc
function outside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
