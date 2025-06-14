"use strict";
const idCardShowcase = document.querySelector(".id-cards");

// Fetching fake json api
fetch("https://jsonplaceholder.typicode.com/users")
  .then((people) => people.json())
  .then((people) => {
    people.map((person) => {
      // Creating ID Card
      const idCard = document.createElement("div");
      idCardShowcase.appendChild(idCard);
      idCard.classList.add("id-card");

      // Creating Profile Picture
      const profilePicture = document.createElement("div");
      idCard.appendChild(profilePicture);
      profilePicture.classList.add("id-img");

      // Creating ID Card Textbox
      const idTextbox = document.createElement("h2");
      idCard.appendChild(idTextbox);
      idTextbox.classList.add("id-textbox");

      // Creating Full Name
      const fullName = document.createElement("h2");
      idTextbox.appendChild(fullName);
      fullName.innerHTML = `Name: ${person.name}`;

      // Creating Username
      const userName = document.createElement("h2");
      idTextbox.appendChild(userName);
      userName.innerHTML = `Username: ${person.username}`;

      // Creating Email
      const email = document.createElement("h2");
      idTextbox.appendChild(email);
      email.innerHTML = `Email: ${person.email}`;

      // Creating Phone
      const phone = document.createElement("h2");
      idTextbox.appendChild(phone);
      phone.innerHTML = `Phone: ${person.phone}`;
    });

    const handleButton = function () {
      // idCardShowcase.innerHTML = "";
      const inputField = document.querySelector("input");
      const error = document.querySelector("error");
      if (inputField.value === "") {
        error.innerHTML = `You have to Search for someone, to look for someone`;
      }
    };
  });
