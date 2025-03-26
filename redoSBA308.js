// reference: https://stackoverflow.com/questions/14362939/whats-the-meaning-of-in-front-of-a-variable
// code sandbox, https://codesandbox.io/p/sandbox/sba-308-example-26sg4j?file=%2Fsrc%2Findex.js%3A2%2C1-100%2C1&from-embed=
// reference source: for functions I referenced ws3 https://www.w3schools.com/js/js_functions.asp
//  Reference Source: https://www.w3schools.com/js/js_arrays.asp
//  Reference Source: https://www.w3schools.com/jsref/jsref_object_keys.asp
//  Reference Source: https://www.canva.com/design/DAFxJzEGlWs/OxnBpoTDbneAidu7eN9WLw/edit
//  Reference Source: https://www.w3schools.com/js/js_if_else.asp
// Reference Source: https://www.youtube.com/watch?v=PgUXiprlg1k
// Reference Source: https://www.youtube.com/watch?v=cFTFtuEQ-10

const courseInfo = {
  id: 777,
  name: "Friends",
};

const assignmentInfo = {
  id: 444,
  name: "How you doin'?",
  due_at: "2025-03-15", //the due date for the assignment
  points_possible: 500, // the maximum points possible for the assignment
};

const assignmentGroup = {
  id: 222,
  name: "New York",
  course_id: 100, //the ID of the course the assignment group belongs to
  group_weight: 300, // the percentage weight of the entire assignment group
  assignments: [assignmentInfo],
};

const learnerSubmission = [
  {
    learner_id: 333,
    assignment_id: 4,
    submission: {
      submitted_at: "2025-03-16",
      score: 30,
    },
  },
  {
    learner_id: 333,
    assignment_id: 10,
    submission: {
      submitted_at: "2025-04-01",
      score: 120,
    },
  },
  {
    learner_id: 210,
    assignment_id: 4,
    submission: {
      submitted_at: "2025-03-25",
      score: 47,
    },
  },
  {
    learner_id: 210,
    assignment_id: 10,
    submission: {
      submitted_at: "2025-04-12",
      score: 179,
    },
  },
];

function getLearnerData(courseInfo, assignmentGroup, learnerSubmission) {
  let learnerResults = {}; // This is to include all my learners! I initially only had learner 333 being accounted for in my console.log. (noticed in next comment)
  //   result.id = learnerSubmission[0].learner_id;

  for (let i = 0; i < learnerSubmission.length; i++) {
    // learnsubmission.length includes all the blocks of code in learnerSubmission
    let learnerId = learnerSubmission[i].learner_id;
    let assignmentId = learnerSubmission[i].assignment_id;
    let learnerScore = learnerSubmission[i].submission.score; // score is nested in submission. This is located under the learner submission section.

    if (!learnerResults[learnerId]) {
      // "!" means does not. 
      learnerResults[learnerId] = {
        // we are using an object that lists the key and value. ex. id= key, learnerId=value
        id: learnerId,
        totalScore: 0,
        assignmentScores: {},
        count: 0,
      };
      // count:0 is just a placeholder. refers to the number of assignments. Must be included or clg will have NaN for count and avg for both students. :(
    }

    learnerResults[learnerId].assignmentScores[assignmentId] = learnerScore; 
    learnerResults[learnerId].totalScore += learnerScore;
    learnerResults[learnerId].count++;
    // each "." is a pathway to the next path. See lines 67-74 :)
  }

  for (let learnerId in learnerResults) {
    let learner = learnerResults[learnerId];
    learner.avg = learner.totalScore / learner.count;

    console.log(`Learner ${learner.id} Results:`, learner); // curly brackets let us know this is an object. $ indicates that this variable has an object.(see my reference link above^)

    if (learner.avg >= 94) {
      console.log(`Learner ${learner.id}:You have an A+!`);
    } else {
      console.log(`Learner ${learner.id}:Fail`); // if else statement is explaining that if the learner average is greater than/= to 94,the console.log will print out "you have an A+!". 'ELSE' tells us that if it is NOT >=94, the console.log will print "Fail".
    }
  }
}


// Down below is my old Code from the first submission!


// result[learnerSubmission[i].assignment_id] =
//   learnerSubmission[i].submission.score;
// totalScore += learnerSubmission[i].submission.score;

//     result.avg = totalScore / learnerSubmission.length;
//     console.log(result);
//   }

//   let avg = result.avg; //it's only showing checking the learner id that's 333 and not both 210 and 333. Really confused.

// let completed = new date(submittedDate);
// const deadline = new date(assignmentInfo.due_at);
// if (completed > deadline) {
//   console.log("LATE");
// } else {
//   console.log("on time!");
// }

// {
//   try { //tests code for errors
//     console.log("Should be included");

//     homework;

//     console.log("Not Included");

//   } catch (err) {

//     console.log("Error has occurred:" + err);

//   } finally {
//     console.log("Please try again");
//   }
// console.log("...Move on"); // this causes my code to break :(

getLearnerData(courseInfo, assignmentGroup, learnerSubmission);
