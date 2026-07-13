const stripePaymentLink = "https://buy.stripe.com/PLAATS-HIER-JE-STRIPE-LINK";
const unitPrice = 39.99;

const quantity = document.getElementById("quantity");
const total = document.getElementById("total");
const buyButton = document.getElementById("buyButton");
const toast = document.getElementById("toast");

const euro = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR"
});

function updateTotal() {
  total.textContent = euro.format(Number(quantity.value) * unitPrice);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 4300);
}

quantity.addEventListener("change", updateTotal);

buyButton.addEventListener("click", () => {
  if (stripePaymentLink.includes("PLAATS-HIER")) {
    showToast("Stripe is nog niet gekoppeld. Vervang de placeholder in script.js door je eigen Stripe Payment Link.");
    return;
  }

  const url = new URL(stripePaymentLink);
  url.searchParams.set("quantity", quantity.value);
  window.location.href = url.toString();
});

updateTotal();
