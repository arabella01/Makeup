<script>
    import axios from "axios";
    import { invalidateAll } from "$app/navigation";
    export let data;

    console.log("HAAAAAALLLOOOOOOO");
    console.log(data);
    
    let productTypeFilter = "all";
    
    function deleteProduct(id) {
      axios
        .delete("/api/products/" + id)
        .then((response) => {
          alert("Product deleted");
          console.log(response.data);
          invalidateAll(); // reload data
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }

/*       function applyFilter() {
        let productTypeFilter = "Foundation";

  }  */
    
  </script>

<style>
  .btn.btn-outline-dark {
    background-color: rgb(217, 21, 187);
    color: white;
    text-decoration: white;
  }


.btn.btn-light {
  background-color: rgb(217, 21, 187);
  color: white;
  text-decoration: white;
}


    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .title-and-button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
</style>
  
<div class="header-container">
  <div class="title-and-button">
    <br>
  <h1>List of all Products</h1>
  <br>
 
  <a class="btn btn-light" href="/products/create" role="button">Add product</a>
  </div>

<!--   <div class="mt-3 mb-3">
    <label class="form-label" for="filter">Filter by product type</label>
    <input class="form-control" id="filter" bind:value={productTypeFilter} />
  </div>
 
 <button class="btn btn-outline-dark"><a href="/products/filter/{productTypeFilter}">Filter</a></button>  -->
 </div>
 
  <br>

 <div class="card text-end" >
  <div class="card-body">
    <h5 class="card-title">Filter by product type</h5>
    <input class="form-control" id="filter" bind:value={productTypeFilter} />
    <br/>
    <button class="btn btn-outline-dark"><a href="/products/filter/{productTypeFilter}">Filter</a></button>
  </div>
</div>
<br>



<!--   <div class="row">
  <div class="col-sm-6">
    {#each data.producttype as producttype}
      <a href="/products/filter/{producttype}">
        <button
          type="button"
          class="btn btn-outline-dark"
        >{producttype}</button>
      </a>
    {/each}
  </div>
</div>  --> 

  <br>


  



  <div class="accordion" id="accordionExample">
    {#each data.productsFiltered as product, i}
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading{i}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{i}" aria-expanded="true" aria-controls="collapse{i}">
            {product.name}
          </button>
        </h2>
        <div id="collapse{i}" class="accordion-collapse collapse" aria-labelledby="heading{i}" data-bs-parent="#accordionExample">
          <div class="accordion-body row">
            <ul class="col-md-6" >
            
              <li>
                Brand: {product.brand}
              </li>
              <li>
                Product Type: {product.producttype}
              </li>
              <li>
                Skintype: {product.skintype}
              </li>
              <br/>
              <button class="btn btn-danger custom-button"
              on:click={() => {
                deleteProduct(product._id);
              }}>Delete product</button
            >
              
            </ul> 
          
            <ul class="col-md-6" > 
              Ingredients:
              {#each product.ingriedients as ingriedient}
            
                <li> 
                  {ingriedient}
                </li>
              {/each}
            </ul>
            
          </div>
        </div>
      </div>
    {/each}
    
  </div>

