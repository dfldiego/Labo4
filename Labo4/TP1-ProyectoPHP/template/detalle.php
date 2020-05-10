<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <meta name="format-detection" content="telephone=no" />
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <title>PRIVACY</title>

  <!-- Bootstrap -->
  <link href="css/bootstrap.css" rel="stylesheet">

  <!-- Links -->
  <link rel="stylesheet" href="css/search.css">

  <!--JS-->
  <script src="js/jquery.js"></script>
  <script src="js/jquery-migrate-1.2.1.min.js"></script>
  <script src="js/rd-smoothscroll.min.js"></script>
  <script src='js/device.min.js'></script>
</head>

<body>
  <div class="page">
    <!--========================================================
                            HEADER
  =========================================================-->
    <?php include_once '../funciones/header.php' ?>

    <!--========================================================
                            CONTENT
  =========================================================-->
    <?php


    //Comprobamos si existe y no es nulo el parametro id pasado por la URL
    if (isset($_GET["id"])) {
      $sql = "SELECT * FROM noticia WHERE id = :id";

      try {
        //preparo la sentencia
        $statement = $conexion->prepare($sql);

        //uso un bindValue:  para que el parametro id de la sentencia obtenga el valor pasado por URL
        $statement->bindValue(':id', $_GET["id"]);

        //ejecuto
        $statement->execute();

        //paso a otra variable $empresa el resultado de fetch --> fetch_assoc: array indexado por nombre columna
        $noticia = $statement->fetch(PDO::FETCH_ASSOC);
      } catch (PDOException $error) {
        echo $error->getMessage();
      }
    } else {
      echo "Se necesita un id de noticia";
      exit;
    }
    ?>
    <main>

      <section class="well well4">

        <div class="container">
          <div>
            <div id="imagenPrincipal" style="height: 450px; background-image: url('<?php echo $noticia['imagen_noticia']; ?>'); background-repeat: no-repeat;background-size: cover;">
              <div style="text-align:left; background-color: rgba(1,1,1,0.5);color: #ffffff;font-size: 16px;line-height: 50px;">
                <?php echo $noticia['titulo_noticia'];  ?>
              </div>
            </div>
          </div>
          <h2>
            <?php echo $noticia['titulo_noticia'];  ?>
          </h2>
          <?php echo $noticia['fecha_publicacion'];  ?>
          <hr>
          <div class="row offs2">

            <div class="col-lg-12">
              <dl class="terms-list">
                <dt>
                  <?php echo $noticia['resumen_noticia'];  ?>
                </dt>
                <hr>
                <dd>
                  <?php echo $noticia['contenido_html'];  ?>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>


    </main>

    <!--========================================================
                            FOOTER
  =========================================================-->
    <?php include_once '../funciones/footer.php' ?>
  </div>


  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="js/bootstrap.min.js"></script>
  <script src="js/tm-scripts.js"></script>
  <!-- </script> -->

  <!-- coded by vitlex -->

</body>

</html>