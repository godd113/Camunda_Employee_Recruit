import { Client, logger } from "camunda-external-task-client-js";
import { Variables, logger } from "camunda-external-task-client-js";

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://10.100.3.57:28080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("sendLetterWorker", async function({ task, taskService }) {
  const candidateName = task.variables.get("candidate_name")
  console.log("*** Candidate Name : " + candidateName + " ***")

  const response = "You got a jobs!!!"
  const variable = new Variables();
  variable.set("response", response)
  await taskService.complete(task, variable);
});