<script setup>



</script>

<template>
  <div class="supercaja">
  <h1 class="display-2 text-center mb-5">How can we help?</h1>
  <div class="container-fluid">
  <div class="caja5 w-75 p-2">
    <h3 class="display-6 text-center">We would love to hear from you.</h3>
    <h4 class="display-6">Send us a message:</h4>
  <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Text here"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</div>
<div class="cajainterna d-flex container-fluid gap-4 mt-4 pb-4 aling-items-center">
<figure class="figure">
  <img src="../assets/images/postin.png" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">Making a better world one post at a time.</figcaption>
</figure>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.1978060041183!2d-58.71581448519718!3d-34.54854676208724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd0b45c5d0ad%3A0x616718e6513e37e1!2sFSE%2C%20Jos%C3%A9%20Mar%C3%ADa%20Paz%201351%2C%20B1663%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1669122519847!5m2!1ses!2sar" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<div class="direccion ms-5 mt-2 pb-2 w-75">
<p class="fw-semibold text-center">Our commercial offices:</p>
<p class="text-center"> Jose M. Paz 1351, San Miguel. Provincia de Buenos Aires</p>  
<p class="text-center">Argentina</p>
<!--<div class="contacto d-flex justify-conten-between">-->
<a class="mail text-center" href="mailto:postin@postin.com.ar"><i class="bi bi-envelope-paper-heart fs-2 p-3"></i>postin@postin.com.ar</a>
<a class="tel" href="https://api.whatsapp.com/send?phone=0123456789"><i class="bi bi-whatsapp fs-2 p-3"></i> Whatsapp</a>
<!--</div>-->
</div>
</div>
</div>
</div>
</template>

<style scoped>
.supercaja{
  margin-top:9rem;
  background-color:#fcddb0;
}
.caja5{
margin-left: 3rem;
margin-right: 3rem;
background-color: #e97777;
}
.imagen{
  align-items: flex-start;
}
.direccion{
  background-color: #e97777;
  height: 18rem;
  border-radius: 10px;
  
}
i{
  color:white
}
.cajainterna{
  flex-wrap: wrap;
}
</style>