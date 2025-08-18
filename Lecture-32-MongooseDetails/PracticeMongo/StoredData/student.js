let students = [
    {
    _id: ObjectId('6883bd16624b6fb54dd08c3b'),
    name: 'Anas',
    age: 22,
    marks: 99,
    address_id: '6883c19250b0febeb9eec4a9'
  },
  {
    _id: ObjectId('6883bcfa624b6fb54dd08c39'),
    name: 'Sakshi',
    age: 21,
    marks: 95,
    address_id: '6883c19250b0febeb9eec4aa'
  },
  {
    _id: ObjectId('6883bd32624b6fb54dd08c3d'),
    name: 'Bakar',
    age: 20,
    marks: 80,
    address_id: '6883c19250b0febeb9eec4ab'
  },
  {
    _id: ObjectId('6883bd48624b6fb54dd08c3f'),
    name: 'Palak',
    age: 20,
    marks: 90,
    address_id: '6883c19250b0febeb9eec4ac'
  }
]

// {
//     '0': ObjectId('6883c19250b0febeb9eec4a9'),
//     '1': ObjectId('6883c19250b0febeb9eec4aa'),
//     '2': ObjectId('6883c19250b0febeb9eec4ab'),
//     '3': ObjectId('6883c19250b0febeb9eec4ac')
//   }





let arr = ['ABC', 'EFG', 'HIJ', 'KLM', 'NOP', 'QRS', 'UVW', 'XYZ']
let newStudent = []
for (let i = 1; i <= 35; i++) {
  newStudent.push({
    name: arr[Math.floor(Math.random() * 8)],
    age:i,
    marks:1*2+5,
    subject: arr[Math.floor(Math.random() * 8)]
  })
}
console.log(newStudent);
