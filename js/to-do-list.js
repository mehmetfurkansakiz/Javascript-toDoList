//html sayfasindaki elementler
let btnDOM = document.querySelector("#liveToastBtn")
let taskDOM = document.querySelector("#task")
let listDOM = document.querySelector("#list")
let ulLength = document.getElementsByTagName("li")

//carpi butonlarinin olusturulmasi ve check sistemi
for (let i = 0; i < ulLength.length; i++) {
    let closeButton = document.createElement("Span")
    closeButton.textContent = "\u00D7"
    closeButton.classList.add("close")
    closeButton.onclick = removeButton
    ulLength[i].append(closeButton)
    ulLength[i].onclick = check
}

//eleman ekle fonksiyonunun buton ile cagirilmasi
btnDOM.addEventListener('click', elemanEkle)

//carpiya basilinca maddenin silinmesi icin fonksiyonun cagirilmasi
function removeButton() {
    this.parentElement.remove()
}

//maddelerin tiklaninca isaretlenmesi icin fonksiyonun cagirilmasi
function check() {
    this.classList.toggle("checked")
}

//madde ekleme fonksiyonu
function elemanEkle() {
    if (taskDOM.value == "") {
        $('.error').toast("show")
    }else {
        $('.success').toast("show")

        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM)
        liDOM.innerHTML = task.value
        taskDOM.value = ""

        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close")
        closeButton.onclick = removeButton

        liDOM.append(closeButton)
        liDOM.onclick = check
        listDOM.append(liDOM)
        inputElement.value = ("")
    }
}  