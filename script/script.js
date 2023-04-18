//Variáveis dos elementos
const listEsc = document.getElementById('listEsc')
const listDisp = document.getElementById('listDisp')
const campo = document.getElementById('img')

//Arrays das listas
// Ata == 1 Mei == 2 Lat == 3 Zag == 4 Gol ==5
let arrayEsc = []
let arrayDisp = [
    { id: "player1", name: "Vinicius Jr", shirt:'20', position: 'ATA', nposition: 1,image:new Image() },
    { id: "player2", name: "Richarlison", shirt:'09', position: 'ATA', nposition: 1,image:new Image() },
    { id: "player3", name: "Raphinha", shirt:'11', position: 'ATA', nposition: 1, image:new Image()},
    { id: "player4", name: "Neymar Jr", shirt:'10', position: 'ATA', nposition: 1 ,image:new Image() },
    { id: "player5", name: "Paqueta", shirt:'07', position: 'MEI', nposition: 2,image:new Image() },
    { id: "player6", name: "Casemiro", shirt:'05', position: 'MEI', nposition: 2,image:new Image()  },
    { id: "player7", name: "Danilo", shirt:'02', position: 'LAT', nposition: 3, image:new Image() },
    { id: "player8", name: "E. Militão", shirt:'14', position: 'LAT', nposition: 3, image:new Image() },
    { id: "player9", name: "T. Silva", shirt:'03', position: 'ZAG', nposition: 4, image:new Image() },
    { id: "player10", name: "Marquinhos", shirt:'4', position: 'ZAG', nposition: 4,image:new Image()  },
    { id: "player11", name: "Alisson", shirt:'01', position: 'GOL', nposition: 5, image:new Image() },
    { id: "player12", name: "Messi", shirt:'10', position: 'ATA', nposition: 1, image:new Image() },
    { id: "player13", name: "C. Ronaldo", shirt:'07', position: 'ATA', nposition: 1,  image:new Image()},
    { id: "player14", name: "Modric", shirt:'10', position: 'MEI', nposition: 2, image:new Image() },
    { id: "player15", name: "Fagner", shirt:'23', position: 'LAT', nposition: 3,image:new Image()  },
    { id: "player16", name: "S. Ramos", shirt:'04', position: 'ZAG', nposition: 4, image:new Image() },
    { id: "player17", name: "D.Alaba", shirt:'04', position: 'ZAG', nposition: 4, image:new Image() },
    { id: "player18", name: "Mbappe", shirt:'07', position: 'ATA', nposition: 1, image:new Image() },
    { id: "player19", name: "Grieszman", shirt:'10', position: 'MEI', nposition: 2, image:new Image() },
    { id: "player20", name: "Halland", shirt:'09', position: 'ATA', nposition: 1  ,image:new Image()},
    { id: "player21", name: "Alphonso Davies", shirt:'19', position: 'LAT', nposition: 3 ,image:new Image() },
    { id: "player22", name: "Antony", shirt:'21', position: 'ATA', nposition: 1,image:new Image()  },
    { id: "player23", name: "Rodrygo", shirt:'19', position: 'MEI', nposition: 2 ,image:new Image() },
    { id: "player24", name: "kvaratskeila", shirt:'77', position: 'ATA', nposition: 1,image:new Image()},
    { id: "player25", name: "R.Leao", shirt:'17', position: 'ATA', nposition: 1,image:new Image()},
    { id: "player26", name: "Courtois", shirt:'01', position: 'GOL', nposition: 5 ,image:new Image()}
  
  
  

]


arrayDisp[0].src = "./imagens/vini.jpg";
arrayDisp[1].src = "./imagens/richarlison.webp";
arrayDisp[2].src = "./imagens/raphinha.jpg";
arrayDisp[3].src = "./imagens/neymar.jpg";
arrayDisp[4].src = "./imagens/paqueta.jpg";
arrayDisp[5].src = "./imagens/casemiro.jpg";
arrayDisp[6].src = "./imagens/danilo.jpg";
arrayDisp[7].src = "./imagens/militao.jpg";
arrayDisp[8].src = "./imagens/thiago.jpg";
arrayDisp[9].src = "./imagens/marquinhos.jpg";
arrayDisp[10].src = "./imagens/alisson.jpg";
arrayDisp[11].src = "./imagens/messi.jpg";
arrayDisp[12].src = "./imagens/cr7.jpg";
arrayDisp[13].src = "./imagens/modric.jpg";
arrayDisp[14].src = "./imagens/fagner.jpg";
arrayDisp[15].src = "./imagens/ramos.jpg";
arrayDisp[16].src = "./imagens/alaba.jpg";
arrayDisp[17].src = "./imagens/mbappe.jpg";
arrayDisp[18].src = "./imagens/griemazn.jpg";
arrayDisp[19].src = "./imagens/haaland.jpg";
arrayDisp[20].src = "./imagens/davies.jpg";
arrayDisp[21].src = "./imagens/antony.jpg";
arrayDisp[22].src = "./imagens/rodrygo.jpg";
arrayDisp[24].src = "./imagens/kvaratskheila.jpg";
arrayDisp[25].src = "./imagens/leao.jpg"; 


