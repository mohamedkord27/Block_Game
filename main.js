
// select the start game button
document.querySelector(".button span").onclick=function(){
    // prompt window to ask for name
    let yourName= prompt("Enter Your Name");
    // if the name is empty
    if(yourName==null || yourName==""){
        document.querySelector(".header .name span").innerHTML= "Unknown";
    }
    else{
        document.querySelector(".header .name span").innerHTML= yourName;
    }
    // remove the screen
    document.querySelector(".button").remove();
}

let duration= 1000;

let blocksContainer= document.querySelector(".game-blocks");

let blocks= Array.from(blocksContainer.children);

// console.log(blocks.length);

let orderRange= Array.from(Array(blocks.length).keys());

// console.log(orderRange);


// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);



blocks.forEach((block,index)=>{
    block.style.order= orderRange[index];

    block.onclick= function(){
        flipBlock(block);
    }
});



// run flipblock

function flipBlock(selectedBlock){
    selectedBlock.classList.add("is-flipped");


    let allFlippedBlocks= blocks.filter(flippedBlock=> flippedBlock.classList.contains("is-flipped"));

    if(allFlippedBlocks.length===2){
        console.log("Two Blocks Had Filpped");
        
        stopClicking();
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}

// run stopClicking Function

function stopClicking(){

    blocksContainer.classList.add("no-clicking");

    // wait duration

    setTimeout(()=>{
        blocksContainer.classList.remove("no-clicking");
    }, duration);

}

// maching blocks

function checkMatchedBlocks(firstBlock, secondBlock){
    let triesElement= document.querySelector(".tries span");
    console.log(triesElement);

    if(firstBlock.dataset.technology === secondBlock.dataset.technology){
        firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");
        firstBlock.classList.add("has-match");
        secondBlock.classList.add("has-match");
    }
    else{
        triesElement.innerHTML= parseInt(triesElement.innerHTML) + 1;

        setTimeout(()=>{
            firstBlock.classList.remove("is-flipped");
            secondBlock.classList.remove("is-flipped");
        },duration);
    }
}



//shuffle function

function shuffle(array){
    let current= array.length,
    temp,
    random;

    while(current>0){
        random = Math.floor(Math.random()*current);
        current--;

        temp= array[current];
        // console.log(temp)
        array[current]= array[random];

        array[random]= temp; 

    }
    
    return array;
}
