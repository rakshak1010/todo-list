const List = require("../models/list");
const Item = require("../models/item");
const _ = require("lodash");


module.exports = {
	showList: (req, res) => {
		const customListName = _.capitalize(req.params.customListName);

		if(customListName !== "Favicon.ico"){
		  List.findOne({name: customListName}, function(err, foundList){
		    if (!err){
		      if (!foundList){
		        //Create a new list
		        const list = new List({
		          name: customListName,
		          items: []
		        });
		        list.save();
		        res.redirect("/" + customListName);
		      } else {
		        //Show an existing list
		        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
		      }
		    }
		  });
		}
	}
};