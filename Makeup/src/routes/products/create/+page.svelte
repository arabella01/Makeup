<script>
    import axios from "axios";
  
    let product = {
      name: "",
      brand: "",
      producttype: "",
      skintypes:  [],
      ingriedients: []
      
    };
  
    function addProduct() {

    const ingriedientsArray = product.ingriedients.split(',').map(item => item.trim());
    product.ingriedients = ingriedientsArray;


      axios
        .post("/api/products", product)
        .then((response) => {
          alert("Product added");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }

  
    function addSkintype(skintype) {
    product.skintypes = [...product.skintypes, skintype]; // damit nicht eine verschachtelte array entsteht
  }

 
  function removeSkintype(index) {
    product.skintypes = product.skintypes.filter((_, i) => i !== index);
  }
  
  function addIngredient() {
        if (product.ingriedients) {
            product.ingriedients.push(product.ingriedients);
            product.ingriedients = ''; // Clear the input after adding
        }
    }

    
    
    
    </script>

    <style>
   .btn.btn-primary {
     background-color: rgb(217, 21, 187);
     color: white;
     border: 3px solid black; /* Add a red border with 1px width */

   }
   .btn.btn-danger {
    background-color: rgb(14, 13, 13);
    color: white;
    border: 3px solid rgb(217, 21, 187); /* Add a red border with 1px width */
   }
   .custom-dropdown-toggle {
  /* Your custom styles here */
  background-color: rgb(217, 21, 187);
  color: white;

}
 </style>
  
  <h1>Add a product</h1>
  
  <form>
    <div class="mb-3">
      <label for="" class="form-label">Name</label>
      <input class="form-control" type="text" bind:value={product.name} />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Brand</label>
      <input class="form-control" type="text" bind:value={product.brand} />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Product Type</label>
      <input class="form-control" type="text" bind:value={product.producttype} />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Skintypes</label>
      {#each product.skintypes as skintype, index (index)}
        <div class="d-flex align-items-center mb-2">
          <div class="dropdown me-2">
            <button class="btn btn-secondary custom-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {skintype || 'Select Skintype'}
            </button>
  
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" on:click={() => addSkintype('oily')}>Oily</a></li>
              <li><a class="dropdown-item" on:click={() => addSkintype('dry')}>Dry</a></li>
              <li><a class="dropdown-item" on:click={() => addSkintype('combination')}>Combination</a></li>
              <li><a class="dropdown-item" on:click={() => addSkintype('normal')}>Normal</a></li>
            </ul>
            
          </div>
          <button class="btn btn-danger" on:click={() => removeSkintype(index)}>Remove</button>
        </div>
      {/each}
      <button class="btn btn-primary" on:click={() => addSkintype('')}>Add Skintype</button>
    </div>

    <div class="mb-3">
      <label for="" class="form-label">Ingriedients</label>
      <input class="form-control" type="text" bind:value={product.ingriedients} />
    </div>
    <button on:click={addProduct} type="button" class="btn btn-primary">
      Add Product
    </button>
  </form>

  
  