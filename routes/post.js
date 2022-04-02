const Post = require("../model/post")
// const Category = require("../model/category")
const axios = require('axios')
const express = require('express')
const router = express.Router()



router.get('/post', function(req, res, next){
    Post.find({}).then(function(posts){
        let newList = [];
        posts.map((e)=>{
            let value = {
                _id: e._id,
                image1: e.image1,
                video: e.video,
                title: e.title,
                description: e.description,
                status: e.status,
                price: e.price,
                __v: e.__v,
            }
            newList.push(value)
        })
       res.send(newList)
    })
})


router.get("/confirm/:reference/:postid", (req, res, next) => {
    axios
      .get(`https://api.paystack.co/transaction/verify/${req.params.reference}`, {
        headers: {
          Authorization: `Bearer sk_test_71f3b9d8264d80b730cf960c3eff7d434fdb168e`,
        },
      })
      .then((response) => {
        if (response.data.data.status === "success") {
      Post.findById({_id: req.params.postid}).then(function(value){
          res.send(value);
      })
        } else {
          res.send(response.data);
        }
      })
      .catch((error) => {
        res.send(error.response.data);
      });
  });



router.get("/post/clear", function (req, res, next) {
    Post.find({})
    .then(function (menus) {
        menus.map((v) => {
        return Post.findByIdAndDelete({ _id: v._id }).then(function (
            menus
        ) {});
      });
      res.send("done");
    })
    .catch(next);
});


router.post('/post', function(req, res, next){
    Post.create(req.body).then(function(posts){
       res.send(posts)
    })
})



// router.post('/category', function(req,res,next){
//       Category.create(req.body).then(function(category){
//           res.send(category)
//       })
// })



// router.get('/category',async function(req, res, next){
//  Category.find({}).then(async function(category){
//     let result = []
//        for(e of category){
//       await  Post.find({category: e._id}).then(function(post){
//             result = [...result, {
//                 adtotal: post.length,
//                 category: e.title,
//             }]
//         })
        
//        }
//        res.send(result)
//     })

    
// })


module.exports = router;