// class Pizza
//   def initialize(sauce, size)
function Pizza (sauce, size) {
  // @sauce = sauce
  this.sauce = sauce;

  // @size = size
  this.size = size;
}

// def print_pizza
Pizza.prototype.print_pizza = function () {
  console.log("Your pizza:");

  // puts "  -Sauce: #{@sauce}"
  console.log("  - Sauce: " + this.sauce);

  // puts "  -Size: #{@size}"
  console.log("  - Size: " + this.size);
};


my_pizza = new Pizza("marinara", "large");
my_pizza.print_pizza();
