<script>
  export let className = '';
</script>
<button on:click class="{'ease-in-out duration-150 text-white px-12 py-3 bg-primary-500 hover:bg-primary-600 text-lg font-medium rounded-md text-sm px-5 py-2.5 focus:outline-none ' + className}">
  <slot></slot>
</button>