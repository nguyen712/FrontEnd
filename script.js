function login(event) {
  event.preventDefault();
  console.log("Login function called");
  // let loginFrom = document
  //   .getElementById("loginId")
  //   .addEventListener("submit", function () {
  //     const username = document.getElementById("username").value;
  //     const password = document.getElementById("password").value;
  //     console.log("Username:", username);
  //     console.log("Password:", password);
  //   });
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log("Username:", username);
  console.log("Password:", password);

  const data = { username: username, password: password };
  console.log("Data to be sent:", data);

  fetch("http://localhost:8080/my-social-network/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Response received:", response);

      return response.json();
    })
    .then((data) => {
      console.log("Parsed response data:", data);

      if (data.code === 0 && data.data.authenticated) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.data.token);
        window.location.href = "UserPage.html";
      } else {
        console.error("Login failed:", data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
