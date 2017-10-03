<!DOCTYPE html>
<html>

<div id="align">
<div id="wrapper">

<head>
	
	<title>MY LIFE</title>
	<link href="life.css" rel="stylesheet"/>
	<script type="text/javascript">
		function active(){
			var searchbar = document.getElementById('searchbar');
			if(searchbar.value == 'Search...'){
				searchbar.value = ''
				searchbar.placeholder = 'Search...'
			}
		}
		function inactive(){
			var searchbar = document.getElementById('searchbar');
			if(searchbar.value == ''){
				searchbar.value = 'Search...'
				searchbar.placeholder = ''
			}
		}
	</script>

</head>


<body>
<header>

<h1>MY LIFE</h1>

</header>


<ul>
  <li><a href="MyLife.html">HOME</a></li>
  <li><a href="beauty.html">BEAUTY</a></li>
  <li><a href="#contact.html">HEALTH</a></li>
  <li><a href="#contact.html">TRAVEL</a></li>
  <li><a href="about.html">ABOUT</a></li>
</ul>

<div class="slideshow" >
  <img class="mySlides" src="images/blueberries.JPG"  style="width:100%">
  <img class="mySlides" src="images/makeup.JPG"  style="width:100%">
  <img class="mySlides" src="images/travel.JPG"  style="width:100%">
  
</div>


<script>
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 4 seconds
}
</script>



<div class="searchhh" >
<form action="" method="post">
	<input type="text" id="searchbar" placeholder="" value="Search..." maxlength="50" autocomplete="on" onMouseDown= "active();" onBlur="inactive();"/><input type="submit" id="searchbutton" value="Go!"/>
</form>
</div>


</body>
</div>
</div>
</html>