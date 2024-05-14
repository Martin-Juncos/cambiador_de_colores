const colorPicker = document.getElementById('colorPicker');
const body = document.body;

colorPicker.addEventListener('input', function() {
  body.style.backgroundColor = this.value;
});
