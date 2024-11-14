const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.adwb34d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("jobportal");
    const jobCollections = db.collection("demoJobs");

    // Post a job
    app.post("/post-job", async (req, res) => {
      try {
        const body = req.body;
        console.log(body);
        body.createdAt = new Date(); // Fixed the typo from createAt to createdAt

        const result = await jobCollections.insertOne(body);

        if (result.insertedId) {
          res.status(200).send(result);
        } else {
          res.status(404).send({
            message: "Cannot insert your data! Please try again later.",
            status: false,
          });
        }
      } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send({
          message: "Internal Server Error",
          status: false,
        });
      }
    });

    // Delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobCollections.deleteOne(filter);
      res.send(result);
    });

    //Update a job
    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;

      try {
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: { ...jobData },
        };

        const result = await jobCollections.updateOne(filter, updateDoc);
        res.send(result);
      } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).send({ message: "Internal server error" });
      }
    });

    // Get all jobs
    app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await jobCollections.find({}).toArray();
        res.send(jobs);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({
          message: "Internal Server Error",
          status: false,
        });
      }
    });

    // get single job using id

    app.get("/all-jobs/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const job = await jobCollections.findOne({
          _id: new ObjectId(id),
        });
        res.send(job);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({
          message: "Internal Server Error",
          status: false,
        });
      }
    });

    // get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      console.log(req.params.email);
      const jobs = await jobCollections
        .find({ postedBy: req.params.email })
        .toArray();
      res.send(jobs);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
