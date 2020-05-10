<?php  session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <meta name="format-detection" content="telephone=no" />
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <title>HOME</title>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>



  <!-- Bootstrap -->
  <link rel="stylesheet" href="assets/dist/css/bootstrap.min.css">



  <!-- Links -->
  <link rel="stylesheet" href="css/carousel.css">
  <link rel="stylesheet" href="css/camera.css">
  <link rel="stylesheet" href="css/search.css">
  <link rel="stylesheet" href="css/google-map.css">
  <link rel="stylesheet" href="css/mapa.css">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
  <link rel="stylesheet" href="personal.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap.css">
  <style>
    #map {
      height: 420px;
    }
  </style>

  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>

  <!--JS-->

  <script src="js/jquery-migrate-1.2.1.min.js"></script>
  <script src="js/rd-smoothscroll.min.js"></script>
  <script src='js/device.min.js'></script>
  <script src="js/carousel.js"></script>
  <script src="assets/dist/js/bootstrap.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>

<body>

  <div class="page">
  <?php
    include_once '../funciones/config.php';

    $sql_noticia = "SELECT * FROM noticia";
    $noticia = "";
    try {
      $statement = $conexion->prepare($sql_noticia);
      $statement->execute();
      $resultado_noticia = $statement->fetchAll();
    } catch (PDOException $error) {
      echo $error->getMessage();
    }
    
    
    ?>
    <!--========================================================
                            HEADER
  =========================================================-->
    <?php include_once '../funciones/header.php' ;  
    $_SESSION['id_empresa'] = $empresa['Id'];
    //print_r($_SESSION);

    ?>

    <!--========================================================
                            CONTENT
  =========================================================-->

    <main>
      <section class="well well1 well1_ins1">

        <div class="container">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">


              <?php
              $contador = 0;
              foreach ($resultado_noticia as $fila_noticia) :
                if ($fila_noticia['idEmpresa'] == $empresa['Id']) : ?>
                  <?php if ($contador == 0) : ?>
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <?php $contador++; ?>
                  <?php else : ?>
                    <li data-target="#myCarousel" data-slide-to="<?php echo $contador; ?>"></li>
                    <?php $contador++; ?>
                  <?php endif; ?>
                <?php endif; ?>
              <?php endforeach; ?>

            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">

              <?php $contador_dos = 0; ?>
              <?php foreach ($resultado_noticia as $fila_noticia) : ?>
                <?php if ($fila_noticia['idEmpresa'] == $empresa['Id']) : ?>
                  <?php if ($contador_dos == 0) : ?>
                    <div class="item active">
                      <img src="<?php echo $fila_noticia['imagen_noticia']; ?>" alt="Chicago" style="width:100%; height:100%;">
                      <div class="carousel_caption">
                        <div class="jumbotron jumbotron1">
                          <em> <?php echo $fila_noticia['titulo_noticia']; ?> </em>
                          <p> <?php echo $fila_noticia['resumen_noticia']; ?> </p>
                          <a href="detalle.php?id=<?php echo $fila_noticia['id'] ?>&Id=<?php echo $empresa['Id'] ?>" class="btn-link fa-angle-right"></a>
                        </div>
                      </div>
                    </div>
                    <?php $contador_dos++; ?>
                  <?php else : ?>
                    <div class="item">
                      <img src="<?php echo $fila_noticia['imagen_noticia']; ?>" alt="cccc" style="width:100%;">
                      <div class="carousel_caption">
                        <div class="jumbotron jumbotron1">
                          <em> <?php echo $fila_noticia['titulo_noticia']; ?> </em>
                          </br>
                          <p> <?php echo $fila_noticia['resumen_noticia']; ?> </p>
                          
                          <a href="detalle.php?id=<?php echo $fila_noticia['id'] ?>&Id=<?php echo $empresa['Id'] ?>" class="btn-link fa-angle-right"></a>
                        </div>
                      </div>
                    </div>
                    <?php $contador_dos++; ?>
                  <?php endif; ?>
              <?php endif;
              endforeach; ?>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>









        <!--<div id="myCarousel" class="camera_container">
          <div class="camera_wrap camera_azure_skin" id="camera">
            <?php //foreach ($resultado_noticia as $fila_noticia) :
            //if ($fila_noticia['idEmpresa'] == $empresa['Id']) : 
            ?>
                <div data-src="<?php //echo $fila_noticia['imagen_noticia']; 
                                ?>">
                  <div class="camera_caption">
                    <div class="jumbotron jumbotron1">
                      <em> <?php //echo $fila_noticia['titulo_noticia']; 
                            ?></br> </em>
                      <?php //echo $fila_noticia['resumen_noticia']; 
                      ?>
                      </br>
                      <a href="detalle.php?id=<?php //echo $fila_noticia['id'] 
                                              ?>&Id=<?php //echo $empresa['Id'] 
                                                    ?>" class="btn-link fa-angle-right"></a>
                    </div>
                  </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
            <?php //endif; endforeach; 
            ?>
          </div>
        </div>-->
      </section>

      <section class="well well2 wow fadeIn  bg1" data-wow-duration='3s'>
        <div class="container">
          <h2 class="txt-pr">
            Quienes Somos
          </h2>
          <div class="row">
            <div class="col">
              <p style="text-align:justify">
                <?php echo $empresa['quienes_somos']; ?>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!--========================================================
                            FOOTER
  =========================================================-->
    <?php include_once '../funciones/footerHome.php' ?>

  </div>


  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

  <!-- Include all compiled plugins (below), or include individual files as needed -->

  <script src="js/tm-scripts.js"></script>


  <!-- </script> -->

  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->

</body>

</html>