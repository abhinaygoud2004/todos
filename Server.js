const exp = require("express");
const app = exp();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(exp.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "abhinay@123",
  database: "Todos",
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});

app.post("/AddTask", (req, res) => {
  const task = req.body.task;
  const Priority = req.body.Priority;
  const Category = req.body.Category;
  db.query(
    "INSERT INTO TodoTable (task,priority,category) VALUES (?,?,?)",
    [task, Priority, Category],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get('/today', (req, res) => {
  db.query("SELECT *from TodoTable WHERE ts=current_date()", (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result)
    }
  })
})

app.get('/completed', (req, res) => {
  db.query("SELECT *from TodoTable WHERE status=?", "completed", (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result)
    }
  })
})


app.get('/personal', (req, res) => {
  db.query("SELECT *from TodoTable WHERE category=?", ["Personal"], (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result)
    }
  })
})

app.get('/HighPriority', (req, res) => {
  db.query("SELECT *from TodoTable WHERE priority=?", ["High"], (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result)
    }
  })
})

app.get('/LowPriority', (req, res) => {
  db.query("SELECT *from TodoTable WHERE priority=?", ["Low"], (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result)
    }
  })
})

app.get('/MediumPriority', (req, res) => {
  db.query("SELECT *from TodoTable WHERE priority=?", ["Medium"], (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result)
    }
  })
})

app.get("/AllTasks", (req, res) => {
  db.query("SELECT * FROM TodoTable", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM TodoTable WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});





app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "UPDATE TodoTable SET status = ? WHERE id = ?",
    ["completed", id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


const path = require("path");
//connect react build
app.use(exp.static(path.join(__dirname, './build')))

//middleware to deal with page refresh
const pageRefresh = (request, response) => {
  response.sendFile(path.join(__dirname, './build/index.html'))
}
app.use("*", pageRefresh)