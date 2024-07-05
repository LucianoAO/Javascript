const obj = [
    {
    nome: "Matheus",
    idade: 30,
    Esta_trabalhando: true,
    detalhes_profissao: {
        profissao: "Programador",
        empresa: "Empresa F"
    },
    hobbies: ["filosofia", "xadrez", "programar"]
    },
    {
        nome: "Luciano",
        idade: 15,
        Esta_trabalhando: true,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: ["filosofia", "xadrez", "programar"]
        }
]



// JSON
// Converter objeto para json

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// Converter JSON para objeto

const objData = JSON.parse(jsonData)
console.log(objData)