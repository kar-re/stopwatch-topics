<script>
	import TimerDigit from './TimerDigit.svelte';
	import Button from './Button.svelte';
  import TimerTaskList from './TimerTaskList.svelte';
  import { time, lapse  } from '../stores.js';
  import { convertHMS } from '../utils';
  let taskList;
  let lapseLocal = 0;
  let previous = 0;
  let unsubscribe;
  $: renderTime = ['00', '00', '00'];

  function startTimer() {
    unsubscribe = time.subscribe(value => {
            // add the previous value to the current number of milliseconds
            
            lapseLocal = value + previous;
            // console.log(lapse);
            lapse.set(value);
            renderTime = convertHMS(lapseLocal);
        });
  }
  function stopTimer() {
    previous = lapseLocal;
    terminate();
  }
  function terminate() {
    if (unsubscribe) {
            unsubscribe();
            unsubscribe = null;
        } 
  }
  function resetTimer() {
		terminate();
		lapseLocal = 0;
    previous = 0;
		hour = 0;
		min = 0;
		sec = 0;
  }
  
  $: hour = renderTime[0]
  $: min = renderTime[1]
	$: sec = renderTime[2]
</script>


		<div class="w-full ease-in-out duration-500 flex flex-col gap-2 m-4 md:m-8 dark:bg-gray-800 bg-gray-100 rounded p-4 drop-shadow">
      <div class="flex flex-row dark:bg-gray-700 bg-gray-50 rounded-lg drop-shadow items-stretch justify-center">
          <TimerDigit time={hour} signal={'h'}/>
          <TimerDigit time={min} signal={'m'}/>
          <TimerDigit time={sec} signal={'s'}/>
    </div>
			<div class=" flex flex-row gap-2 justify-between ">
				<Button on:click={() => startTimer()} className="grow">Start</Button>
				<Button on:click={() => resetTimer()} 
					className="grow bg-transparent text-yellow-500 hover:bg-yellow-400 hover:text-gray-100 border-yellow-500 border"
					>Reset</Button
				>
				<Button on:click={() => stopTimer()} 
					className="grow bg-transparent text-red-500 hover:bg-red-400 hover:text-gray-100 border-red-500 border"
					>Stop</Button
				>
			</div>
			<div class="p-2 flex flex-col gap-4 dark:bg-gray-800 bg-gray-50 rounded drop-shadow">
				<div class="flex flex-row justify-between">
					<Button on:click={() => taskList.addNewTask()}
						className="bg-primary-200 dark:bg-primary-500 dark:stroke-primary-200 dark:hover:bg-primary-800 dark:hover:stroke-primary-400 hover:bg-primary-500 stroke-primary-500 hover:stroke-primary-100 px-0 py-0  w-12 h-12 rounded-full flex justify-center place-items-center"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class=" h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="bg-primary-500"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg></Button
					>
					<Button on:click={() => taskList.removeTask()}
						className="dark:bg-warning-500 dark:stroke-warning-200 dark:hover:bg-warning-800 dark:hover:stroke-warning-500 bg-warning-200 hover:bg-warning-500 stroke-warning-500 hover:stroke-warning-100 px-0 py-0  w-12 h-12 rounded-full flex justify-center place-items-center"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class=" h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="stroke-warning-500"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg></Button
					>
				</div>
        <TimerTaskList bind:this={taskList} ></TimerTaskList>
				
			</div>
		</div>
