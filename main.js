import $ from jquery


{
  id: 1,
  first_name: "John"
  last_name: "Smith"
  phone: "4044044444"
  city, state: "Atlanta, GA"
}

var Contacts = {
  index: 1,

  init: function() {},

  storeAdd: function(entry){},
  storeEdit: function(entry){},
  sotreRemove: function(entry){},

  tableAdd: function(entry){},
  tableEdit: function(entry){},
  tableRemove: function(entry){},
};
Contact.init();

var Contacts = {
  index: window.localStorage.getItem("Contacts:index"),
  $table: document.getElementById("contacts-table"),
  $form: document.getElementById("contacts-form"),
  $button_save: documetn.getElementById("contacts-op-save"),
  $button_discard: document.getElementById("contacts-op-discard"),

  init: function() {
    if(!Contacts.index) {
      window.localStorage.setItem("Contacts:index", Contacts.index = 1);
    }

  }

};

  Contacts.$form.reset();
  Contacts.$button_discard.addEventListener("click", function(event){
    Contacts.$form.reset();
    Contacts.$form.id_entry.value = 0;

  }, true);
  Contacts.$form.addEventListener("submit", function(event) {
    var entry = {
      id: parseInt(this.id_entry.value),
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      phone: this.phone.value,
      city_state: this.city_state.value
    };
    if (entry.id == 0){
      Contacts.storeEdit(entry);
      Contacts.tableEdit(entry);
    }
this.reset();
this.id_entry.value = 0;
event.preventDefault();
      }, true);

    },

};



  init: function(){

    if (window.localStorage.length - 1){
      var contacts_list = [], i, key;
      for (i = 0; i <window.localStorage.length; i++){
        key = window.localStorage.key(i);
        if (/Contacts:\d+/.test(key)){
          contacts_list.push(JSON.parse(window.localStorage.getItem(key)));
        }
      }
      if(contacts_list.length){
        contacts_list.sort(function(a,b){
          return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
        })
        .forEach(Contacts.tableAdd);
      }
    }
  },
  ...
};

storAdd: function(entry){
  entry.id = Contacts.index;
  window.localStorage.setItem("Contacts:" + entry.id, JSON.stringify));
  window.localStorage.setItem("Contacts:index", ++Contacts.index);

},

tableAdd: function(entry){
  var$tr = document.createElement("td");
  for(key in entry){
    if(entry.hasOwnProperty(key)) {
      $td = document.createElement("td");
      $td.appendChild(document.createTextNode(entry[key]));

    }
  }

  $td = document.createElement("td");
  $td.innerHTML = `<a data-op="edit" data-id="' + entry.id + entry.id +'">Edit</a> | <a data-op="remove" data-id="' + entry.id +'">Remove</a>`;
  $tr.appendChild($td);
  $tr.setAttribute("id", "entry-" + entry.id);
  Contacts.$table.appendChild($tr);

    },

};

storeRemove: function(entry) {
  window.localStorage.removeItem("Contacts:"+ entry.id);
},

tableRemove: function(entry) {
  Contaacts.$table.removeChild(document.getElementById("entry-"+ entry.id));
      }
};
