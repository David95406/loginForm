function submitForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;
    if (username === "admin" && password === "admin1234" && terms) {
      document.getElementById("message").innerHTML = "Üdv. Admin!";
      document.getElementById("message").style.display = "block";
      document.getElementById("loginForm").style.display = "none";
    } else {
      alert("Hibás felhasználónév, jelszó vagy a feltételek nincsenek elfogadva");
    }
  }