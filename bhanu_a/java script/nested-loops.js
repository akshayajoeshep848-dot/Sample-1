
const data = [
  {
    semester: 1,
    subjects: [
      {
        subtjectName: "AI",
        chapters: [
          { chapterNo: 1, chapterName: "Introduction to AI" },
          { chapterNo: 2, chapterName: "History Of AI" },
          { chapterNo: 3, chapterName: "Types of AI" },
          { chapterNo: 4, chapterName: "AI Agents" },
          { chapterNo: 5, chapterName: "Applications of AI" },
        ],
      },
      {
        subtjectName: "ML",
        chapters: [
          { chapterNo: 1, chapterName: "Introduction to ML" },
          { chapterNo: 2, chapterName: "History Of ML" },
          { chapterNo: 3, chapterName: "Types of ML" },
          { chapterNo: 4, chapterName: "ML Agents" },
          { chapterNo: 5, chapterName: "Applications of ML" },
        ],
      },
    ],
  },
  {
    semester: 1,
    subjects: [
      {
        subtjectName: "AI",
        chapters: [
          { chapterNo: 1, chapterName: "Introduction to AI" },
          { chapterNo: 2, chapterName: "History Of AI" },
          { chapterNo: 3, chapterName: "Types of AI" },
          { chapterNo: 4, chapterName: "AI Agents" },
          { chapterNo: 5, chapterName: "Applications of AI" },
        ],
      },
      {
        subtjectName: "ML",
        chapters: [
          { chapterNo: 1, chapterName: "Introduction to ML" },
          { chapterNo: 2, chapterName: "History Of ML" },
          { chapterNo: 3, chapterName: "Types of ML" },
          { chapterNo: 4, chapterName: "ML Agents" },
          { chapterNo: 5, chapterName: "Applications of ML" },
        ],
      },
    ],
  }
];

// Print all items
data.forEach((semesterObj, index) => {
  console.log(`Semester ${semesterObj.semester} (Entry ${index + 1}):`);
  semesterObj.subjects.forEach((subject) => {
    console.log(`  Subject: ${subject.subtjectName}`);
    subject.chapters.forEach((chapter) => {
      console.log(`    Chapter ${chapter.chapterNo}: ${chapter.chapterName}`);
    });
  });
});
