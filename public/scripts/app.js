console.log('Hello Dave...');
console.log(test());
sayName();
result = "Something overwritten"
console.log(result)
// ------------------------- Global Vars --------------------- //

// ------------------------- DOM Elements --------------------- //
const $newContactForm = $('#newContactForm');

// ------------------------- Functions --------------------- //
const handleContactSubmit = (event) => {
  event.preventDefault();
  // const $nameInput = $('#name');
  // console.log('Form submitted');
  // if ($nameInput.val() === '') {
  //   // alert('Name is required')
  //   $nameInput.addClass('input-error');
  //   $nameInput.parent().append(`
  //     <div class="alert alert-danger">Name is required.</div>
  //   `);
  // }
  const $inputs = $('input');
  $inputs.each(function (index, element) {
    // console.log($(this), index);
    // console.log($(this).type)
    // This will require all inputs to have value
    // if ($(element).type !== 'submit' && $(element).val().length === 0) {
    //   $(element).addClass('is-invalid');
    //   $(element).parent().append(`
    //     <div class="invalid-feedback">
    //       ${$(element).attr('name')} is required.
    //     </div>
    //   `);
    // }

    // This only requires Name & Email to have values
    if ($(element).name === 'name' || $(element).name === 'email') {
      $(element).addClass('is-invalid');
      $(element).parent().append(`
        <div class="invalid-feedback">
          ${$(element).attr('name')} is required.
        </div>
      `);
    }
  });
}

// ------------------------ Event Listeners ------------------ //
$newContactForm.on('submit', handleContactSubmit);

// Validate Name Input on Blur
// $('input').on('blur', function(event) {
//   const $nameInput = $('#name');
//   console.log('Blur');
//   if ($nameInput.val() === '') {
//       // alert('Name is required')
//       $nameInput.addClass('input-error');
//       $nameInput.parent().append(`
//         <div class="alert alert-danger">Name is required.</div>
//       `);
//     }
// })


// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
