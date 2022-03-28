<script>
  export let html;
  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
  function handleDblClick(event) {
    let div = event.target;
    const neg = (div.contentEditable);
    div.contentEditable = true;
  }
  let isExit = false;
  function handleEnter(event) {
    if (event.key === 'Enter') {
      
      handleBlur(event);
    } 
  }
  function handleBlur(event) {
    if (isExit) {

    }  else {
      isExit = true;
      let div = event.target;
      div.contentEditable = false;
      html = div.innerHTML;
      dispatch('edited', {
        text: html
      });
      isExit = false;
    } 
  }
</script>

<div
on:click={handleDblClick} on:blur={handleBlur} on:keypress={handleEnter} contenteditable="false" >
{html}
</div>