function openSlideMenu(){
      document.getElementById('side-menu').style.width = '50vw';
      document.getElementById('main').style.marginLeft = '50vw';
}

function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
}

function enlarge(){
	  if(document.getElementById('feedtext1').style.height!='auto'){
      document.getElementById('feedtext1').style.height='auto';
	  } else {
	  document.getElementById('feedtext1').style.height='7vh';
	  }
}

function openWritePost(){
	  document.getElementById("textpost").rows = "10";
	  document.getElementById('writepost').style.height='65vh';
	  document.getElementById('closepost').style.visibility='visible';
	  document.getElementById('blackline').style.visibility='visible';
	  document.getElementById('fbicon').style.visibility='visible';
	  document.getElementById('twiticon').style.visibility='visible';
	  document.getElementById('facecheck').style.visibility='visible';
	  document.getElementById('twitcheck').style.visibility='visible';
	  document.getElementById('sharebt').style.visibility='visible';
	  document.getElementById('shpost').style.visibility='visible';
}

function closeWritePost(){
	  document.getElementById("textpost").rows = "2";
	  document.getElementById('writepost').style.height='25vh';
	  document.getElementById('closepost').style.visibility='hidden';
	  document.getElementById('blackline').style.visibility='hidden';
	  document.getElementById('fbicon').style.visibility='hidden';
	  document.getElementById('twiticon').style.visibility='hidden';
	  document.getElementById('facecheck').style.visibility='hidden';
	  document.getElementById('twitcheck').style.visibility='hidden';
	  document.getElementById('sharebt').style.visibility='hidden';
	  document.getElementById('shpost').style.visibility='hidden';
}



function facebookLike(){
    document.getElementById("likenum").innerHTML = parseInt(document.getElementById("likenum").innerHTML)+1;
}

function facebookLike2(){
    document.getElementById("likenum2").innerHTML = parseInt(document.getElementById("likenum2").innerHTML)+1;
}

function facebookShare(){
    document.getElementById("sharenum").innerHTML = parseInt(document.getElementById("sharenum").innerHTML)+1;
}

function facebookShare2(){
    document.getElementById("sharenum2").innerHTML = parseInt(document.getElementById("sharenum2").innerHTML)+1;
}

function twitLike(){
    document.getElementById("tweetlikenum").innerHTML = parseInt(document.getElementById("tweetlikenum").innerHTML)+1;
}

function twitLike2(){
    document.getElementById("tweetlikenum2").innerHTML = parseInt(document.getElementById("tweetlikenum2").innerHTML)+1;
}

function twitShare(){
    document.getElementById("twitsharenum").innerHTML = parseInt(document.getElementById("twitsharenum").innerHTML)+1;
}

function twitShare2(){
    document.getElementById("twitsharenum2").innerHTML = parseInt(document.getElementById("twitsharenum2").innerHTML)+1;
}

function clap(){
    document.getElementById("clapcirclelikenum").innerHTML = parseInt(document.getElementById("clapcirclelikenum").innerHTML)+1;
}

function clap2(){
    document.getElementById("clapcirclelikenum2").innerHTML = parseInt(document.getElementById("clapcirclelikenum2").innerHTML)+1;
}