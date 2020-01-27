/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  // This is your job. :)
  var grade = ''
    if (percentGrade > 96) {
      grade = 'A+'
    }
    else if (percentGrade > 92) {
      grade = 'A'
    }
    else if (percentGrade > 89) {
      grade = 'A-'
    }
    else if (percentGrade > 86) {
      grade = 'B+'
    }
    else if (percentGrade > 82) {
      grade = 'B'
    }
    else if (percentGrade > 79) {
      grade = 'B-'
    }
    else if (percentGrade > 76) {
      grade = 'C+'
    }
    else if (percentGrade > 72) {
      grade = 'C'
    }
    else if (percentGrade > 69) {
      grade = 'C-'
    }
    else if (percentGrade > 66) {
      grade = 'D+'
    }
    else if (percentGrade > 62) {
      grade = 'D'
    }
    else if (percentGrade > 59) {
      grade = 'D-'
    }
    else if (percentGrade < 60) {
      grade = 'F'
    }
  return grade
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  console.log(letterGrade(0) === 'F')
  console.log(letterGrade(10) === 'F')
  console.log(letterGrade(40) === 'F')
  console.log(letterGrade(60) === 'D-')  
  console.log(letterGrade(70) === 'C-')
  console.log(letterGrade(73) === 'C')  
  console.log(letterGrade(79) === 'C+')
  console.log(letterGrade(80) === 'B-')
  console.log(letterGrade(85) === 'B')
  console.log(letterGrade(90) === 'A-')
  console.log(letterGrade(99) === 'A+')
  console.log(letterGrade(109) === 'A+')

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = letterGrade;
