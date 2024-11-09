


let user = 'Sizda hozir random sonlar chiqishini boshlaydi';
alert(user);

let number = Math.ceil(Math.random() * 100);


alert(`Random orqali chiqqan son: ${number}`);


let admin = confirm(`Biz random sonni 2 ga ko'paytirib va bo'lmoqchimiz!`);

if (admin) {
    let kopaytirilgan = number * 2;
    let bolingan = number / 2;
    let qoldiq = number % 3;

    
    let random = `Random orqali chiqqan son: ${number} edi\n` +
                 `biz uni 2 ga ko'paytirib ${kopaytirilgan} sonini chiqardik,\n` +
                 `va shu sonni 2 ga bo'lib: ${bolingan} sonini chiqardik,\n` +
                 `va shu sonni 3 ga bo'lgandagi qoldiq: ${qoldiq} sonini chiqardik`;

    
    alert(random);
} else {
    alert("Amal bekor qilindi.");
}

