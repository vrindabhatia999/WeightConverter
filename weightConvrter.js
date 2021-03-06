<!DOCTYPE html>
<html>
<head>
	<title>Weight Converter App</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <style type="text/css">
    	body{
    		margin-top: 70px;
    		background-color: #333;
    		color: white;
    		 
    	}
    </style>
      
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<h1 class="display-4 text-center mb-3">Weight Converter</h1>

				<form>
					<div class="form-group">
						<input type="number" class="form-control" placeholder="Enter In Kg" id="kg"  >
					</div>
				</form>
				<div id="output" style="color: black;">
					<div class="card  bg-primary mb-2" >
						<div class="card-block">
							<h4>Pounds Output:</h4>
							<div id="poundOutput"></div>
						</div>
					</div>

					<div class="card bg-danger mb-2"  >
						<div class="card-block">
							<h4>Grams Output:</h4>
							<div id="gramsOutput"></div>
						</div>
					</div>

					<div class="card bg-success mb-2"  >
						<div class="card-block">
							<h4>Ounce Output:</h4>
							<div id="ozOutput"></div>
						</div>
					</div>

					 
				</div>
				
			</div>
			<div class="cl-md-6">
				
			</div>
		</div>
	</div>

	<script type="text/javascript">
		document.getElementById('output').style.visibility='hidden'

		document.getElementById('kg').addEventListener('input', function(e){
			document.getElementById('output').style.visibility='visible'
			let kgs=e.target.value;
			document.getElementById('poundOutput').innerHTML=kgs*2.20462 + " " +"pounds";
			document.getElementById('gramsOutput').innerHTML=kgs*1000 + " " +"grams";
			document.getElementById('ozOutput').innerHTML=kgs*35.274 + " " +"ounces";

		});
		
	</script>

</body>
</html>
