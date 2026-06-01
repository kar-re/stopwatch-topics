<script>
  import EditableTextfield from './EditableTextfield.svelte';
  import { convertHMS } from '../utils';
  export let time = 0;
  export let name = 'Durr';
  export let selected = false;
  // time is the real accumulated ms for this task, fed in from the parent
  $: display = convertHMS(time);
</script>

<div on:click class="flex text-lg font-medium dark:bg-gray-700 dark:text-gray-200 text-gray-700 tracking-normal drop-shadow px-3 py-4 flex-row justify-between rounded" class:bg-primary-500={selected} class:text-gray-100={selected} class:bg-gray-50={!selected} class:dark:bg-gray-200={selected} class:dark:text-gray-800={selected} class:dark:bg-gray-800={!selected}>
  <EditableTextfield html={name} on:edited={(message) =>  {name=message.detail.text;}}></EditableTextfield>
  <div class=" font-normal">{display[0] + ':' + display[1] + ':' + display[2]}</div>
</div>