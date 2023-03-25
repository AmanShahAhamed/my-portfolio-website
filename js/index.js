
const humIcon=document.getElementById('humIcon');
const humClose=document.getElementById('btn_close');
const btnConnect=document.getElementById('btn_connect');
const [main]=document.getElementsByClassName('container')
const container=document.getElementsByClassName('heading');
const downloadCsv1=document.getElementById('btn_download_csv')
const downloadCsv2=document.getElementById('btn_download_csv2')
console.log('I am here',container[0].offsetHeight,main.offsetHeight)
container[0].offsetHeight=main.offsetHeight;
humIcon.addEventListener('click',()=>{

    container[0].style.display='inline'
    container[0].style.height=`${main.offsetHeight-100}px`
    humIcon.style.display='none'
    // btnConnect.style.display='none'
})

humClose.addEventListener('click',()=>{
    container[0].style.display='none'
    humIcon.style.display='inline'
})

//when click a link div display will be noe
const anchorTag=document.querySelectorAll('.container nav a')
anchorTag.forEach((link)=>{
    link.addEventListener('click',()=>{
       if(  container[0].style.display!=='none' && humIcon.style.display=='none'){
        container[0].style.display='none'
        humIcon.style.display='inline'
       }
    })
})

document.getElementById('btn_connect').addEventListener('click',()=>{
    window.location='https://www.linkedin.com/in/aman-shah-ahamed-226a2720b';
})

document.getElementById('say_hii').addEventListener('click',()=>{
    document.getElementById("connect").scrollIntoView({ behavior: "smooth" });
})


function downloadCV(){
    const pdfUrl='/static/AmanShahAhamed_Resume.pdf';
    window.location.href = pdfUrl;
}
//email sending
const form = document.getElementById('myform');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
//   const formData = new FormData(myForm);
//   const name = formData.get('name');
//   const email = formData.get('email');
//   const message = formData.get('message');
var data = new FormData(event.target);
var status = document.getElementById("my-form-status");

fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
})

  