<?php
require_once('../funciones/config.php');

if (isset($_GET["Id"])) {
  $sql = "SELECT * FROM empresa WHERE Id = :Id";

  try {
    //preparo la sentencia
    $statement = $conexion->prepare($sql);
    //uso un bindValue:  para que el parametro id de la sentencia obtenga el valor pasado por URL
    $statement->bindValue(':Id', $_GET["Id"]);
    //ejecuto
    $statement->execute();
    //paso a otra variable $empresa el resultado de fetch --> fetch_assoc: array indexado por nombre columna
    $empresa = $statement->fetch(PDO::FETCH_ASSOC);
  } catch (PDOException $error) {
    echo $error->getMessage();
  }
} else {
  echo "Se necesita un Id";
  exit;
}
?>
<footer class="top-border">
  <section class="well well2 wow fadeIn  bg1" data-wow-duration='3s'>
    <div class="container">
      <h2 class="txt-pr">
        Donde estamos
      </h2>
    </div>
  </section>
  <!--<div class="map">
        <div id="google-map" class="map_model" data-zoom="11"></div>
        <ul class="map_locations">
          <li data-x="<?php // echo $empresa['Latitud']; 
                      ?>" 
              data-y="<?php //echo $empresa['Longitud']; 
                      ?>" 
              data-basic="images/gmap_marker.png" 
              data-active="images/gmap_marker_active.png">
            <div class="location">
              <h3 class="txt-clr1" style="color:black">
                <small>
                <?php //echo $empresa['Denominacion']; 
                ?>
                </small>
              </h3>
              <address>
                <dl>
                  <dt>Telefono: </dt>
                  <dd class="phone" style="color:black"><a href="callto:#"> <?php //echo $empresa['Telefono']; 
                                                                            ?></a></dd>
                </dl>
                <dl>
                  <dt>Domicilio: </dt>
                  <dd style="color:black"> <?php // echo $empresa['Domicilio']; 
                                            ?></dd>
                </dl>
                <dl>
                  <dt> E-mail: </dt>
                  <dd style="color:black"><a href="mailto:#"><?php //echo $empresa['Email']; 
                                                              ?></a></dd>
                </dl>
              </address>
            </div>
          </li>
        </ul>
      </div>-->

  <div id="map" class="map"></div>
  <script>
    var map = L.map("map").setView([<?php echo $empresa['Latitud']; ?>, <?php echo $empresa['Longitud']; ?>], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([<?php echo $empresa['Latitud']; ?>,<?php echo $empresa['Longitud']; ?>])
      .addTo(map)
      .bindPopup("<?php echo $empresa['Denominacion']; ?>")
      .openPopup();
  </script>



  <section class="well1">
    <div class="container">
      <p class="rights">
        <?php echo $empresa['Denominacion']; ?> &#169; <span id="copyright-year"></span>
        <a href="index-5.html">Privacy Policy</a>
        <!-- {%FOOTER_LINK} -->
      </p>
    </div>
  </section>
</footer>