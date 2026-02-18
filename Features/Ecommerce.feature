Feature: Ecommerce validation

  Scenario: Placing the Order
    Given a login to Ecommerce application with username "anshika@gmail.com" and password "Iamking@123"
     When Add "zara coat 3" to Cart
     Then Verity "zara coat 3" is displayed in the Cart
     When  Enter valid details and Place the Order
     Then  Verity order is present in the OrderHistory