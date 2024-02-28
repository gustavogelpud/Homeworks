class node
{
    constructor(value, next = null)
    {
    this.value = value;
    this.next = next;
    }
}

class LinkedList {
    constructor ()
{
    this.head = null;
    this.tail = null;
}

append (tarea)
{
    const newNode = new node (tarea);
    if(!this.head)
    {
        this.head = newNode;
    }
    else
    {
        this.tail.next = newNode;
    }
    this.tail = newNode;
}

print()
{
    let node = this.head;
    while (node !=null)
    {
        console.log (`Titulo ${node.value.titulo}`)
        console.log (`Descripcion ${node.value.descripcion}`)
        node = node.next
    }
}
}

class tarea
{
    constructor(titulo, descripcion = null)
    {
    this.titulo = titulo;
    this.descripcion = descripcion;
    }
}

const NewTarea = new tarea();
NewTarea.titulo = "Ir a cine";
NewTarea.descripcion = "Comprar perro y crispetas";

const Tarea2 = new tarea();
Tarea2.titulo = "Lavar Carro";
Tarea2.descripcion = "Está muy sucio";

const listaTarea = new LinkedList();
listaTarea.append(NewTarea);
listaTarea.append(Tarea2);

listaTarea.print();