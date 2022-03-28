<script>
  import EditableTextfield from './EditableTextfield.svelte';
  import { lapse } from '../stores';
  import { convertHMS } from '../utils';
  export let time = '0';
  $: localTime = 0;
  export let name = 'Durr';
  export let selected = false;
  $: if (selected) {
    if ($lapse)
    localTime += 10;
  }
  $: asdf = convertHMS(localTime);


</script>

<div on:click class="flex text-lg font-medium dark:bg-gray-700 dark:text-gray-200 text-gray-700 tracking-normal drop-shadow px-3 py-4 flex-row justify-between rounded" class:bg-primary-500={selected} class:text-gray-100={selected} class:bg-gray-50={!selected} class:dark:bg-gray-200={selected} class:dark:text-gray-800={selected} class:dark:bg-gray-800={!selected}>
  <EditableTextfield html={name} on:edited={(message) =>  {name=message.detail.text; console.log(name);}}></EditableTextfield>
  <div class=" font-normal">{asdf[0] + ':' + asdf[1] + ':' + asdf[2]}</div>
</div>