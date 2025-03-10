// Reference Source: code sandbox, https://codesandbox.io/p/sandbox/sba-308-example-26sg4j?file=%2Fsrc%2Findex.js%3A2%2C1-100%2C1&from-embed=
// reference source: for functions I referenced ws3 https://www.w3schools.com/js/js_functions.asp
//  Reference Source: https://www.w3schools.com/js/js_arrays.asp
//  Reference Source: https://www.w3schools.com/jsref/jsref_object_keys.asp
//  Reference Source: https://www.canva.com/design/DAFxJzEGlWs/OxnBpoTDbneAidu7eN9WLw/edit
//  Reference Source: https://www.w3schools.com/js/js_if_else.asp
// Reference Source: https://www.youtube.com/watch?v=PgUXiprlg1k
// Reference Source: https://www.youtube.com/watch?v=cFTFtuEQ-10

// let generalData = {
//   id: 333,
//   avg: 85, // the learner’s weighted average, in which assignments with more points_possible should be counted for more e.g. a learner with 50/100 on one assignment and 190/200 on anotherwould have a weighted average score of 240/300 = 80%.
//   learnerSubmission: 100,
// };

const courseInfo = {
  id: 777,
  name: "Friends",
};

const assignmentInfo = {
  //assignment info block  has to be placed before assignment group because ln 30 won't work if it's after. (JS reads from top to bottom)
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

function getLearnerData(courseInfo, assignmentGroup, learnerSubmission) { // I know courseInfo and assignmentGroup are dulled out because i have referred to them in other parts of the code
  let totalScore = 0;
  let result = {};
  result.id = learnerSubmission[0].learner_id;
  for (let i = 0; i < learnerSubmission.length; i++) {
    // learnsubmission.length includes all the blocks of code in learnerSubmission
    result[learnerSubmission[i].assignment_id] =
      learnerSubmission[i].submission.score;
    totalScore += learnerSubmission[i].submission.score;

    result.avg = totalScore / learnerSubmission.length;
    console.log(result);
  }

  let avg = result.avg; //it's only showing checking the learner id that's 333 and not both 210 and 333. Really confused.

  if (avg >= 94) {
    console.log("You have an A+!");
  } else {
    console.log("Fail");
  }

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
}


  { getLearnerData(courseInfo, assignmentGroup, learnerSubmission); 
  }