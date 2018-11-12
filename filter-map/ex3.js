/* Array.prototype.map ET filter - Exercice 3

Variation sur l'exercice précédent: la fonction getStudentsPerCurriculum reçoit cette fois deux arguments.
1. Encore un tableau d'objets, décrivant des campus de la Wild Code School.
Les noms des propriétés restent les mêmes, mais le contenu du tableau curriculums change.
- city: ville où se trouve le campus
- curriculums: tableau d'objets, ayant chacun une propriété name ('JS/Angular', etc.) et
une propriété numStudents indiquant le nombre d'élèves pour ce cursus
2. Le nom d'un cursus

En utilisant filter et map, la fonction doit d'abord éliminer les campus
qui ne proposent pas le cursus donné par le 2ème argument, puis renvoyer,
pour chaque campus gardé, un objet sous la forme : { VILLE: NB_ELEVES }.

Arguments en entrée:

1. Tableau des campus:
[
  { city: 'Bordeaux',
    curriculums: [
      { name: 'PHP/Symfony', numStudents: 12 },
      { name: 'JS/React', numStudents: 29 }
    ]
  },
  {
    city: 'La Loupe',
    curriculums: [
      { name: 'JS/Angular', numStudents: 32 }
    ]
  },
  {
    city: 'Lille',
    curriculums: [
      { name: 'PHP/Symfony', numStudents: 12 },
      { name: 'JS/React', numStudents: 10 }
    ]
  },
  {
    city: 'Marseille',
    curriculums: [
      { name: 'JS/React', numStudents: 16 }
    ]
  }
]

2. Nom du cursus: 'PHP/Symfony'

Sortie attendue:
  [{ Bordeaux: 12 }, { Lille: 12 }]

*/

function getStudentsPerCurriculum(campuses, curriculumName) {
  // let campusTri = [];
  // let students = [];
  // for (let i = 0; i < campuses.length; i++) {
  //   for (let j = 0; j < campuses[i].curriculums.length; j++) {
  //     if (campuses[i].curriculums[j].name == curriculumName) {
  //       campusTri.push(campuses[i]);
  //       students.push(campuses[i].curriculums[j].numStudents);
  //     }
  //   }
  // }
  // return students.map((student, i) => {
  //   return {[campusTri[i].city]: students[i]};
  // });
  let tabInter = [];
  let students = [];
  for (let i = 0; i < campuses.length; i++) {
    tabInter.push(campuses[i].curriculums.filter(curri => {
      if (curri.name == curriculumName) {
        return curri;
      }
    }));
    students.push(campuses[i].curriculums.filter(curri => {
      if (curri.name == curriculumName) {
        return curri;
      }
    }).name);

  }
  return tabInter.map((campus, i) => {
    return {[tabInter[i].city]: students[i]}
  } )
}

module.exports = getStudentsPerCurriculum;