arrayDisp.forEach((i) => {
  campo.innerHTML += `<span id="gol" class="btn btn-outline-success"> <img src="${i.src} "></span>`

}); 



const refresh = () =>{
    renderDom(arrayDisp,arrayEsc)
}

//Renderiza os players na tela
const renderDom = (arrayDis, arrayEs) => {
    clearDom()
    //Ordena de acordo com a position
    arrayDisp.sort((a, b) => a.nposition - b.nposition);
    arrayEsc.sort((a, b) => a.nposition - b.nposition);

    // cria os elementos de acordo com o array
    arrayDis.forEach((item) => {
      listDisp.innerHTML += `<li class="butt">
          <span class="spans disp ${item.position}" id="${item.id}">
          <p><b>${item.position}</b>  - ${item.name} ${item.shirt}</p>
          <button class ="addBtn" id="${item.id}" value="${item.position}">+</button>
          </span>
          </li>` ;
    });
   
    arrayEs.forEach((item) => {
        listEsc.innerHTML += `<li class="butt">
            <span class="spans esc ${item.position}" id="${item.id}">
            <p><b>${item.position}</b> - ${item.name} ${item.shirt}</p>
            <button class ="delBtn" id="${item.id}" value="${item.position}">-</button>
            </span>
            </li>`;
      });
    registerEvents()
  };

  const clearDom = () => {
    document.querySelectorAll(".lists").forEach((el) => {
      el.innerHTML = "";
    });
  };
Array.prototype.removeByIndex = function(i) {
    if(!Number.isInteger(i) || i < 0) {
        return this; // access to THIS
    }
    return this.filter((f, indx) => indx !== i)
}

//Registra os eventos em cada elemento
const registerEvents = () => {
    const delbutton = document.querySelectorAll('.delBtn')
    const addbutton = document.querySelectorAll('.addBtn')
    delbutton.forEach(element =>{
        element.removeEventListener('click',removePlayerEsc)
        element.addEventListener('click',removePlayerEsc)
    })
    addbutton.forEach(element =>{
        element.removeEventListener('click',addPlayerDisp)
        element.addEventListener('click',addPlayerDisp)
    })

};

const getIndexById = (array, id) => {
    // Can rewrite this function with modern JS, I love old method. it's cool.
    for(let i=0; i < array.length; i++) {
      if(array[i].id === id) {
        return i;
      }
    }
    return -1
  };


// remove player lista disponiveis
function addPlayerDisp(event) {
    //verifica se o array já possui a quantidade de jogadores (4-3-3)
    if(arrayEsc.length >= 11) {
        swal("ERRO", "A quantidade Máxima de Jogadores foi Atingida", "error")
        return
    }else if(checkPosition(arrayEsc, 'ATA') >= 3 && event.target.value === 'ATA'){
        swal("ERRO", "A quantidade Máxima de Atacantes foi Atingida", "error") 
        return 
    }else if(checkPosition(arrayEsc, 'MEI') >= 3 && event.target.value === 'MEI'){
        swal("ERRO", "A quantidade Máxima de Meias foi Atingida", "error")  
        return
    }else if(checkPosition(arrayEsc, 'LAT') >= 2 && event.target.value === 'LAT'){
        swal("ERRO", "A quantidade Máxima de laterais foi Atingida", "error")
        return
    }else if(checkPosition(arrayEsc, 'ZAG') >= 2 && event.target.value === 'ZAG'){
        swal("ERRO", "A quantidade Máxima de Zagueiros foi Atingida", "error")
        return
    }else if(checkPosition(arrayEsc, 'GOL') >= 1 && event.target.value === 'GOL'){
        swal("ERRO", "A quantidade Máxima de Goleiros foi Atingida", "error")
        return
    }
    
    const i = getIndexById(arrayDisp, event.target.id);
    if(i !== -1) {
        arrayEsc.push(arrayDisp[i]);
        arrayDisp = arrayDisp.removeByIndex(i);
      }
   refresh()
}

