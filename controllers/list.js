const List = require("../models/list");
const Item = require("../models/item");
const _ = require("lodash");


module.exports = {
	showList: (req, res) => {
		Item.find({}, function(err, foundItems){
				if(!err){
		      res.render("list", {listTitle: "Today", newListItems: foundItems});
				}else{
					console.log(err);
					res.send(err);
				}
	  });
	},

	addItem: (req, res) => {
		const itemName = req.body.newItem;
	  const listName = req.body.list;

	  const item = new Item({
	    name: itemName
	  });

	  if (listName === "Today"){
	    item.save();
	    res.redirect("/");
	  } else {
	    List.findOne({name: listName}, function(err, foundList){
	      foundList.items.push(item);
	      foundList.save();
	      res.redirect("/" + listName);
	    });
	  }
	},

	deleteItem: (req, res) => {
		const checkedItemId = req.body.checkbox;
	  const listName = req.body.listName;
	  console.log(listName);

	  if (listName === "Today") {
	    Item.findByIdAndRemove(checkedItemId, function(err){
	      if (!err) {
	        console.log("Successfully deleted checked item.");
	        res.redirect("/");
	      }
	    });
	  } else {
	    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
	      if (!err){
	        res.redirect("/" + listName);
	      }
	    });
	  }
	}
};