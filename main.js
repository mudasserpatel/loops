//Create a for loop that logs every even number from 1000 down to 0
for(let i = 1000; i>=0; i -= 2){
    console.log(i);
}

//Create a for loop that starts at 0 and goes to 10000
for(let i = 0; i <=10000;i++){
    if(i == 2500){
        alert("A quarter of the way there!");
    }
    else if(i == 5000){
        alert("Halfway there!");
    }
    else if(i == 10000){
        alert("The loop is done!");
    }
}

//Create an array of my top 5 favorite TV shows
const myArray = ["Modern Family","Superstore","Breaking Bad","Fresh Off The Boat","Kim's Convenience"];

for(let i = 0; i < 5;i++){
    console.log("My #"+(i+1)+" favorite TV show is "+myArray[i]);
}