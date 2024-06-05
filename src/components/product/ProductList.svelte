<script lang="ts">
  import Dialog from "../tools/Dialog.svelte";
  import Loading from "../tools/Loading.svelte";
  import Table from "../tools/Table.svelte";

  $: isLoading = false;
  $: dialogOpenEdit = false;

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  const columnsNames = [
    { name: "invoice", label: "Invoice" },
    { name: "paymentStatus", label: "Payment Status" },
    { name: "totalAmount", label: "Total Amount" },
    { name: "paymentMethod", label: "Payment Method" },
  ];

  function handlerSelected(invoice: any) {
    const { label } = invoice;
    if (label === "Edit") {
      dialogOpenEdit = true;
    }
  }

  const options = [
    {
      label: "Edit",
      icon: "📝",
    },
    {
      label: "Delete",
      icon: "🗑️",
    },
    {
      label: "Select",
      icon: "🔍",
    },
  ];
</script>

<div>
  <Table
    {options}
    columns={invoices}
    {columnsNames}
    outputSelected={handlerSelected}
  ></Table>

  <Dialog
    dialogOpen={dialogOpenEdit}
    outputClose={() => {
      dialogOpenEdit = false;
    }}
  ></Dialog>

  <Loading isActive={isLoading}></Loading>
</div>
