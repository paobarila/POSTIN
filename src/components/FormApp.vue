<script setup>



</script>

<template>
    <div class="todo">
    <h1 class=" w-75 text-center display-6 p-2">Do you want to work with us?</h1>
<h1 class=" w75 text-center display-6 p-2 mb-4">Complete the form to apply for new positions:</h1>
    <form class="row g-3 w-75 p-3 ms-5">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Email</label>
    <div class="input-group">
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required>
  </div>
   <select class="form-select" aria-label="Default select example">
  <option selected>Academic degrees select:</option>
  <option value="1">High School Degree</option>
  <option value="2">College Degree</option>
  <option value="3">Other</option>
</select>
<div class="form-check">
    <p>Schedule:</p>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Full Time
  </label>
</div>
<div class="form-check">
     <input class="form-check-input" type="checkbox" value=" Full Tims" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Part Time
  </label>
</div>
 
  <div class="col-12">
    <button class="btn" type="submit">Apply</button>
  </div>
</form>
</div>
</template>
<style scoped>
.todo{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color:#fcddb0;
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
    margin-left: 10rem;
    background-color:#e97777;
}
</style>

