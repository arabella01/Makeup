<script>
    export let data;
  </script>
  
<style>
  h1.skintypes-title {
    margin-top: 30px;
  }
</style>

  <h1 class="skintypes-title">List of all Skintypes</h1>
  <br>
  <table class="table">
    <thead>
      <tr>
        <th>Skintypes</th>
        <th>Suitable product consistency</th>
        <th>Common issues</th>

      </tr>
    </thead>
  
    <tbody>
      {#each data.skintypes as skintype}
        <tr>
          <td>
            <a href="/skintypes/{skintype._id}">
              {skintype.name}
            </a>
        </td>
        <td>
            {skintype.consistency}
        </td>
        <td>
          {skintype.issues}
      </td>
       
      

        </tr>
      {/each}
    </tbody>
  </table>
