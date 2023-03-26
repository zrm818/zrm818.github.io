var cform = document.getElementById("cform");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var phonenum = document.getElementById("phonenum");
var zip = document.getElementById("zip");
var apt = document.getElementById("aptrequest");

function afterSubmit(e) {
    e.preventDefault();
    
    var info = {
        first: firstName.value,
        last: lastName.value,
        phone: phonenum.value,
        zip: zip.value,
        apt: apt.value,
    }
    
    var url = "https://script.googleusercontent.com/macros/echo?user_content_key=BPZbf4ZXI8QChTxcWb5_or0b2i0NHADwwehV8NbfYevnImmC04oV2KA2zWHfEJ45eAHYv7pCDD1RdCj9nDrk42-46N1Bvq9Tm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAQrZscVQxL298OwAwspajEmkLYxvkXZzZaoPCRbKnKiyeJpN-0hN2hlZFolojELyAJmBpDuXHO5uIqpsae410wkZD7TAjSWxg&lib=MZru0M23Qvf1M4zHCsx854rG3QRRPN2Ds";
    fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(res => {
        console.log(res);
    });
    
}

cform.addEventListener("submit", afterSubmit());