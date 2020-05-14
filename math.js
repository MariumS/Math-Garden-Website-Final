

var answer;
var score = 0;
var backgroundImages = [];

    function nextQuestion(){
      const n1 = Math.floor(Math.random() *5);
      document.getElementById('n1').innerHTML=n1;
      const n2 = Math.ceil(Math.random() *4);
      document.getElementById('n2').innerHTML=n2;
      answer = n1+n2;


    }
    function checkAnswer(){
    const prediction = predictImage()
    if (prediction == answer){
      score++;
      console.log(`correct. score ${score}`);

   if (score <= 6) {
      backgroundImages.push(`url('images/background${score}.svg')`);
      document.body.style.backgroundImage = backgroundImages;
    }
    else {
      alert('you win. your math garden is in full bloom. work on a new garden?');
      score==0;
      backgroundImages=[];
      document.body.style.backgroundImage = backgroundImages;

}
    }
    else{
      if (score != 0) {score--;}
      console.log(`oops, check your calc and/or write neater. score ${score}`);
      setTimeout(function(){
        backgroundImages.pop();
        document.body.style.backgroundImage = backgroundImages;},
        1000);
      }

    }
