<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Your existing head content -->
</head>
<body>
  <!-- Your existing body content -->

  <!-- JavaScript code -->
  <script>
    document.addEventListener('DOMContentLoaded', (event) => {
      // Function to handle the form submission
      function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission
        const postalCode = document.getElementById('postal-code').value;
        console.log('Postal Code:', postalCode);
        // You can add more code here to handle the postal code
      }

      // Attach the event listener to the form
      const form = document.querySelector('#find-donor-center form');
      form.addEventListener('submit', handleFormSubmit);
    });
  </script>
</body>
</html>
