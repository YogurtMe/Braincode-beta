// #####-|-NAVBAR-|-#####

let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let menuMore = document.getElementById('menu-more');
let body = document.getElement

let temp = 0;
let toggleMenu = ()=>{
    menuMore.classList.toggle('active');
    
    if(temp == 0){
        document.body.style.overflow = 'hidden';
        nav.style.backgroundImage = 'none';
        temp = 1;
    }else{
        document.body.style.overflow = 'auto';
        nav.style.backgroundImage = 'linear-gradient(rgb(0,7,51), transparent)';
        temp = 0;
    }
}

menu.addEventListener('click', ()=>{toggleMenu();});
menuMore.addEventListener('click', ()=>{toggleMenu();});










// #####-|-SCROLL-BUTTON-|-#####

let goToScroll = (id, pers)=>{
    window.addEventListener('load', () => {
        const el = document.getElementById(id);
        el.scrollLeft = el.scrollWidth * (pers/100); // untuk scroll horizontal
    });
}
goToScroll("learnP", 30);
goToScroll("inventorP", 30);
goToScroll("whyP", 30);

let nextScroll = (id, sum)=>{
    const el = document.getElementById(id);
    el.scrollBy({ left:sum, behavior:"smooth"});
};

let tglElem = (id, cl)=>{
    const el = document.getElementById(id);
    el.classList.toggle(cl);
};








// #####-|-ADD-CHAPTER-|-ADD-MATERI-|-#####

let addCh = (id, judul, desk, chId)=>{
    const parent = document.getElementById(id);
    parent.insertAdjacentHTML("beforeend",
    `
    <div class="item fadeInline">
      <div class="materi-parent" id="${chId}">
        <div class="ch-header">
          <h1 class="txt-bgb">${judul}</h1>
          <p class="txt-bgb">${desk}</p>
        </div>
      </div>
    </div>
    `);
}

let addMateri = (chId, judul, desk, matLink)=>{
    const parent = document.getElementById(chId);
    parent.insertAdjacentHTML("beforeend",
    `
    <div class="materi">
      <div class="icon"></div>
      <div class="explan">
        <h1 class="txt-wth">${judul}</h1>
        <p class="txt-wth">${desk}</p>
        <a class="txt-wth" onclick="selectMat('${matLink}')" href="materi.html">Pelajari</a>
      </div>
    </div>
    `);
}
/*tempat menambahkan materi*/
let addChMat = ()=>{
    addCh("js-chP","chapter 1","acumalaka acumalaka","js-ch1");/*acumalaka deskripsi singkat, js-ch1 untuk id baru untuk chapter, */
    addMateri("js-ch1","output","console.log pada javascript","js-mat-1");
    addMateri("js-ch1","looping","macam macam loop pada javascript","js-mat-2");
    addMateri("js-ch1","pengenalan","kenali javascript lebih dalam");
    addMateri("js-ch1","pengenalan","kenali javascript lebih dalam");
    
    addCh("js-chP","chapter 2","cuakk","js-ch2");
    addMateri("js-ch2","output","console.log pada javascript","js-mat-2");
    addMateri("js-ch2","output","console.log pada javascript","js-mat-3");
    
    addCh("cpp-chP","chapter 1","acumalaka acumalaka","cpp-ch1");
    
    
    
    addMateri("cpp-ch1","pengenalan","kenali c++ lebih dalam");
    addMateri("cpp-ch1","pengenalan","kenali c++ lebih dalam");
    addMateri("cpp-ch1","pengenalan","kenali c++ lebih dalam");
    addMateri("cpp-ch1","pengenalan","kenali c++ lebih dalam");

    addCh("py-chP","chapter 1","Pengenalan","py-ch1");
    addMateri("py-ch1","Definisi","Apa itu Python? yuk kita cari tahu.", "py-mat-1");
    addMateri("py-ch1","Sejarah","Bagaimana sih sejarah python?", "py-mat-2");
    addMateri("py-ch1","Pengenalan"," cara instalasi python diandroid", "py-mat-3");
    addMateri("py-ch1","pengenalan","kenali python lebih dalam", "py-mat-4");
    addMateri("py-ch1","pengenalan","kenali python lebih dalam", "py-mat-5");
    
    addCh("py-chP","chapter 2","Fundamental Python: Aturan dan Penulisan Kode","py-ch2");
    addMateri("py-ch2","Menulis kode program","ayo pelajari cara penulisan programnya", "py-mat-6");
    addMateri("py-ch2","Case Sensitive","kenali python lebih dalam", "py-mat-7");
    addMateri("py-ch2","Identation","kenali python lebih dalam", "py-mat-8");
    addMateri("py-ch2","Definisi Variabel","Apa itu Variabel pada Python? yuk kita pelajari", "py-mat-9");
    addMateri("py-ch2","Pengenalan Variabel","kenali python lebih dalam", "py-mat-10");
    addMateri("py-ch2","Syarat penulisan","Ada aturan penulisan code python", "py-mat-11");
    addMateri("py-ch2","Sifat-sifat","Yuk kita cari tahu tentang sifat-sifatnya", "py-mat-12");
    addMateri("py-ch2","Assignment Operator","kenali python lebih dalam", "py-mat-13");
    addMateri("py-ch2","Fungsi Print","kenali python lebih dalam", "py-mat-14");
    addMateri("py-ch2","Pengerjaan Dengan Penggunaan String","kenali python lebih dalam", "py-mat-15");
    addMateri("py-ch2","Cara penggunaan Format","kenali python lebih dalam", "py-mat-16");
    addMateri("py-ch2","Penggunaan Dengan Tipe Data Numerik","kenali python lebih dalam", "py-mat-17");
    
    addCh("py-chP","chapter 3","Operator Python","py-ch3");
    addMateri("py-ch3","pengenalan","kenali python lebih dalam", "py-mat-18");
     addMateri("py-ch3","pengenalan","kenali python lebih dalam");
     addMateri("py-ch3","pengenalan","kenali python lebih dalam");
     addMateri("py-ch3","pengenalan","kenali python lebih dalam");
     addMateri("py-ch3","pengenalan","kenali python lebih dalam");
    
    
    addCh("py-chP","chapter 4","Python ah ah","py-ch4");
    addMateri("py-ch4","pengenalan","kenali python lebih dalam");
     addMateri("py-ch4","pengenalan","kenali python lebih dalam");
     addMateri("py-ch4","pengenalan","kenali python lebih dalam");
     addMateri("py-ch4","pengenalan","kenali python lebih dalam");
     addMateri("py-ch4","pengenalan","kenali python lebih dalam");
    
    
    addCh("py-chP","chapter 5","Python ah ah","py-ch5");
    addMateri("py-ch5","pengenalan","kenali python lebih dalam");
     addMateri("py-ch5","pengenalan","kenali python lebih dalam");
     addMateri("py-ch5","pengenalan","kenali python lebih dalam");
     addMateri("py-ch5","pengenalan","kenali python lebih dalam");
     addMateri("py-ch5","pengenalan","kenali python lebih dalam");
}










