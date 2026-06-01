<script>
import TimerTask from './TimerTask.svelte';
let tasks = [
{name: 'Hållbarhet', time: 0},
{name: 'Ericsson', time: 0},
{name: 'Interaktionsdesign', time: 0},
{name: 'Paus', time: 0}
];
let selected;

export function addNewTask() {
  tasks = [...tasks, {name: 'New task', time: 0}];
}

// called on every tick with the real elapsed ms since the last tick
export function addTimeToSelected(delta) {
  if (!selected) return;
  selected.time += delta;
  tasks = tasks; // trigger Svelte reactivity after the in-place mutation
}

export function resetTimes() {
  tasks = tasks.map((task) => ({ ...task, time: 0 }));
  selected = null;
}

export function removeTask() {
  tasks = tasks.filter((obj) => !(obj === selected));
}

</script>

{#each tasks as task}
  <TimerTask on:click={() => selected = task} selected={selected === task} bind:name={task.name} bind:time={task.time}/>
  {/each}