//remove  player da lista de  Escalados

const removePlayerEsc = (event) => {
    const j = getIndexById(arrayEsc, event.target.id);
    if(j !== -1) {
        arrayDisp.push(arrayEsc[j]);
        arrayEsc = arrayEsc.removeByIndex(j);
      }
    refresh()
}

// verifica a posição do player
function checkPosition(array, position) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].position === position) {
        count++;
      }
    }
    return count
  }


//chama a function renderDom sempre que a pagina for atualizada
window.addEventListener("load", () => {
    refresh()
});



img.onload= function () {
  const canvas= document.createElement("canvas")
  canvas.height= img.height
  canvas.width= img.width
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}











































// Array que irá registrar todos os player que foram modificados


//funçoes para criar um novo span em cada list
// function addElementDisp(text){
//     const newLi = document.createElement('li')
//     newLi.classList.add('butt')
//     const newSpan = document.createElement('span');
//     newSpan.classList.add('spans','playerDisp')
//     const newP = document.createElement('p');
//     newP.innerText = text

//     function handleAddBtnClick() {
//         const playerName = newLi.firstChild.firstChild.textContent
//         if (!newMovedPlayers1.includes(playerName)) {
//             addElementEsc(playerName)
//             newMovedPlayers1.push(playerName)
//         }
//         newLi.remove()
//     }

//     newLi.addEventListener('mouseenter', () =>{
//         const addBtn = createAddBtn
//         newLi.firstChild.append(addBtn)
//         addBtn.addEventListener('click', handleAddBtnClick)
//     })
//     newLi.addEventListener('mouseleave', () => {
//         const addBtn = createAddBtn
//         newLi.firstChild.removeChild(addBtn)
//         addBtn.removeEventListener('click', handleAddBtnClick)
//     })

//     newSpan.append(newP);
//     newLi.append(newSpan)
//     listDisp.append(newLi);
// }
// function addElementEsc(text){
//     const newLi = document.createElement('li')
//     newLi.classList.add('butt')
//     const newSpan = document.createElement('span');
//     newSpan.classList.add('spans','playerEsc')
//     const newP = document.createElement('p');
//     newP.innerText = text

//     function handleDelBtnClick() {
//         const playerName = newLi.firstChild.firstChild.textContent
//         if (!newMovedPlayers.includes(playerName)) {
//             addElementDisp(playerName)
//             newMovedPlayers.push(playerName)
//         }
//         newLi.remove()
//     }

//     newLi.addEventListener('mouseenter', () =>{
//         const delBtn = createDelBtn
//         newLi.firstChild.append(delBtn)
//         delBtn.addEventListener('click', handleDelBtnClick)
//     })
//     newLi.addEventListener('mouseleave', () => {
//         const delBtn = createDelBtn
//         newLi.firstChild.removeChild(delBtn)
//         delBtn.removeEventListener('click', handleDelBtnClick)
//     })
//     newSpan.append(newP);
//     newLi.append(newSpan)
//     listEsc.append(newLi);
// }

// //forEach iterando sobre cada elemento da node list, adicionando os eventos

// playerDisp.forEach(player => {
//     const addBtn = createAddBtn
//     function handleAddBtnClick() {
//         const playerName = player.firstChild.nextSibling.textContent
//         if (!movedPlayers.includes(playerName)) {
//             addElementEsc(playerName)
//             movedPlayers.push(playerName)
//         }
//         player.parentNode.remove()
//         player.remove()
        
//     }

//     player.addEventListener('mouseenter',()=>{
//         player.append(addBtn)
//         addBtn.addEventListener('click', handleAddBtnClick)
//     })


//     player.addEventListener('mouseleave', () => {
//         player.removeChild(addBtn)
//         addBtn.removeEventListener('click', handleAddBtnClick)
//     })
    
// });

// playerEsc.forEach(player => {
//     const delBtn = createDelBtn
//     function handleDelBtnClick() {
//         const playerName = player.firstChild.nextSibling.textContent
//         if (!movedPlayers.includes(playerName)) {
//             addElementDisp(playerName)
//             movedPlayers.push(playerName)
//         }
//         player.parentNode.remove()
//         player.remove()
//     }

//     player.addEventListener('mouseenter',()=>{
//         player.append(delBtn)
//         delBtn.addEventListener('click', handleDelBtnClick)
//     })


//     player.addEventListener('mouseleave', () => {
//         player.removeChild(delBtn)
//         delBtn.removeEventListener('click', handleDelBtnClick)
//     })
// });



