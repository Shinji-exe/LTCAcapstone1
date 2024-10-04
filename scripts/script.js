// const myToastNotify = document.querySelector(".toast")
// const toastBut = document.querySelector("#toast-button")
// const spinnerScreen = document.querySelector(".spinner-wrapper")

// if(toastBut){
// toastBut.addEventListener('click', function(){
//     const myToastNotifications = new bootstrap.Toast(myToastNotify)
//     myToastNotifications.show()
    
// })
// }
    

// window.addEventListener('load', function(e) {
// spinnerScreen.style.opacity = "0";

// setTimeout(() => {
//     spinnerScreen.style.display = "none"
    
// }, 1000)
// })

const disappear = document.getElementById("off")
const gone = document.getElementById("cardcontain")

disappear.addEventListener("click" , function(){
    if(disappear){
        gone.style.display = "none"
    }
})


setTimeout(() => {
    myToastNotifications.show()
},1000)


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

