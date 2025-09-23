window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);
  const apiKey = params.get("apikey");
  if (!apiKey) return;

  // Keep checking until the API explorer is ready
  const interval = setInterval(() => {
    // Mintlify renders path parameters as inputs inside parameter rows
    const rows = document.querySelectorAll(
      '[data-param-name="YourAPIKEY"] input'
    );

    if (rows.length > 0) {
      rows.forEach((input) => {
        input.value = apiKey;
        input.dispatchEvent(new Event("input", { bubbles: true })); // trigger Mintlify’s internal update
      });
      clearInterval(interval);
    }
  }, 400);
});
