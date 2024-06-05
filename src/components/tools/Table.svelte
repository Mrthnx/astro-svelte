<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";
  import { Button } from "$lib/components/ui/button";

  export let columnsNames: any[];
  export let columns: any[];
  export let options: any[] = [];

  export let outputSelected: any;

  $: values = () => {
    return columns || [];
  };

  function clickSelected(label: string, value: any) {
    outputSelected({ label, value });
  }
</script>

<div>
  <Table.Root>
    <!-- <Table.Caption>A list of your recent invoices.</Table.Caption> -->
    <Table.Header>
      <Table.Row>
        {#each columnsNames as column, j (j)}
          <Table.Head>{column.label}</Table.Head>
        {/each}
        {#if options && options.length > 0}
          <Table.Head>Options</Table.Head>
        {/if}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each values() as value, i (i)}
        <Table.Row>
          {#each columnsNames as column, j (j)}
            <Table.Cell>{value[column.name]}</Table.Cell>
          {/each}
          {#if options && options.length > 0}
            <div class="flex">
              {#each options as option, k (k)}
                <Button
                  class="mr-2 mt-1 mb-1"
                  variant="outline"
                  size="icon"
                  on:click={() => clickSelected(option.label, value)}
                  >{option.icon}</Button
                >
              {/each}
            </div>
          {/if}
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
