<script setup>
</script>

<template>
    <div class="todo p-4">
  <h1 class="title1 text-center display-5 text-decoration-underline"> Terms and Conditions for posting on POSTIN</h1>
<div class="cuerpo p-10">
  <ul >
<li class="title fs-3 mt-3 ms-5">Please read these terms and conditions carefully before using POSTIN.</li>

<h4 class="subtitle text-decoration-underline ms-5 mt-1"> Conditions of use:</h4>
<ul class="bodylist lh-lg ms-5">
<li>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms.</li>
<li>If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly.</li> 
<li>POSTIN only grants use and access of this website, its products, and its services to those who have accepted its terms.</li>
</ul>
<h4 class="subtitle text-decoration-underline ms-5 mt-1">Privacy policy:</h4>
<ul class="bodylist lh-lg ms-5">
<li>Before you continue using our website, we advise you to read our privacy policy [link to privacy policy] regarding our user data collection.</li> 
<li>It will help you better understand our practices.</li>
</ul>
<h4 class="subtitle text-decoration-underline ms-5 mt-1">Age restriction:</h4>
<ul class="bodylist lh-lg ms-5" >
<li> You must be at least 18 (eighteen) years of age before you can use this website.</li> 
<li>By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement.</li>
<li>POSTIN assumes no responsibility for liabilities related to age misrepresentation.</li>
 </ul>

<h4 class="subtitle text-decoration-underline ms-5 mt-1">Intellectual property</h4>
<ol class="bodylist lh-lg ms-5">
<li> You agree that all materials, products, and services provided on this website are the property of [company name], its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property.</li>
<li> You also agree that you will not reproduce or redistribute the [company name]’s intellectual property in any way, including electronic, digital, or new trademark registrations.</li>
<li> You grant [company name] a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish.</li>
<li>For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.</li>
</ol>

<h4 class="subtitle text-decoration-underline ms-5 mt-1">User accounts</h4>
<ol class="bodylist lh-lg ms-5">
<li>  As a user of this website, you may be asked to register with us and provide private information.</li> 
<li> You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information.</li> 
<li> You are also responsible for all activities that occur under your account or password.</li>
<li>  If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.</li>
<li> We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.</li> 
</ol>
</ul>
</div>
<form class="row g-3 needs-validation w-75" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Write your first name" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Write your last name" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
    <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn" type="submit">Submit form</button>
  </div>
</form>
</div>
</template>

<style scoped>
.todo{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color:#fcddb0;
    color:#8b7e74;
}
input{
    border-inline-color:#256d85 ;
    border-block-color: #256d85;
}
.btn{
    color:white;
    background-color: #256d85;
}
.row{
 margin-left: 5em;
}
</style>
