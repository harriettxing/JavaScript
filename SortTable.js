function checkAttributes(elem) {
    for (var i = 0; i < elem.attributes.length; i++) {
        var attrib = elem.attributes[i];
        console.log(attrib.name + " = " + attrib.value);
    }
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function sortTable(tableID, rowClass, searchKey) {


  var table = document.getElementById(tableID);
  var form, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

  var tableRows = table.getElementsByClassName(rowClass);

  switching = true;


  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/

  while (switching) {
    //start by saying: no switching is done:
    switching = false;

    rows = document.getElementsByClassName(searchKey);


    /*Loop through all table rows (except the
    first, which contains table headers):*/

    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/

      a = rows[i].value;
      b = rows[i + 1].value;


      if (searchKey == "Serial1" || searchKey == "Serial2" ) {
         x = a;
         y = b;
      } else {
        x = new Date(a);
        y = new Date(b);
      }


      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x > y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      tableRows[i].parentNode.insertBefore(tableRows[i+1], tableRows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }

//alert('done sorting');

  for (i = 0; i < (tableRows.length); i++) {
//alert('row:  '+i);
    if(i%2==1) {
//alert('odd row');
      if ((tableRows[i].className).indexOf('box1') < 0) {
//alert('add box1 class');
        tableRows[i].className = tableRows[i].className+" box1 ";
      }
    } else {
//alert('even row');
      tableRows[i].classList.remove("box1");
    }
  }
//alert('re-apply stylesheet:'+ '<?php echo $thestyle;?>');
//  document.createStyleSheet('<?php echo $thestyle;?>');

}
</script>