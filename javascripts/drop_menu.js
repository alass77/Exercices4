function dropMenu() {
    const button = getElementById('drop_menu_btn');
    const menu = getElementById('drop_menu');
    button.addEventListener(onclick , function list (){
      menu.toggle("500", "swing")
    });
  };
  
  $(function() {
    dropMenu();
  })