// // 1.  course info object:
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