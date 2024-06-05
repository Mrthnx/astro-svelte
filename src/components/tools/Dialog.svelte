<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  export let dialogOpen = false;
  export let outputClose;
</script>

<Dialog.Root bind:open={dialogOpen} onOpenChange={() => outputClose()}>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
      <Dialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Dialog.Description>
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>
