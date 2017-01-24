const express = require('express');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("build"));

const bodyParser = require('body-parser')
const mongoose   = require('mongoose')

const Blog = require('./models/blog')

mongoose.connect('mongodb://localhost:27017/myBlogRedux');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {console.error(err); return res.sendStatus(500);}

    res.json(blogs)
  })
})

app.delete('/blogs/:blog_id', (req, res, next) => {
    Blog.findByIdAndRemove(req.params.blog_id, function(error, blog) {
    var response = {
      message: "Blog post successfully deleted",
      id: blog.blog_id
    };
    Blog.find({}, (err, blog) => {
      if (err) {console.error(err); return res.sendStatus(500);}

      res.json(blog)
    })
  });
})

app.post('/create-blog', (req, res) => {
  let blog = new Blog()
  blog.title = req.body.title
  blog.content = req.body.content
  blog.tags = req.body.tags
  blog.createdAt = Date.now()

  blog.save(err => {
    if (err) {console.error(err); return res.sendStatus(500);}

      Blog.find(function(err, blogs) {
        if(err) {
          res.send(err)
        } else {
          res.send(blogs)
        }
      })
  })
})

app.put('/editblogs/:blog', function (req, res) {
  Blog.findById(req.body.item._id, function (err, blog) {
 
    if (err) {
        res.status(500).send(err);
    } else {
        blog.title = req.body.item.title || blog.title;
        blog.content = req.body.item.content || blog.content;
        blog.tags = req.body.item.tags || blog.tags;
        blog.save(function (err, blog) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(blog);
        });
    }
  });
})

function run_server() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) run_server();
