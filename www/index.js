
  //  1. Create an event listener for when the user submits the form.
  //  2. When the event is triggered, create a FormData object called mail based on the input values and their name attributes in the form.
  //  3. Call a function called sendMail() with mail passed as a parameter. This function will use Fetch API to post the mail to the url send (specified in our form element attribute).


  //get the form by its id
  const form = document.getElementById("contact-form");
  const sendMail = mail() => {
    fetch("http://localhost:3000/contact.html/send", {
      method: "post",
      body: mail,
    }).then((response) => {
      return response.json();
    });
  };

  //1.
  const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    //2.
    let mail = new FormData(form);

    //3.
    sendMail(mail);
  })