// #####-|-CHAPTER-SELECTION-|-#####

let chArr = [
document.getElementById("js-ch-list"),
document.getElementById("py-ch-list"),
document.getElementById("cpp-ch-list")
];

let selectCh = (trgt)=>{sessionStorage.setItem("ch-select",`${trgt}`);};

let doSelectCh = ()=>{
    let target = parseInt(sessionStorage.getItem("ch-select"));
    for(let i = 0; i < chArr.length; i++){
        if(i == target){
            chArr[i].style.display = "flex";
        }
    }
};

let chOnload = ()=>{
    doSelectCh();
    addChMat();
}









// #####-|-DATA-MATERI-|-#####

//#################################################################
// di dalam file dataMateri.js
//#################################################################










//#####-|-SET-MATERI-|-#####

let selectSoal = (target)=>{sessionStorage.setItem("soal-select",`${target}`);};

//id disini berupa id materi
let setMateri = (id)=>{
    const header = document.getElementById("materiHeader");
    const content = document.getElementById("materiContent");
    const matBtn = document.getElementById("materi-btn");
    let index;
    
    for(let i = 0; i < dataMateri.length; i++){
        if(dataMateri[i].id == id){
            index = i;
        }
    }
    
    let title = dataMateri[index].header.title;
    let subTitle = dataMateri[index].header.subTitle;
    let contentList = dataMateri[index].content;
    
    header.children[0].innerHTML = title;
    header.children[1].innerHTML = subTitle;
    
    matBtn.addEventListener("click", ()=>{selectSoal(id);});
    
    for(let i = 0; i < contentList.length; i++){
        let type = contentList[i].type;
        if(type == "p"){
            content.insertAdjacentHTML("beforeend",`
            <p class="txt-wth">${contentList[i].content}</p>
            `
            );
        }else if(type == "c"){
            let specialId = Math.floor(Math.random()*99999);
            content.insertAdjacentHTML("beforeend",
            `
            <div class="code-box">
              <h1 class="txt-wth">
                ${contentList[i].title}
              </h1>
              <div class="code" id="${specialId}"></div>
            </div>
            `
            );
            
            let code = document.getElementById(specialId);
            let codeList = contentList[i].content
            
            for(let i = 0; i < codeList.length; i++){
                code.insertAdjacentHTML("beforeend",
                `
                <p class="txt-wth">${codeList[i]}</p>
                `);
            }
        }else if(type == "t"){
            content.insertAdjacentHTML("beforeend",`<h1 class="txt-wth">${contentList[i].content}</h1>`);
        }
    }
}










