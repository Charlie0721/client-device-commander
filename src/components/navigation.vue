<template>
  <nav class="navbar navbar-expand-lg">
        <img
      alt="Logo CXPOS"
      class="cxPos-navbar"
      src="../assets/logo_plateado.png "
    />
    <div class="container">
      <a class="navbar-brand text-white" href="#"
        ><i class="fa fa-graduation-cap fa-lg mr-2"></i>COMANDERAS MOVILES</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nvbCollapse"
        aria-controls="nvbCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nvbCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item pl-1">
            <a class="nav-link">
              <router-link to="/">
                <i class="fa fa-home fa-fw mr-1"></i>Ingresar Datos
              </router-link></a
            >
          </li>
          <li class="nav-item active pl-1">
            <a class="nav-link">
              <router-link to="/data">
                <i class="fa fa-th-list fa-fw mr-1"></i>Ver Información
              </router-link></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--# Navbar #-->
</template>

<script>
export default {
  name: "navigationOne",
  props: {
    msg: String,
  },
};
</script>

<style>

.navbar {
  background-color: #484848;
}
.navbar .navbar-nav .nav-link {
  color: #fff;
}
.navbar .navbar-nav .nav-link:hover {
  color: #fbc531;
}
.navbar .navbar-nav .active > .nav-link {
  color: #fbc531;
}

footer a.text-light:hover {
  color: #fed136 !important;
  text-decoration: none;
}
footer .cizgi {
  border-right: 1px solid #535e67;
}
@media (max-width: 992px) {
  footer .cizgi {
    border-right: none;
  }
}
</style>
