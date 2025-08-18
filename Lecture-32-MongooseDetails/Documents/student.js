let students = [
  {
    name: 'Himanshi',
    age: 20,
    subject: 'OS',
    marks: 70,
    address_id: '6883aed6d913938feaeec4fb'
  },
  {
    name: 'Anas',
    age: '21',
    subject: 'Web Development',
    marks: '80',
    address_id: '6883aed6d913938feaeec4fc'

  },
  {
    name: 'Bakar',
    age: '23',
    marks: '70',
    subject: 'History',
    address_id: '6883aed6d913938feaeec4fd'
  },
  {
    name: 'Nina',
    age: '18',
    subject: 'Maths',
    marks: '90',
    address_id: '6883aed6d913938feaeec4fe'
  }
]


// '0': ObjectId('6883aed6d913938feaeec4fb'),
//     '1': ObjectId('6883aed6d913938feaeec4fc'),
//     '2': ObjectId('6883aed6d913938feaeec4fd'),
//     '3': ObjectId('6883aed6d913938feaeec4fe')







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
