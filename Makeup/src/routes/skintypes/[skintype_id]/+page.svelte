<script>
    export let data;
  </script>

  <style>
    span {
      background-color: rgb(217, 21, 187);
      color: rgb(217, 21, 187);
      text-decoration: white;
    }
  </style>
  
<!--   <h1>Skintypes</h1>
 -->

<br>

  <h1><span class="badge bg-light">Skintypes</span></h1>
  <br>

  <div class="card mb-3" style="max-width: 1060px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src={data.skintype.photo} class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">  <h3>What characterises the {data.skintype.name} skintype?</h3>
          </h5>
          <p class="card-text">  {data.skintype.description}</p>
          <h5 class="card-title">  <h3>How can this skintype be managed when applying makeup?</h3>
          </h5>
          <p class="card-text">  {data.skintype.solution}</p>

        </div>
      </div>
    </div>
  </div>


<!--   <h2>What characterises the {data.skintype.name} skintype?</h2>

  <p>{data.skintype.description}</p>

  <h3>How can this skintype be managed when applying makeup?</h3>

  <p>{data.skintype.solution}</p>

  <img src={data.skintype.photo} alt="" /> -->

