$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
  
      var newDevoured = {
        devoured: 1
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log("Eaten", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };

      console.log(newBurger);
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New Burger");
          $("#ca").val("");
          location.reload();
        }
      );
    });
  
  });