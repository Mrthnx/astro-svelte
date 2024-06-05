<script>
  import { Clock } from "svelte-loading-spinners";
  export let isActive = false;
</script>

{#if isActive}
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-black bg-opacity-40 rounded p-4">
      <Clock size="60" color="#FF3E00" unit="px" />
    </div>
  </div>
{/if}
