// Get the Modal
var modal = document.getElementById('simpleModal');

// Get open Modal button
var modalBtn = document.getElementById('modalBtn');

// Listen for a Click
modalBtn.addEventListener('click', openModal);

// Outside/Window Click to close
window.addEventListener('click', outside);

// Function to open simpleModal
function openModal(){
  modal.style.display = 'block';
}

function outside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
