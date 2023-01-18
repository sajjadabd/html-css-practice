console.log('test...');

let button = document.getElementById('button');


button.addEventListener('click', () => {
  //alert('you clicked the button');
  swal({
    title: "شارژ شد",
    text : "با موفقیت به ثبت رسید",
    icon: "success",
  });
});
