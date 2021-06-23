<template>
  <div class="detalle">
    <div class="titulo">
      sunt aut facere repellat provident occaecati excepturi optio reprehenderit
    </div>
    <div class="contenido">
      quia et suscipit\nsuscipit recusandae consequuntur expedita et
      cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
      sunt rem eveniet architecto
    </div>
    <div class="info">Subido por: USUARIO 1</div>
    <router-link to="/" class="atras">Atras</router-link>
  </div>
</template>

<style scoped>
.detalle {
  font-family: Arial, Helvetica, sans-serif;
}

.detalle .titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 24px;
  font-weight: bold;
}

.detalle .contenido {
  padding: 30px;
  text-align: center;
}

.detalle .info {
  float: right;
}

.detalle .atras {
  display: inline-block;
  text-align: center;
  width: 100%;
}
</style>
