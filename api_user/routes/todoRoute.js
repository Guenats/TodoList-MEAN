var express = require('express');
var router = express.Router();
var User = require('../models/todo');
var app = express();

  router.post("/todo", function(req, res,next) {
    var todoData = {
      title: req.body.title,
      comment: req.body.comment,
      creator: req.body.creator,
      completed:req.body.completed
      }
      User.create(todoData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          req.session.userId = user._id;
          res.status(200).send();
          res.json({ message: 'post created!' });
          
          
        }
      });
    // Authenticated Passport user as Todo creator
});

router.get('/todosFind', function(req, res,next) {
  
          // use mongoose to get all todos in the database
          User.find(function(err, todos) {
  
              // if there is an error retrieving, send the error. nothing after res.send(err) will execute
              if (err)
                  res.send(err)
  
              res.json(todos); // return all todos in JSON format
          });
      });

      router.delete('/todos/:todo_id', function(req, res) {
        User.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            User.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

    // If user is logged in then pull todos from Mongo
    router.get('/todos/:creator', function(req, res) {
          // Sort Todo by descending 'created' date
          User.find({creator: req.params.creator}).sort('-created').populate('creator', 'name username').exec(function(err, todos) {
            if(err) {
              return res.status(400).send({
                message: getErrorMessage(err)
              });
            }
            else {
              res.json(todos);
            }
          });
    })

module.exports=router;