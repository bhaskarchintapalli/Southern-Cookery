var mongoose = require("mongoose");
var Recepie = require("./models/recepie");

var data = [
    {
        name: "Tamarind rice", 
        image: "http://savitrigroup.in/wp-content/uploads/2017/05/pulihora.jpg",
        url:"https://www.youtube.com/embed/N7U5cBSBOns",
        description: "Pulihora (puli referring to tamarind in Kannada, Telugu, and Tamil), Puliyodarai, Puliyogare or simply Tamarind Rice is a common rice preparation in the South Indian states of Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu. Puli in pulihora can be translated as 'sour taste', referring to the characterizing use of tamarind as one of the main ingredients"
    },
    {
        name: "Sambar", 
        image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/0-Archana/8_long_format-Mixed_Vegetable_Sambar_Figaro_Olive_Oil-2.jpg", 
        url : "https://www.youtube.com/embed/q38PF0vR_K8",
        description: "Sambar is reflective of a broad and ancient tradition of lentil-based vegetable stews in southern India. In regions that grow coconuts, notably some areas of Tamil Nadu, coastal Karnataka and Kerala, Sambar is made with a paste of fresh, grated and roasted coconuts and spices, instead of sambar powder.In Andhra Pradesh, it is called as Pappu chaaru. Apart from dal and tamarind, vegetables used in preparing is few. Vegetables are onions, dosakaaya, bitter gourd and tomatoes.Sambar without lentils (but with vegetables, or dried or fresh fish, or meat) is called kuzhambu in Tamil Nadu."
    },
    {
        name: "Idly", 
        image: "https://www.ndtv.com/cooks/images/idli.2.jpg", 
        url : "https://www.youtube.com/embed/xU5T4oZOcNw",
        description: "Idli or idly (About this soundpronunciation (help·info)) (/ɪdliː/) are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in southern India and northern Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. The fermentation process breaks down the starches so that they are more readily metabolized by the body.Idli have several variations, including rava idli, which are made from semolina. Regional variants include sanna of Konkan and Enduri Pitha of Odisha"
    },
    {
      name: "Dosa",
      image: "http://www.foodkarting.com/wp-content/uploads/2017/09/masala-dosa.jpg",
      url:"https://www.youtube.com/embed/P62lCx2gZxw",
      description:"Dosa is a type of pancake or crèpe originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram ground together in a fine, smooth batter with a dash of salt. Dosa is a typical part of the Southern Indian and Sri Lankan Tamil diets but is now popular all over the Indian subcontinent. Traditionally, dosas are served hot along with sambar, a stuffing of potatoes, and chutney. They can be consumed with idli podi as well."
    }
];

function seedDB(){
   //Remove all campgrounds
   Recepie.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed items!");
        
        data.forEach(function(seed){
            Recepie.create(seed, function(err, recepie){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a Item");
                    //create a comment
                 
                }
            });
        });
    }); 
}

module.exports = seedDB;
