// function person(fname,lname){
//     this.fname = fname;
//     this.lname = lname,
//     this.fullName=function(){
//         return this.fname+'-'+this.lname;
//     }
// }
// var p = new person('jhghj',23)
//console.log(p.fullName())


class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next
    }
}

// var n = new Node(200)
// console.log(n)

class LinkedList{
    constructor(){
        this.head = null
        this.size= 0
    }

    insertFirst(data){
        //console.log(this.head)
        this.head = new Node(data,this.head)
        this.size++
    }
    insertLast(data){
        let current
        if(!this.head){
            this.head = new Node(data)
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = new Node(data)
        }
        this.size++
    }

    printList(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}
var l = new LinkedList()
l.insertFirst(100)
l.insertFirst(34)
l.insertFirst(234)
l.insertLast(56)

console.log(l.printList())