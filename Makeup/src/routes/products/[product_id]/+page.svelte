<script>
    import axios from 'axios';
    export let data;
    
    let product = data.product;
  
    function updateProduct() {
      axios
        .put("/api/products/" + product._id, product)
        .then((response) => {
          alert("Product updated");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
  </script>
  
  <h1>Product (Name: {product.name})</h1>
  <a href="/products/filter/all">Back</a>
  <!-- <div class="mt-3">
    <p>Name: {artist.name}</p>
    <p>Origin: {artist.origin}</p>
  </div>
   -->
  <div class="mt-3 mb-3">
    <label class="form-label" for="name">Name</label>
    <input class="form-control" id="name" bind:value={product.name} />
  </div>
  <div class="mt-3 mb-3">
    <label class="form-label" for="origin">Brand</label>
    <input class="form-control" id="origin" bind:value={product.brand} />
  </div>
  <div class="mt-3 mb-3">
    <label class="form-label" for="origin">Product Type</label>
    <input class="form-control" id="origin" bind:value={product.producttype} />
  </div>
  <div class="mt-3 mb-3">
    <label class="form-label" for="origin">Skin Type</label>
    <input class="form-control" id="origin" bind:value={product.skintype} />
  </div>
  <div class="mt-3 mb-3">
    <label class="form-label" for="origin">Ingredients</label>
    <input class="form-control" id="origin" bind:value={product.ingredients} />
  </div>
  <button class="btn btn-primary" on:click={updateProduct}>Update</button>