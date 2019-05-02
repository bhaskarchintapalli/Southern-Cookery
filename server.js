var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Recepie     =require("./models/recepie"),
    seedDb      =require("./seed"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    passport  =require("passport");

app.use(require("express-session")({
    secret: "First Project",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect("mongodb://localhost:27017/recepie",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// seedDb();

app.get("/",function(req,res){
    // res.console.log("Server started");
    res.render("landing");
});
 
app.get("/recepies",isLoggedIn,function(req,res){
    Recepie.find({},function(err,allrecepie){
        if(err){
            console.log(err);
        }
        else{
            res.render("index",{recepie:allrecepie});
        }
});
    
});


app.get("/recepies/:id", function(req, res){
    Recepie.findById(req.params.id,function(err, foundRecepie){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {recepie: foundRecepie});
        }
    });
});

app.get("/register",function(req, res){
  res.render("register"); 
});

app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
          res.redirect("/recepies");
        });
    });
});

// LOGIN ROUTES
//render login form
app.get("/login", function(req, res){
  res.render("login"); 
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/recepies",
    failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started!");
});