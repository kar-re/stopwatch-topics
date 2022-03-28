<script>
import TimerTask from './TimerTask.svelte';
import { lapse } from '../stores';
let tasks = [
{name: 'Hållbarhet', time: 0}, 
{name: 'Ericsson', time: 0}, 
{name: 'Interaktionsdesign', time: 0}, 
{name: 'Paus', time: 0}
]; 
let selected;
// tasks[0].time = $lapse;



export function addNewTask() {
  tasks = [...tasks, {name: 'New task', time: 0}];
}

function selectTask(task) {
  // task.time += $lapse;
  console.log('Selected something');
  console.log(tasks);
  selected = task;
}
export function removeTask() {
  tasks = tasks.filter((obj) => !(obj === selected));
}

</script>

{#each tasks as task}
  <TimerTask on:click={() => selected = task} selected={selected === task} bind:name={task.name} bind:time={task.time}/>
  {/each}