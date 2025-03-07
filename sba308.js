// Reference Source: code sandbox, https://codesandbox.io/p/sandbox/sba-308-example-26sg4j?file=%2Fsrc%2Findex.js%3A2%2C1-100%2C1&from-embed=
//  // 1.  course info object:
//  {
//   "id": number,
//   "name": string,
// }


// 2. AssignmentGroup object

// {
//     "id": number,
//     "name": string,
//     // the ID of the course the assignment group belongs to
//     "course_id": number,
//     // the percentage weight of the entire assignment group
//     "group_weight": number,
//     "assignments": [AssignmentInfo],
//   }
  

//// 3. AssignmentInfo
// {
//     "id": number,
//     "name": string,
//     // the due date for the assignment
//     "due_at": Date string,
//     // the maximum points possible for the assignment
//     "points_possible": number,
//   }
  
// 4. LearnerSubmission Objects
// {
//     "learner_id": number,
//     "assignment_id": number,
//     "submission": {
//       "submitted_at": Date string,
//       "score": number
//     }
// }

//***GOAL:analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:***


// // EXAMPLE::::

// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }


// ---------------------
// Create a function named getLearnerData()
//values(parameters)-> CourseInfo, AssignmentGroup, [LearnerSubmission]. THESE SHOULD BE AN ARAY OF OBJECTS 

// SAMPLEDATA(sandbox):
const CourseInfo = {
    id: ,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: ,
    name: "Fundamentals of JavaScript",
    course_id: ,
    group_weight: ,
    assignments: [
      {
        id: ,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 
      },
      {
        id: ,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: ,
      assignment_id: ,
      submission: {
        submitted_at: "2023-01-25",
        score: 
      }
    },
    {
      learner_id: ,
      assignment_id: ,
      submission: {
        submitted_at: "2023-02-12",
        score: 
      }
    },
    {
      learner_id: ,
      assignment_id: ,
      submission: {
        submitted_at: "2023-01-25",
        score: 
      }
    },
    {
      learner_id: ,
      assignment_id: ,
      submission: {
        submitted_at: "2023-01-24",
        score: 
      }
    },
    {
      learner_id: ,
      assignment_id: ,
      submission: {
        submitted_at: "2023-03-07",
        score: 
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: ,
        avg: , // (47 + 150) / (50 + 150)
        1: , // 47 / 50
        2: // 150 / 150
      },
      {
        id: ,
        avg: , // (39 + 125) / (50 + 150)
        1: , // 39 / 50
        2:  // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  