//#####-|-MATERI-SELECTION-|-#####

let selectMat = (target)=>{sessionStorage.setItem("mat-select",`${target}`);};

let doSelectMat = ()=>{
    let target = sessionStorage.getItem("mat-select");
    setMateri(target);
}










// #####-|-OPSI-SOAL-|-#####

let uc = null;

let optionSelect = ()=>{
    let optionList = document.getElementById("option-parent").children;
    
    for(let i = 0; i < optionList.length; i++){
        optionList[i].addEventListener("click", ()=>{
            optionList[i].children[0].classList.toggle("selected");
            if(uc == i){
                uc = null;
            }else{
                uc = i;
            }
            for(let x = 0; x < optionList.length; x++){
                if(x != i){
                    optionList[x].children[0].classList.remove("selected");
                }
            }
        });
    }
}










//#####-|-DATA-SOAL-|-#####

//#################################################################
// di dalam file dataSoal.js
//#################################################################










//#####-|-SET-SOAL-|-SET-HASIL-|-KOREKSI-|-#####

let nowIndex = 0;
let index;

let setSoal = (id, nowIndex)=>{
    let pertanyaan = document.getElementById("pertanyaan");
    let title = document.getElementById("soal-title");
    let optionList = document.getElementById("option-parent").children;
    
    for(let i = 0; i < dataSoal.length; i++){
        if(dataSoal[i].id == id){
            index = i;
        }
    }
    
    title.innerHTML = dataSoal[index].title;
    pertanyaan.innerHTML = dataSoal[index].soal[nowIndex].pertanyaan;
    for(let i = 0; i < optionList.length; i++){
        optionList[i].children[1].innerHTML = dataSoal[index].soal[nowIndex].pilihan[i];
    }
};

let setHasil = (cond)=>{
    let hasil = document.getElementById("hasil");
    hasil.style.display = "flex";
    if(cond == "benar"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "forestgreen";
        hasil.children[0].innerHTML = "Jawaban Kamu Benar!";
        setTimeout(()=>{
            hasil.style.marginTop = '600px';
        },1250);
    }else if(cond == "salah"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "red";
        hasil.children[0].innerHTML = "Jawaban Kamu Kurang Tepat!";
        setTimeout(()=>{
            hasil.style.marginTop = '600px';
        },1250);
    }else if(cond == "selesai"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "var(--nn-blue)";
        hasil.children[0].style.color = "var(--bg-blue)";
        hasil.children[0].innerHTML = "kamu menyelesaikan Exercise";
        hasil.children[1].innerHTML = "ketuk untuk kembali";
        hasil.addEventListener('click', ()=>{
            window.location.href = "materi.html";
        });
    }
}

let koreksiSoal = ()=>{
    let optionList = document.getElementById("option-parent").children;
    let jawaban = dataSoal[index].soal[nowIndex].jawaban;
    
    if(jawaban == uc){
        if(dataSoal[index].soal[nowIndex].isLast){
            setHasil("selesai");
        }else{
            uc = null;
            for(let x = 0; x < optionList.length; x++){
                optionList[x].children[0].classList.remove("selected");
            }
            setHasil("benar");
            nowIndex += 1;
            let target = sessionStorage.getItem("soal-select");
            setSoal(target, nowIndex);
        }
    }else if(jawaban != uc){
        setHasil("salah");
    }
}










//#####-|-SOAL-SELECTION-|-#####

//select soal di line 209

let doSelectSoal = ()=>{
    let target = sessionStorage.getItem("soal-select");
    optionSelect();
    setSoal(target, nowIndex);
}









//#####-|-INVENTOR-SELECTION-|-#####

let invArr = [
document.getElementById("brendan-inv"),
document.getElementById("bjarne-inv"),
document.getElementById("guido-inv")
];

let selectInv = (trgt)=>{sessionStorage.setItem("inv-select",`${trgt}`);};

let doSelectInv = ()=>{
    let target = sessionStorage.getItem("inv-select");
    for(let i = 0; i < invArr.length; i++){
        if(i == target){
            invArr[i].style.display = "flex";
        }
    }
};